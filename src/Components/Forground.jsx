import React, { useRef, useState } from 'react'
import Cart from './Cart'



const Forground = () => {

    const ref =useRef(null)

    const data = [
        {
            id:1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            filesize: ".9mb",
            close: true,
            clr:"red",
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
               

            }
        },
        {
            id:2,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            filesize: ".9mb",
            close: false,
            clr:"red",
            tag: {
                isOpen: false,
                tagTitle: "Download Now",
                

            }
        },
        {
            id:3,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            filesize: ".9mb",
            close: true,
            clr:"red",
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                

            }
        },
        {
            id:4,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            filesize: ".9mb",
            close: false,
            clr:"red",
            tag: {
                isOpen: false,
                tagTitle: "Download Now",
               
            }
        },
    ]


    return (


        <div ref={ref} className='fixed p-5 left-0 top-0 z-[3] w-full h-full flex gap-5 flex-wrap '>
            {data.map((item, id ) => 
            <div key={id}>
            <Cart  data={item} refrence={ref} />

            </div>
            )}
        </div>





    )
}

export default Forground
