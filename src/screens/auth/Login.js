import { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import { ROUTES } from '../../utils';

const Login = () => {
  // GETTER //SETTER
  const [emailAdd, setEmailAdd] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  //   useEffect(() => {}, [emailAdd, password]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'black' }}>{emailAdd}</Text>
      <Text style={{ color: 'black' }}>{password}</Text>

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <CustomTextInput
          label={'Email Address'}
          placeholder={'Email Address'}
          value={val => setEmailAdd(val)}
          containerStyle={{
            width: '100%',
            marginBottom: 15,
          }}
          labelStyle={{
            fontSize: 20,
            fontWeight: '500',
          }}
          textStyle={{
            fontSize: 20,
          }}
        />

        <CustomTextInput
          label={'Password'}
          placeholder={'Password'}
          value={val => setPassword(val)}
          containerStyle={{
            width: '100%',
          }}
          labelStyle={{
            fontSize: 20,
            fontWeight: '500',
          }}
          textStyle={{
            fontSize: 20,
          }}
        />
      </View>

      <CustomButton
        label={'LOGIN'}
        containerStyle={{
          marginVertical: 20,
          width: '80%',
          backgroundColor: 'blue',
          borderRadius: 10,
        }}
        textStyle={{
          color: '#ffffff',
          textAlign: 'center',
          fontWeight: '800',
          fontSize: 20,
        }}
        onPress={() => {
          if (emailAdd === '' && password === '') {
            Alert.alert('Incorrect Credentials', 'Please try again!');
            return;
          }
        }}
      />

      <View style={{ flexDirection: 'row' }}>
        <Text>Not register yet?</Text>
        <TouchableOpacity
          style={{ marginLeft: 5 }}
          onPress={() => navigation.navigate(ROUTES.REGISTER)}
        >
          <Text style={{ color: 'red', fontWeight: '800' }}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
