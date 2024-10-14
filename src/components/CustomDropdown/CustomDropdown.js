import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/Fontisto';
import {styles} from './CustomDropdownStyle';
const data = [
  {label: 'Monde (fr) - France (fr)', value: '1'},
  {label: 'Mundo (es) - España (es)', value: '2'},
  {label: 'Welt (de) - Deutschland (de)', value: '3'},
  {label: 'Mondo (it) - Italia (it)', value: '4'},
  {label: '世界 (zh) - 中国 (cn)', value: '5'},
  {label: 'Мир (ru) - Россия (ru)', value: '6'},
  {label: 'World (en) - United States (us)', value: '7'},
  {label: 'Dünya (tr) - Türkiye (tr)', value: '8'},
  {label: 'Mundo (pt) - Brasil (br)', value: '9'},
  {label: '세계 (ko) - 한국 (kr)', value: '10'},
  {label: 'World (en) - India (in)', value: '11'},
];

const CustomDropdown = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <Icon
            style={styles.icon}
            color={isFocus ? 'blue' : 'black'}
            name="world"
            size={20}
          />
        )}
      />
    </View>
  );
};

export default CustomDropdown;
