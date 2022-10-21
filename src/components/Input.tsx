import { Input as NativeBaseInput, IInputProps } from 'native-base'

export function Input({ ...rest }: IInputProps) {
    return (
        <NativeBaseInput
            backgroundColor="gray.700"
            fontSize="md"
            height={16}
            marginBottom={4}
            _focus={{
                backgroundColor: "gray.200",
                borderWidth: 2,
                borderColor: "green.500"
            }}
            {...rest}
        />
    )
}