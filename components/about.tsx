"use client"

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Engineering</span>, I decided to pursue my
        passion for programming. I got myself enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development and cloud technologies</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="font-medium">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, MongoDB and AWS
        </span>
        . I am also familiar with GraphQL, TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I am not coding</span>, I enjoy photography
        , watching sports, and cooking. I enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I am also
        learning about Subsistence agriculture.
      </p>
    </motion.section>
  )
}
