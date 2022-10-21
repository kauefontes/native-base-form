import { StyleSheet, Text, View } from 'react-native';

export function SignUp() {
    return (
        <View style={styles.container}>
            <Text>Sign up</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
