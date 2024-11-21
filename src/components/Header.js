import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Example icon
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
    const handleLogoClick = () => {
        // Navigate to the main route and refresh
        window.location.href = '/browse';
    };
    return (
        <div className='absolute px-8 py-2 w-screen z-10 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between '>
            <img
                className='w-44 mx-auto md:mx-0 cursor-pointer '
                src={LOGO}
                alt="logo" onClick={handleLogoClick} />
            <div className='p-1 cursor-pointer w-4/12 text-2xl shadow-inner font-semibold items-center text-center bg-purple-300 rounded-md text-white m-4'>
                <FontAwesomeIcon icon={faSearch} />
                <button className='mx-2' onClick={handleGptSearchClick} >{showGptSearch ? "Homepage" : "GPT Search"}</button>
            </div>

            {user && (
                <div className='flex p-2'>
                    {showGptSearch && (
                        <select className='p-2 bg-gray-900 text-white m-2' onChange={handleLanguageChange}>
                            {SUPPORTED_LANGUAGES.map((lang) => (
                                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)

                            )}

                        </select>)}

                    <img className='w-12 h-12 m-2 '
                        alt='userIcon' src={user?.photoURL}
                    />
                    <button onClick={handleSignOut}
                        className='font-bold mx-4 px-2 my-2 rounded-md py-2 bg-red-500 text-white'>
                        Sign Out
                    </button>
                </div>)
            }


        </div>
    )
}

export default Header