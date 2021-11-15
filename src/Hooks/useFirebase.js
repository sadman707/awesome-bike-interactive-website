
import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from '../Firebase/Firebase.init';

// initializing firebase here
initializeFirebase();

const useFirebase = () => {
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [error, setError] = useState("");



    // handling register here
    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);

                handleUserInformationRegister(result.user.email);
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    };


    const handleUserInformationRegister = (email) => {
        fetch("http://localhost:5000/addUserInfo", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };

    // Handle Log in here
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    //using use effect
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unSubscribed
    }, [auth]);

    // Handling log out here

    const handleLogout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((err) => {

            })
            .finally(() => setIsLoading(false))
    };

    return {
        user,
        handleUserRegister,
        handleLogout,
        handleUserInformationRegister,
        loginUser,
        error,
        isLoading,
        signOut
    };
};

export default useFirebase;