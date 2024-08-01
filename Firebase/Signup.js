import  auth  from '../Firebase/firebase';

const signUpWithEmailPassword = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('User signed up:', user);
    })
    .catch((error) => {
      console.error('Error signing up:', error);
    });
};

export default signUpWithEmailPassword;