import  auth  from '../Firebase/firebase';

const signInWithEmailPassword = (email, password) => {
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('User signed in:', user);
    })
    .catch((error) => {
      console.error('Error signing in:', error);
    });
};

export default signInWithEmailPassword;