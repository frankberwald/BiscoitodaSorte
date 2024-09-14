import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5DEB3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  openButton: {
    borderWidth: 1,
    margin: 50,
    width: 200,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA500',
    borderRadius: 10
  },
  buttonText: {
    fontSize:24,
    color: '#fff'
  },
  newFortune: {
    borderWidth: 1,
    margin: 50,
    width: 200,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA500',
    borderRadius: 10
  },
  newFortuneText: {
    fontSize: 24,
    color: '#fff'
  },
  fortuneText: {
    fontSize: 24,
    textAlign: 'justify',
    padding: 10,
    color: '#FF4400'
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
  }
});
