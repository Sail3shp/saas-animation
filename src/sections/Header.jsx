import Logo from '../assets/logo.svg?react'
import MenuIcon from '../assets/icon-menu.svg?react'
import Button from '../components/Button'
//to use svg as an react component use vite-svgr plugin and use the above format

const Header = () => {
    return (
        <header className='p-4 border-b md:border-none border-white/15 text-white sticky top-0 z-10 backdrop-blur md:backdrop-blur-none '>
            <div>
                <div className='flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur'>
                    <div className='border size-10 rounded-lg inline-flex justify-center items-center border-white/15'>
                        <Logo className='size-8' />
                    </div>
                    <div className='hidden md:block'>
                        <nav className='flex gap-8 text-sm '>
                            <a href="" className='text-white/70 hover:text-white transition'>Features</a>
                            <a href="" className='text-white/70 hover:text-white transition'>Developers</a>
                            <a href="" className='text-white/70 hover:text-white transition'>Pricing</a>
                            <a href="" className='text-white/70 hover:text-white transition'>Change</a>
                        </nav>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <Button>Join Waitlist </Button> 
                        <MenuIcon className='md:hidden'/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header