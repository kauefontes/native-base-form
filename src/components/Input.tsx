import { Input as NativeBaseInput, IInputProps, FormControl } from 'native-base'

type Props = IInputProps & {
    errorMessage?: string | null
}

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
    const invalid = !!errorMessage || isInvalid
    return (
        <FormControl marginBottom={4} isInvalid={invalid}>
            <NativeBaseInput
                backgroundColor="gray.700"
                fontSize="md"
                height={16}
                isInvalid={invalid}
                _focus={{
                    backgroundColor: "gray.200",
                    borderWidth: 2,
                    borderColor: "green.500"
                }}
                _invalid={{
                    borderWidth: 2,
                    borderColor: "red.500"
                }}
                {...rest}
            />
        </FormControl>
    )
}