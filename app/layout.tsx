import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import ActiveSectionContextProvidor from '@/context/active-setion-context'



const inter = Inter({ subsets: ['latin'] })
// the description for search 
export const metadata = {
  title: 'Kyrilos Rizk | personal portfolio',
  description: 'kyrilos is full-stack devoloper ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={ `${inter.className}  bg-violet-100 text-gray-950 relative pt-28 sm:pt-36 `}>
        <div className=" bg-[#d8b4fe] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className=" bg-[#a5b4fc] absolute top-[-1rem] -z-10 left-[-35rem] right-[11rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-18rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveSectionContextProvidor>
        <Header/>
        {children}
        </ActiveSectionContextProvidor>
     
        
        </body>
    </html>
  )
}
