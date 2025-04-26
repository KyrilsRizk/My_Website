"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';

export default function Contact() {
  const {ref} = useSectionInView ("Contact" , 0.6)
  return (
    <motion.section

    initial = {{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{once : true}}
     id="contact" className="mb-20 sm:mb-28 w-[min (100%,38rem)] text-center ">
    <SectionHeading>Contact Me</SectionHeading>
    <p className="text-gray-700 -mt-3 ">Please contact me directly at <a className="underline" href="mailto:kerodex224@gmail">kerodex224@gmail.com</a> or through this form </p>

    <form className="mt-10 flex flex-col " ref = {ref}
    action={async (formData)=> {
    await sendEmail(formData);
    }}
      >
      <input
      name="senderEmail"
       className="h-14 rounded-lg border border-black/15 p-3 "
        type="email"
         placeholder="Email" 
         required 
         maxLength={300}/>

      <textarea placeholder="Message"  required maxLength={1000} 
      name="message"
      className='h-52 my-4 rounded-lg border border-black/15 p-3'>
        </textarea>
      <button type="submit" 
        className=" group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full transition-all  foucus:scale-110 hover:bg-slate-950  hover:scale-110 active:scale-105"
        > 
      Submit <FaPaperPlane className=" text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1
       " /> {" "}
       </button>
    </form>
    </motion.section>
  );
}
