import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'
const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    return (

        <div className='pt-[10%] justify-center  flex'>
            <form className='w-1/2 grid grid-cols-12  bg-black'>
                <input type='text' className='p-2 m-3 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder} />
                <button className='py-2 px-4 m-3 col-span-3 bg-red-700 text-white rounded-lg '>{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar