import { NativeBaseProvider } from 'native-base';
import { SignUp } from './src/Screens/SignUp';

export default function App() {
  return (
    <NativeBaseProvider>
      <SignUp />
    </NativeBaseProvider>
  );
}