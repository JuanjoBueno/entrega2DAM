import {StyleSheet} from 'react-native';

// Define un tipo para los estilos globales
type CommonStyles = {
  container: {};
  titleText: {};
  button: {};
  buttonText: {};
};

const commonStyles = StyleSheet.create<CommonStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default commonStyles;
