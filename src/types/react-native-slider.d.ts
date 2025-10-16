declare module 'react-native-slider' {
  import { Component } from 'react';
  import { ViewStyle, StyleProp } from 'react-native';

  export interface SliderProps {
    style?: StyleProp<ViewStyle>;
    value?: number;
    minimumValue?: number;
    maximumValue?: number;
    step?: number;
    minimumTrackTintColor?: string;
    maximumTrackTintColor?: string;
    trackStyle?: StyleProp<ViewStyle>;
    thumbStyle?: StyleProp<ViewStyle>;
    onValueChange?: (value: number) => void;
    onSlidingStart?: (value: number) => void;
    onSlidingComplete?: (value: number) => void;
  }

  export default class Slider extends Component<SliderProps> {}
}
