"use client"
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project';
import React from 'react';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {

  const {ref} = useSectionInView ("Projects" , 0.45)

  return (
    <section 
    ref={ref}
    className="scroll-mt-28 mb-28"
    id='projects'>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

