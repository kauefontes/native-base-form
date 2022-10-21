import { Center, Heading, VStack } from 'native-base'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { string } from 'yup/lib/locale'

type FormDataProps = {
    name: string,
    email: string,
    password: string
    password_confirm: string
}

const signUpSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Use a valid email').required('Email is required'),
    password: yup.string().min(6, 'Password should be at least 6 characters long').required('Password is required'),
    password_confirm: yup
        .string()
        .required('Password confirmation is required')
        .oneOf([yup.ref('password'), null], " Passwords doesn't match")
})

export function SignUp() {
    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(signUpSchema)
    })

    function handleSignup(data: FormDataProps) {
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
                            errorMessage={errors.name?.message}
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
                            errorMessage={errors.email?.message}
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
                            errorMessage={errors.password?.message}
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
                            errorMessage={errors.password_confirm?.message}
                        />
                    )}
                />
                <Button title='Submit' onPress={handleSubmit(handleSignup)} />
            </Center>
        </VStack>
    );
}
