import { IoIosClose } from "react-icons/io";
import { AiOutlineDownload } from "react-icons/ai";
import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { motion } from 'framer-motion';

const Cart = ({ data, refrence }) => {
    return (
        <>
            <motion.div drag dragConstraints={refrence} whileDrag={{ scale: 1.2 }} dragElastic={0.4} dragTransition={{ bounceStiffness: 100, bounceDamping: 200 }} className='relative flex-shrink-0 overflow-hidden w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white py-10 px-5 '>
                <FaRegFileAlt />
                <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>

                <div className='footer absolute bottom-0  w-full  left-0  '>
                    <div className="flex items-center  justify-between px-8 py-3 mb-3">
                        <h5>{data.filesize}</h5>
                        <span className="w-7 h-7 bg-sky-600 rounded-full flex items-center justify-center">
                            {data.close ? <IoIosClose /> : <AiOutlineDownload size='1em' color="#000" />}

                        </span>
                    </div>


                    {data.tag.isOpen && (
                        <div className={`tag w-full py-4 bg-${data.clr}-600 flex items-center justify-center`}>
                            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
                        </div>
                    )}





                </div>
            </motion.div>
        </>
    );
};

export default Cart;
