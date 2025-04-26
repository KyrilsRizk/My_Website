'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.08 * index,
		},
	}),
}
export default function Skills() {
	const { ref } = useSectionInView('Skills', 0.45)
	return (
		<section
			ref={ref}
			className='mb-8 max-w-[53rem] scroll-mt-36 text-center sm:mb-40'
			id='skills'
		>
			<SectionHeading>My Skills</SectionHeading>
			<ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
				{skillsData.map((skill, index) => (
					<motion.li
						key={index}
						variants={fadeInAnimationVariants}
						initial='initial'
						whileInView='animate'
						viewport={{
							once: true,
						}}
						custom={index}
						className='bg-white border text-black border-black/[0.1] rounded-xl px-5 py-3 '
					>
						{skill}
					</motion.li>
				))}
			</ul>
		</section>
	)
}
