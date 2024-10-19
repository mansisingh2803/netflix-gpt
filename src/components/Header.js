import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
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
    const handleGptSearchClick = () => {
        //Toggle GPT Search
        dispatch(toggleGptSearchView());

    }
    const handleLanguageChange = (e) => {
        //console.log(e.target.value);
        dispatch(changeLanguage(e.target.value));
    }
    return (
        <div className='absolute px-8 py-2 w-screen z-10 bg-gradient-to-b from-black flex justify-between'>
            <img
                className='w-44  '
                src={LOGO}
                alt="logo" />

            {user && (
                <div className='flex p-2'>
                    {showGptSearch && (<select className='p-2 bg-gray-900 text-white m-2' onChange={handleLanguageChange}>
                        {SUPPORTED_LANGUAGES.map((lang) => (
                            <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)

                        )}

                    </select>)}
                    <button onClick={handleGptSearchClick} className='py-2 px-4 bg-purple-600 rounded-md text-white mx-4 my-2'>{showGptSearch ? "Homepage" : "GPT Search"}</button>
                    <img className='w-12 h-12 '
                        alt='userIcon' src={user?.photoURL}
                    />
                    <button onClick={handleSignOut}
                        className='font-bold px-2 py-4 text-white'>
                        (Sign Out)
                    </button>
                </div>)
            }


        </div>
    )
}

export default Header