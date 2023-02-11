module.exports = {
    extends: ['plugin:react/recommended', 'plugin:prettier/recommended', '@react-native-community'],
    plugins: ['react', 'react-hooks'],
    rules: {
        'react-hooks/exhaustive-deps': 'off',
        'no-unused-vars': 2,
        'prettier/prettier': 0,
    },
};
