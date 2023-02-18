import React, { useState } from 'react'
import images from '../../constants/images'

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { app } from '../../firebase.config'

import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { useStateValue } from '../../context/StateProvider'
import { actionType } from '../../context/reduser'
import avatar from '../../assets/images/avatar.png'

export default function Header() {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{ user }, dispatch] = useStateValue();

    const [isMenu, setIsMenu] = useState(false);

    const logout = () => {
        setIsMenu(false)

        localStorage.clear();

        dispatch({
            type: actionType.SET_USER,
            user: null,
        })
    };

    const login = async () => {
        if (!user) {
            const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider)
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });

            localStorage.setItem('user', JSON.stringify(providerData[0]));
        } else {
            setIsMenu(!isMenu);
        }

    };

    return (
        <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 ">

            <div className="hidden md:flex w-full h-full items-center justify-between">
                <Link to={'/'} className=" flex items-center gap-2 ">
                    <img src={images.logo} alt="logo" className='w-10 object-cover ' />
                    <p className="text-headingColor text-xl font-bold"> City </p>
                </Link>

                <div className="flex items-center gap-10">
                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className="flex items-center gap-10">
                        <li className='text-base text-textColor hover:text-headingColor duration-150 transition-all ease-in-out cursor-pointer'>Menu</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-150 transition-all ease-in-out cursor-pointer'>Home</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-150 transition-all ease-in-out cursor-pointer'>About Us</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-150 transition-all ease-in-out cursor-pointer'>Service</li>
                    </motion.ul>

                    <div className="relative flex items-center justify-center">
                        <MdShoppingBasket className='text-textColor  text-2xl ml-7 cursor-pointer' />
                        <div className="absolute -right-2 -top-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className="text-xs text-white font-semibold ">2</p>
                        </div>
                    </div>

                    <div className="relative">
                        <motion.img whileTap={{
                            scale:
                                0.6
                        }}
                            src={user ? user.photoURL : avatar}
                            alt="user-avatar"
                            className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full '
                            onClick={login} />

                        {
                            isMenu && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.6 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.6 }} className="w-40 bg-gray-50 shadow-x1 rounded-lg flex flex-col absolute top-12 right-0 ">
                                    {user && user.email === "andriypanasyk02@gmail.com" && (
                                        <Link to="/createItem">
                                            <p className="px-4 py-2 flex item-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                                                New Item <MdAdd />
                                            </p>
                                        </Link>
                                    )}
                                    <p className="px-4 py-2 flex item-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base" onClick={logout}>
                                        Logout <MdLogout />
                                    </p>
                                </motion.div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between md:hidden w-full h-full ">

                <div className="relative flex items-center justify-center">
                    <MdShoppingBasket className='text-textColor  text-2xl ml-7 cursor-pointer' />
                    <div className="absolute -right-2 -top-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                        <p className="text-xs text-white font-semibold ">2</p>
                    </div>
                </div>

                <Link to={'/'} className=" flex items-center gap-2 ">
                    <img src={images.logo} alt="logo" className='w-10 object-cover ' />
                    <p className="text-headingColor text-xl font-bold"> City </p>
                </Link>

                <div className="relative">
                    <motion.img whileTap={{
                        scale:
                            0.6
                    }}
                        src={user ? user.photoURL : avatar}
                        alt="user-avatar"
                        className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full '
                        onClick={login} />

                    {
                        isMenu && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }} className="w-40 bg-gray-50 shadow-x1 rounded-lg flex flex-col absolute top-12 right-0 ">
                                {user && user.email === "andriypanasyk02@gmail.com" && (
                                    <Link to="/createItem">
                                        <p className="px-4 py-2 flex item-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                                            New Item <MdAdd />
                                        </p>
                                    </Link>
                                )}

                                <ul className="flex flex-col">
                                    <li className='text-base text-textColor hover:text-headingColor hover:bg-gray-200 duration-150 transition-all ease-in-out cursor-pointer px-4 py-2'>Menu</li>
                                    <li className='text-base text-textColor hover:text-headingColor hover:bg-gray-200 duration-150 transition-all ease-in-out cursor-pointer px-4 py-2'>Home</li>
                                    <li className='text-base text-textColor hover:text-headingColor hover:bg-gray-200 duration-150 transition-all ease-in-out cursor-pointer px-4 py-2'>About Us</li>
                                    <li className='text-base text-textColor hover:text-headingColor hover:bg-gray-200 duration-150 transition-all ease-in-out cursor-pointer px-4 py-2'>Service</li>
                                </ul>

                                <p className="px-4 py-2 flex item-center gap-3 cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base" onClick={logout}>
                                    Logout <MdLogout />
                                </p>
                            </motion.div>
                        )
                    }
                </div>
            </div>
        </header>
    )
}
