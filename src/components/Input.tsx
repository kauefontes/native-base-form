import { Input as NativeBaseInput, IInputProps, FormControl } from 'native-base'

type Props = IInputProps & {
    errorMessage?: string | null
}

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
    const invalid = !!errorMessage || isInvalid
    return (
        <FormControl marginBottom={4} isInvalid={invalid}>
            <NativeBaseInput
                backgroundColor="gray.200"
                fontSize="md"
                height={16}
                isInvalid={invalid}
                placeholderTextColor="gray.500"
                _focus={{
                    backgroundColor: "gray.400",
                    borderWidth: 2,
                    borderColor: "green.500"
                }}
                _invalid={{
                    borderWidth: 2,
                    borderColor: "red.500"
                }}
                {...rest}
            />
            <FormControl.ErrorMessage>
                {errorMessage}
            </FormControl.ErrorMessage>
        </FormControl>
    )
}