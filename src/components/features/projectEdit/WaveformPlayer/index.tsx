import React, { useEffect, useRef, useState } from 'react';
import { View, Dimensions, Text } from 'react-native';
import Svg, { Rect, Line, Circle } from 'react-native-svg';
import { CuePointType } from '@/types/cuePointType';
import { formatTime } from '@/utils/formatTime';
import { COLORS } from '@/globalStyles';
import styles from './WaveformPlayer.styles';

interface Props {
  sound: any;
  waveformJson: any;
  onSeek?: (ms: number) => void;
  cuePoints?: CuePointType[];
  onCuePointUpdate?: (index: number, updatedCue: CuePointType) => void;
  onPlaybackFinish?: () => void;
}

export default function WaveformPlayer({
  sound,
  waveformJson,
  onSeek,
  cuePoints = [],
  onCuePointUpdate,
  onPlaybackFinish,
}: Props) {
  const [waveform, setWaveform] = useState<number[]>([]);
  const [duration, setDuration] = useState(1);
  const [position, setPosition] = useState(0);

  const waveformWidth = Dimensions.get('window').width - 40;
  const waveformHeight = 62;

  const positionRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    let isMounted = true;

    const loadWaveform = async () => {
      try {
        const json = Array.isArray(waveformJson)
          ? waveformJson
          : waveformJson?.data ?? [];

        const max = Math.max(...json.map(Math.abs)) || 1;
        const normalized = json.map((v: number) => Math.abs(v) / max);

        const desiredBars = Math.floor(waveformWidth / 3);
        const step = Math.max(1, Math.floor(normalized.length / desiredBars));
        const downSampled = [];

        for (let i = 0; i < normalized.length; i += step) {
          const slice = normalized.slice(i, i + step);
          downSampled.push(slice.reduce((a, b) => a + b, 0) / slice.length);
        }

        if (isMounted) setWaveform(downSampled);
      } catch (e) {
        console.error('Waveform load failed:', e);
      }
    };

    loadWaveform();
    return () => {
      isMounted = false;
    };
  }, [waveformJson, waveformWidth]);

  useEffect(() => {
    if (!sound) return;

    sound.setOnPlaybackStatusUpdate(async (status: any) => {
      if (status.isLoaded && !isDragging.current) {
        positionRef.current = status.positionMillis;
        setDuration(status.durationMillis || 1);
      }

      if (status.didJustFinish && !status.isLooping) {
        try {
          await sound.setPositionAsync(0);
        } catch (err) {
          console.warn('Failed to reset position:', err);
        }
        onPlaybackFinish?.();
      }
    });
  }, [sound]);

  useEffect(() => {
    if (!sound) return;
    let isMounted = true;

    const fetchDuration = async (retry = 0) => {
      if (!sound || retry > 10 || !isMounted) return;
      const status = await sound.getStatusAsync();

      if (
        status.isLoaded &&
        status.durationMillis &&
        status.durationMillis > 0
      ) {
        setDuration(status.durationMillis);
      } else {
        setTimeout(() => fetchDuration(retry + 1), 100);
      }
    };

    fetchDuration();
    return () => {
      isMounted = false;
    };
  }, [sound]);

  const animate = () => {
    if (!isDragging.current) setPosition(positionRef.current);
    rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleSeek = async (x: number) => {
    const seekPos = Math.min(
      Math.max((x / waveformWidth) * duration, 0),
      duration,
    );
    positionRef.current = seekPos;
    setPosition(seekPos);
    onSeek?.(seekPos);
  };

  const handleResponderGrant = (evt: any) => {
    const x = evt.nativeEvent.locationX;
    isDragging.current = true;
    handleSeek(x);
  };
  const handleResponderMove = (evt: any) => {
    const x = evt.nativeEvent.locationX;
    isDragging.current = true;
    handleSeek(x);
  };
  const handleResponderRelease = (evt: any) => {
    const x = evt.nativeEvent.locationX;
    isDragging.current = false;
    handleSeek(x);
  };

  const getPinX = (time: number) => (time / duration) * waveformWidth;

  useEffect(() => {
    if (!sound || cuePoints.length === 0) return;

    cuePoints.forEach((cue, index) => {
      if (cue.isActive && cue.time === undefined) {
        const currentTime = positionRef.current;
        onCuePointUpdate?.(index, { ...cue, time: currentTime });
      }
    });
  }, [cuePoints]);

  return (
    <View style={styles.container}>
      <View
        onStartShouldSetResponder={() => true}
        onResponderGrant={handleResponderGrant}
        onResponderMove={handleResponderMove}
        onResponderRelease={handleResponderRelease}
      >
        <Svg width={waveformWidth} height={waveformHeight}>
          {waveform.map((amp, index) => {
            const barWidth = waveformWidth / waveform.length - 1;
            const barHeight = amp * waveformHeight;
            const x = index * (barWidth + 1);
            return (
              <Rect
                key={`bar-${index}`}
                x={x}
                y={(waveformHeight - barHeight) / 2}
                width={barWidth}
                height={barHeight}
                fill={
                  position > 0 && x / waveformWidth < position / duration
                    ? COLORS.accent.goldPrimary
                    : COLORS.controller.bg
                }
              />
            );
          })}

          {cuePoints
            .filter((cue) => cue.time && cue.time > 0)
            .map((cue, i) => {
              const x = getPinX(cue.time!);
              const circleRadius = 5;
              return (
                <React.Fragment key={`cue-${i}`}>
                  <Line
                    x1={x}
                    y1={0}
                    x2={x}
                    y2={waveformHeight}
                    stroke={COLORS.accent.purple}
                    strokeWidth={4}
                  />
                  <Circle
                    cx={x}
                    cy={circleRadius}
                    r={circleRadius}
                    fill={COLORS.accent.purple}
                  />
                  <Circle
                    cx={x}
                    cy={waveformHeight - circleRadius}
                    r={circleRadius}
                    fill={COLORS.accent.purple}
                  />
                </React.Fragment>
              );
            })}
        </Svg>
      </View>

      <View style={styles.timeContainer}>
        <Text style={styles.time}>{formatTime(position)}</Text>
        <Text style={styles.time}>{formatTime(duration)}</Text>
      </View>
    </View>
  );
}
