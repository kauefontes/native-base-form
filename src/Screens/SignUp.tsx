import { Center, Heading, VStack } from 'native-base'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { useForm, Controller } from 'react-hook-form'

export function SignUp() {
    const { control, handleSubmit } = useForm()

    function handleSignup(data: any) {
        console.log(data)
    }
    return (
        <VStack bgColor='gray.300' flex={1} paddingX={10}>
            <Center>
                <Heading marginY={24}>
                    Sign up
                </Heading>

                <Controller
                    control={control}
                    name="name"
                    render={({ field: { onChange } }) => (
                        <Input
                            placeholder='Name'
                            onChangeText={onChange}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange } }) => (
                        <Input
                            placeholder='E-mail'
                            onChangeText={onChange}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange } }) => (
                        <Input
                            placeholder='Password'
                            secureTextEntry
                            onChangeText={onChange}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="password_confirm"
                    render={({ field: { onChange } }) => (
                        <Input
                            placeholder='Password Confirm'
                            secureTextEntry
                            onChangeText={onChange}
                        />
                    )}
                />
                <Button title='Submit' onPress={handleSubmit(handleSignup)} />
            </Center>
        </VStack>
    );
}
