import { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import { ROUTES } from '../../utils';

import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../app/reducers/auth';

const Login = () => {
  // GETTER //SETTER
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');

  const { isLoading } = useSelector(state => state.auth);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  //   useEffect(() => {}, [studentID, password]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'black' }}>{studentID}</Text>
      <Text style={{ color: 'black' }}>{password}</Text>

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <CustomTextInput
          label={'Student ID'}
          placeholder={'Student ID'}
          value={val => setStudentID(val)}
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
        loading={isLoading}
        onPress={async () => {
          // await userLogin({
          //   student_id: studentID,
          //   password: password,
          // });

          dispatch(
            userLogin({
              student_id: studentID,
              password: password,
            }),
          );
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
