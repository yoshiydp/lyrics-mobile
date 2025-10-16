import {
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {
  RichEditor,
  RichToolbar,
  actions,
} from 'react-native-pell-rich-editor';
import { PLACEHOLDERS } from '@/constants/placeholders';
import { styles } from './BodyInput.styles';

export default function BodyInput({
  editorRef,
  value,
  onChangeText,
  richEditorAddStyle,
  isEditing,
}: {
  editorRef?: React.Ref<RichEditor>;
  value: string;
  onChangeText: (text: string) => void;
  richEditorAddStyle?: any;
  isEditing?: boolean;
}) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <RichEditor
          ref={editorRef}
          editorStyle={{
            ...styles.richEditor,
            placeholderColor: '#666',
            ...(richEditorAddStyle ? richEditorAddStyle : {}),
          }}
          style={styles.editor}
          initialContentHTML={value}
          onChange={onChangeText}
          placeholder={PLACEHOLDERS.bodyInput}
          useContainer={false}
        />
      </ScrollView>

      {isEditing && (
        <RichToolbar
          editor={editorRef}
          style={styles.toolbar}
          actions={[
            actions.setBold,
            actions.setItalic,
            actions.insertBulletsList,
            actions.insertOrderedList,
          ]}
          iconMap={{
            [actions.setBold]: () => <Button title="B" onPress={() => {}} />,
            [actions.setItalic]: () => <Button title="I" onPress={() => {}} />,
            [actions.insertBulletsList]: () => (
              <Button title="•" onPress={() => {}} />
            ),
            [actions.insertOrderedList]: () => (
              <Button title="1." onPress={() => {}} />
            ),
          }}
        />
      )}
    </KeyboardAvoidingView>
  );
}
