import {StyleSheet} from 'react-native';
import {APP_COLORS} from '../../theme/colors';
import {normalize} from '../../utils/normalize';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    marginVertical: normalize(10),
  },
  dropdown: {
    height: normalize(40),
    borderColor: APP_COLORS.dark_gray,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: '100%',
    backgroundColor: APP_COLORS.dark_gray,
  },
  icon: {
    marginRight: normalize(10),
    tintColor: APP_COLORS.black,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: APP_COLORS.black,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: APP_COLORS.black,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
