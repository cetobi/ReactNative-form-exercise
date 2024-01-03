import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 30,
    paddingTop: 20,
    paddingBottom: 5,
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: .25,
    color: '#E5BF3C',
  },
  inputContainer: {
    width: '50%',
    alignItems: 'center',
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: '#E5BF3C',
    paddingVertical: 10
  },
  labelInput: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 5,
    paddingBottom: 10
  },
  label: {
    width: '100%',
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  input: {
    width: '100%',
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 10,
  }
});