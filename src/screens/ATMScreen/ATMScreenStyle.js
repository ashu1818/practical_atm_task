import {StyleSheet} from 'react-native';
import {normalize} from '../../utils/normalize';
import {APP_COLORS} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: normalize(15),
    backgroundColor: APP_COLORS.white,
  },
  back: {
    height: normalize(15),
    width: normalize(15),
    tintColor: APP_COLORS.black,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: normalize(20),
    color: APP_COLORS.primary,
  },
  balance: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: normalize(20),
    color: APP_COLORS.black,
  },
  input: {
    height: normalize(40),
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  notesHeader: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  notesText: {
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: APP_COLORS.primary,
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
