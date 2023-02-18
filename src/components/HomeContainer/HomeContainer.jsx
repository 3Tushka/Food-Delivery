import React from 'react'
import Delivery from '../../assets/images/delivery.png';
import bgImage from '../../assets/images/heroBg.png';
import { heroData } from "../../constants/data.js";

const HomeContainer = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full" id='home'>
            <div className="py-2 flex flex-1 flex-col items-start gap-3 justify-center">
                <div className="flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full ">
                    <p className="text-base text-orange-600 font-semibold">Bike Delivery</p>
                    <div className="w-6 h-6 bg-white rounded-full overflow-hidden drop-shadow-xl">
                        <img src={Delivery}
                            alt="delivery-bike"
                            className="w-full h-full object-cover" />
                    </div>
                </div>
                <p className="text-[2.5rem] font-bold tracking-wide text-headingColor lg:text-[4.5rem]">
                    The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span>
                </p>
                <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus accusamus blanditiis et aliquam aspernatur magni nostrum, quas enim praesentium voluptatibus maxime accusantium error minima amet dolorum quisquam quis porro reiciendis.
                </p>

                <button type='button' className=' bg-gradient-to-br from-orange-400 to-orange-500 
                w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto'>Order Now</button>
            </div>

            <div className="py-2 flex-1 flex items-center relative">
                <img src={bgImage} alt="bgHero" className='w-full h-420 ml-auto lg:h-650 lg:w-auto' />

                <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap ">
                    {heroData &&
                        heroData.map((n) => (
                            <div
                                key={n.id}
                                className=" lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
                            >
                                <img
                                    src={n.imageSrc}
                                    className="w-20 -mt-10 lg:w-40  lg:-mt-20 2xl:w-60 2xl:-mt-30"
                                    alt="I1"
                                />
                                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                                    {n.name}
                                </p>

                                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                                    {n.decp}
                                </p>

                                <p className="text-sm font-semibold text-headingColor">
                                    <span className="text-xs text-red-600">$</span> {n.price}
                                </p>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default HomeContainer;