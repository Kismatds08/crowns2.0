import firebase from 'firebase/app'
import 'firebase/firestore' // For Database
import 'firebase/auth' // For Authentication


const config = {
    apiKey: "AIzaSyA4r9j71Td_6iOeB02xTM9ZXegzJQFs-ck",
    authDomain: "crwn-db-aa552.firebaseapp.com",
    databaseURL: "https://crwn-db-aa552.firebaseio.com",
    projectId: "crwn-db-aa552",
    storageBucket: "crwn-db-aa552.appspot.com",
    messagingSenderId: "7727841343",
    appId: "1:7727841343:web:841c98c0e1d413400cf88a",
    measurementId: "G-4YM1MNHWQK"
}


// Initializes the App
firebase.initializeApp(config)

// Assigning your firebase authentication library
export const auth = firebase.auth()
// Assigning your firebase firestore library
export const firestore = firebase.firestore()

// Creating a document inside firestor by capturing the user object from authentication library
export const createUserProfileDocument = async (user, additionalData) => {

    // If not user object doesn't exist we are not going to create document
    if(!user) return 


    // User Reference Document 
    const userRef = firestore.doc(`users/${user.uid}`) 

    // Get method to get those details
    const snapShot = await userRef.get()
    if(!snapShot.exists){
        // This is the details we have to store in firestore as a document
        const {email, displayName} = user
        const createdAt = new Date()

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(error){
            console.log("Error Creating a User Document", error.message)
        }
    }

    return userRef

}

// Creating a new object from your authentication library for GoogleAuth Provider
const provider = new firebase.auth.GoogleAuthProvider()

// Setting the parameters to select an account prompt
provider.setCustomParameters({prompt:'select_account'})

// Executing this function SignInWithGoogle by calling signInWithPopup
// and providing the provider as the parameter for it using your auth library
export const signInwithGoogle = () => auth.signInWithPopup(provider)

export default firebase