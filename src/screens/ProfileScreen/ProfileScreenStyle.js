import {StyleSheet} from 'react-native';
import {APP_COLORS} from '../../theme/colors';
import {normalize} from '../../utils/normalize';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: APP_COLORS.white,
    padding: normalize(15),
  },
  back: {
    height: normalize(15),
    width: normalize(15),
    tintColor: APP_COLORS.black,
  },
  container: {
    marginTop: normalize(15),
  },
  profileText: {
    fontSize: 30,
    color: APP_COLORS.black,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
    color: APP_COLORS.black,
    fontWeight: '500',
    marginTop: normalize(5),
  },
  settingIcon: {
    height: normalize(100),
    width: normalize(100),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: normalize(25),
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  submitButton: {
    backgroundColor: APP_COLORS.pink,
    padding: normalize(10),
    borderRadius: normalize(8),
    marginVertical: normalize(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: APP_COLORS.white,
  },
});
