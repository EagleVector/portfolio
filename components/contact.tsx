"use client"

import { useSectionInView } from '@/lib/hooks';
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section 
      ref={ref}
      id='contact'
      className='w-[min(100%,38rem)] text-center scroll-mt-28 mb-28 sm:mb-40'
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className='text-gray-700 -mt-6'>
        Please contact me directly at{" "}
        <a className='underline' href='mailto:kumarsubhambili3@gmail.com'>
          kumarsubhambili3@gmail.com
        </a>{" "}
        or fill this form.
      </p>

      <form 
        className='mt-10 flex flex-col' 
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

        if (error) {
          toast.error(error);
          return;
        }
        toast.success("Email sent successfully")
        }}
      >
        <input 
          className='h-14 rounded-lg borderBlack px-4'
          name='senderEmail' 
          type="email" 
          required
          maxLength={500}
          placeholder='Your Email'
        />
        <textarea 
          className='h-52  my-3 rounded-lg borderBlack p-4' 
          name='message'
          placeholder='Your message'
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
