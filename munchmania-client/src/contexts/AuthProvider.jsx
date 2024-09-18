import React, { createContext, useEffect, useState } from 'react';
import { 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut, 
    updateProfile 
} from 'firebase/auth';
import app from "../firebase/firebase.config.js";

// Create a context for authentication to be accessed throughout the application.
export const AuthContext = createContext();

// Initialize Firebase Authentication and provider for Google Sign-In.
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    // State to store the current authenticated user and loading status.
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Function to create a new user account using email and password.
    const createUser = (email, password) => {
        setLoading(true);  // Set loading to true when the process starts.
        return createUserWithEmailAndPassword(auth, email, password)
            .finally(() => setLoading(false));  // Ensure loading is set to false after process ends.
    };

    // Function to sign up or log in using a Google account.
    const signUpWithGmail = () => {
        setLoading(true);  // Set loading to true when the process starts.
        return signInWithPopup(auth, googleProvider)
            .finally(() => setLoading(false));  // Ensure loading is set to false after process ends.
    };

    // Function to log in an existing user using email and password.
    const login = (email, password) => {
        setLoading(true);  // Set loading to true when the process starts.
        return signInWithEmailAndPassword(auth, email, password)
            .finally(() => setLoading(false));  // Ensure loading is set to false after process ends.
    };

    // Function to log out the currently authenticated user.
    const logOut = () => {
        setLoading(true);  // Set loading to true when the process starts.
        return signOut(auth)
            .finally(() => setLoading(false));  // Ensure loading is set to false after process ends.
    };

    // Function to update the user's profile information (display name and photo URL).
    const updateUserProfile = (name, photoURL) => {
        if (!auth.currentUser) return Promise.reject('No user is currently logged in.');
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        }).then(() => {
            // Update the user state with the new profile information
            setUser({ ...auth.currentUser }); // This forces a re-render with the updated user info
        });
    };

    // `useEffect` to monitor changes in the user's authentication state.
    useEffect(() => {
        // Listener for authentication state changes provided by Firebase.
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);  // Update the user state when authentication state changes.
            console.log("User Info: ", currentUser); // This will show user details in the console.
            setLoading(false);     // Set loading to false once authentication state is resolved.

        });

        // Cleanup function to unsubscribe from the listener to avoid memory leaks.
        return () => {
            unsubscribe();
        };
    }, []);  // Dependency array is empty to run the effect only once on component mount.

    // Authentication information and functions that will be provided to the rest of the application.
    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        signUpWithGmail,
        updateUserProfile
    };

    return (
        // Provide authentication context to children components.
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
