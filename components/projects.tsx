"use client"

import Project from './project'
import { projectsData } from '@/lib/data'
import SectionHeading from './section-heading'
import React from 'react';
import { useSectionInView } from '@/lib/hooks';


export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  
  return (
    <section id='projects' className='scroll-mt-28' ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={project.title} >
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}