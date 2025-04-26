'use client'
import { useActiveSectionContext } from '@/context/active-setion-context'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'

export default function Intro() {
	const { ref } = useSectionInView('Home', 0.5)
	const { setActiveSection, setTimeOfLastClick } =
		useActiveSectionContext()

	return (
		<section
			ref={ref}
			className='mb-28 max-w-[55rem] text-center sm:mb-0 '
		>
			<div className='flex items-center justify-center '>
				<div className='relative'>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'tween',
							duration: 0.2,
						}}
					>
						<Image
							width={200}
							height={200}
							src='/image/img11.png'
							alt='kyrilos Rizk'
							className='h-40 w-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl '
						/>
					</motion.div>
					<motion.span
						className=' absolute bottom-0 right-0  text-4xl'
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'tween',
							stiffness: 256,
							delay: 0.1,
							duration: 0.4,
						}}
					>
						👋{' '}
					</motion.span>
				</div>
			</div>
			<motion.h1
				className='mb-8 mt-5 px-4 text-xl !leading-[1.3] sm:text-4xl'
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 5, y: 0 }}
			>
				<span className='font-bold'>
					Hello I am Kyrilos .
				</span>{' '}
				I am a{' '}
				<span className='font-bold'>
					Full-Stack Developer,
				</span>{' '}
				<span className=''>
					eager to embark on an exciting journey in the
					world of technology. As a recent graduate
				</span>{' '}
				I bring a fresh perspective and a hunger for
				learning to every project I undertake.{' '}
				<span className='italic'>sites & apps</span>. My
				focus{' '}
				<span className='underline'> React (Next.js)</span>
			</motion.h1>
			<motion.div
				className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium '
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 5, y: 0 }}
				transition={{
					delay: 0.1,
				}}
			>
				<Link
					href='#contact'
					className='group bg-gray-900 text-white px-8 py-3 flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:bg-gray-950 hover:scale-110 active:scale-105 transition'
				>
					{' '}
					Contact me here{' '}
					<BsArrowRight
						className='opocity-70  group-hover:translate-x-2 transition'
						onClick={() => {
							setActiveSection('Contact')
							setTimeOfLastClick(Date.now())
						}}
					/>
				</Link>

				<a
					href='CV.pdf '
					download={true}
					className='group bg-white text-black px-8 py-3 flex items-center gap-3 rounded-full outline-none foucus:scale-110  hover:scale-110 active:scale-105 transition cursor-pointer border border-black/15 '
				>
					{' '}
					Download CV{' '}
					<HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
				</a>

				{/* link to linkedin page */}
				<a
					href='https://www.linkedin.com/in/kyrils-rezk-8b046a2a7/'
					target='_blank'
					className='bg-white text-gray-700 p-4 text-[1.15rem] flex items-center gap-3 rounded-full foucus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition'
				>
					<BsLinkedin />
				</a>

				{/* link to github page */}
				<a
					href='https://github.com/KyrilsRizk'
					target='_blank'
					className='bg-white text-gray-700 p-4 text-[1.35rem] flex items-center gap-3 rounded-full foucus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition  '
				>
					<FaGithubSquare />
				</a>
			</motion.div>
		</section>
	)
}
