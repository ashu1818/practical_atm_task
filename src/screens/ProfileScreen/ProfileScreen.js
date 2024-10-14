import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import React from 'react';
import {IMAGES} from '../../assets/images/map';
import {styles} from './ProfileScreenStyle';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomDropdown from '../../components/CustomDropdown/CustomDropdown';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('Back Pressed');
        }}>
        <Image source={IMAGES.back} style={styles.back} />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Text style={styles.profileText}>Profile</Text>
        <Text style={styles.subText}>
          Welcome! Manage your profile, preferences, and stay on top of your
          journey.
        </Text>
        <Image source={IMAGES.setting} style={styles.settingIcon} />
        <View>
          <View style={styles.inputView}>
            <CustomTextInput
              placeholder={'John'}
              icon={IMAGES.user}
              title={'First Name'}
              width="48%"
              onChangeText={val => {
                console.log('val', val);
              }}
            />
            <CustomTextInput
              placeholder={'Smith'}
              title={'Last Name'}
              width="48%"
              onChangeText={val => {
                console.log('val', val);
              }}
            />
          </View>
          <CustomTextInput
            placeholder={'XYZ Enterprise'}
            title={'Enterprise Name'}
            icon={IMAGES.home}
            width="100%"
            onChangeText={val => {
              console.log('val', val);
            }}
          />
          <CustomTextInput
            placeholder={'123 Johnson St. New York'}
            title={'Address'}
            icon={IMAGES.location}
            width="100%"
            onChangeText={val => {
              console.log('val', val);
            }}
          />
          <CustomTextInput
            keyboardType="number-pad"
            placeholder={'+1 416-847-7894'}
            title={'Telephone'}
            icon={IMAGES.telephone}
            width="100%"
            onChangeText={val => {
              console.log('val', val);
            }}
          />
          <CustomDropdown />

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ATMScreen');
            }}
            style={styles.submitButton}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
