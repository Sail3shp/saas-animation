import Logo from '../assets/logo.svg?react'
import Instagram from '../assets/social-instagram.svg?react'
import X from '../assets/social-x.svg?react'
import Yt from '../assets/social-youtube.svg?react'

const Footer = () => {
  return (
    <footer className='px-4 py-5 flex flex-col md:flex-row gap-4 justify-between border-t border-white/15'>
        <div className='flex gap-2 lg:items-center lg:flex-1 '>
            <Logo className='size-5' />
            <h2 className='font-medium'>AI Startup Landing Page</h2>
        </div>
        <div className=' flex flex-col md:flex-row gap-4 lg:gap-7 lg:flex-1 lg:justify-center'>
            <a href='#' className='text-white/70 hover:text-white text-xs md:text-sm transition'>Features</a>
            <a href='#' className='text-white/70 hover:text-white text-xs md:text-sm transition'>Developers</a>
            <a href='#' className='text-white/70 hover:text-white text-xs md:text-sm transition'>Company</a>
            <a href='#' className='text-white/70 hover:text-white text-xs md:text-sm transition'>Blog</a>
            <a href='#' className='text-white/70 hover:text-white text-xs md:text-sm transition'>Changelog</a>
        </div>
        <div className='flex gap-5 lg:flex-1 lg:justify-end'>
            <Instagram className='text-white/40 hover:text-white transition'/>
            <X className='text-white/40 hover:text-white transition' />
            <Yt className='text-white/40 hover:text-white transition' />
        </div>
    </footer>
  )
}

export default Footer