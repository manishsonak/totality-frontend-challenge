import  auth  from '../Firebase/firebase';

const logOut = () => {
  auth.signOut()
    .then(() => {
      console.log('User signed out');
    })
    .catch((error) => {
      console.error('Error signing out:', error);
    });
};

export default logOut;