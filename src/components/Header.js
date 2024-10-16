import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");

            } else {
                // User is signed out
                // ...
                dispatch(removeUser());
                navigate("/");

            }
        });

        return () => unsubscribe();
        //unsubscribe when component unmounts


    }, []);
    const handleSignOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {
            navigate("/error");
        });
    };
    return (
        <div className='absolute px-8 py-2 w-screen z-10 bg-gradient-to-b from-black flex justify-between'>
            <img
                className='w-44  '
                src={LOGO}
                alt="logo" />

            {user && (<div className='flex p-2'>
                <img className='w-12 h-12 '
                    alt='userIcon' src={user?.photoURL}
                />
                <button onClick={handleSignOut} className='font-bold px-2 py-4 text-white'>(Sign Out)</button>
            </div>)}


        </div>
    )
}

export default Header