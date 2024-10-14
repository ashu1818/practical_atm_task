import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import {styles} from './CustomTextInputStyle';
import {APP_COLORS} from '../../theme/colors';

const CustomTextInput = ({
  placeholder,
  title,
  icon = null,
  width = '100%',
  onChangeText,
  keyboardType = 'default',
}) => {
  return (
    <View style={[styles.container, {width: width}]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputView}>
        {icon ? <Image source={icon} style={styles.icon} /> : <View />}
        <TextInput
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor={APP_COLORS.gray}
          style={styles.inputStyle}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default CustomTextInput;
