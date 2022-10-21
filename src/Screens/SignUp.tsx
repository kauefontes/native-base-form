import { Center, Heading, VStack } from 'native-base';
import { Input } from '../components/Input';

export function SignUp() {
    return (
        <VStack bgColor='gray.300' flex={1} paddingX={10}>
            <Center>
                <Heading marginY={24}>
                    Sign up
                </Heading>

                <Input placeholder='Name' />
                <Input placeholder='E-mail' />
                <Input placeholder='Password' />
                <Input placeholder='Confirm Password' />
            </Center>
        </VStack>
    );
}
