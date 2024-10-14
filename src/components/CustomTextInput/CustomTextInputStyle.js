import {StyleSheet} from 'react-native';
import {normalize} from '../../utils/normalize';
import {APP_COLORS} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    marginVertical: normalize(10),
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    color: APP_COLORS.black,
  },
  inputView: {
    borderWidth: normalize(0.5),
    borderColor: APP_COLORS.gray,
    borderRadius: normalize(8),
    paddingHorizontal: normalize(15),
    // justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    marginTop: normalize(15),
  },
  icon: {
    height: normalize(18),
    width: normalize(18),
    tintColor: APP_COLORS.gray,
    alignSelf: 'center',
    marginRight: normalize(15),
  },
  inputStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '70%',
    fontSize: 16,
    justifyContent: 'center',
    color: APP_COLORS.gray,
  },
});
