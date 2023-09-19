"use client"
import Project from './project'
import { projectsData } from '@/lib/data'
import SectionHeading from './section-heading'
import React from 'react'

export default function Projects() {
  return (
    <section id='projects' className='scroll-mt-28'>
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