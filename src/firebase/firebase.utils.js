import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCEoHldROC2dnvlbW9ob0_XhFGppRHFdsI",
    authDomain: "crwn-db-aca89.firebaseapp.com",
    projectId: "crwn-db-aca89",
    storageBucket: "crwn-db-aca89.appspot.com",
    messagingSenderId: "596130280558",
    appId: "1:596130280558:web:afe4111257b4cc84faa27f",
    measurementId: "G-YWL1BK48F1"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()
    
    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;