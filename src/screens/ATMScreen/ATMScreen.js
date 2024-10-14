import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {calculateDeduction} from '../../utils';
import {styles} from './ATMScreenStyle';
import {IMAGES} from '../../assets/images/map';

const ATMScreen = () => {
  const [totalBalance, setTotalBalance] = useState(50000);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [notes, setNotes] = useState({2000: 10, 500: 20, 200: 30, 100: 50});

  const handleWithdraw = () => {
    const amount = parseInt(withdrawAmount, 10);

    if (!amount || amount % 100 !== 0) {
      Alert.alert(
        'Invalid Amount',
        'Please enter an amount in multiples of 100.',
      );
      return;
    }
    if (amount > totalBalance) {
      Alert.alert(
        'Insufficient Balance',
        'Not enough balance in your account.',
      );
      return;
    }

    const {dispensedNotes, remainingNotes} = calculateDeduction(amount, notes);
    if (!dispensedNotes) {
      Alert.alert(
        'Error',
        'Cannot dispense the exact amount with available notes.',
      );
      return;
    }

    setTotalBalance(prev => prev - amount);
    setNotes(remainingNotes);
    setWithdrawAmount('');

    Alert.alert(
      'Withdrawal Successful',
      `Amount: ₹${amount}\nDispensed: ${JSON.stringify(dispensedNotes)}`,
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('Back Pressed');
        }}>
        <Image source={IMAGES.back} style={styles.back} />
      </TouchableOpacity>
      <Text style={styles.title}>ATM Application</Text>
      <Text style={styles.balance}>Total Balance: ₹{totalBalance}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter amount to withdraw"
        keyboardType="numeric"
        value={withdrawAmount}
        onChangeText={setWithdrawAmount}
      />

      <Text style={styles.notesHeader}>Available Notes:</Text>
      {Object.entries(notes).map(([note, count]) => (
        <Text key={note} style={styles.notesText}>
          ₹{note}: {count}
        </Text>
      ))}
      <TouchableOpacity onPress={handleWithdraw} style={styles.submitButton}>
        <Text style={styles.submitText}>Withdraw</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ATMScreen;
