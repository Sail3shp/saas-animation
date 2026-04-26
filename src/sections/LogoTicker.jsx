import acemLogo from '../assets/logo-acme.png'
import apexLogo from '../assets/logo-apex.png'
import celestial from '../assets/logo-celestial.png'
import echoLogo from '../assets/logo-echo.png'
import quantum from '../assets/logo-quantum.png'
import pulseLogo from '../assets/logo-pulse.png'

const LogoTicker = () => {
    const logos = [acemLogo, apexLogo, celestial, echoLogo, quantum, pulseLogo]
    logos.map((logo) => console.log(logo))
    return (
        <section className='py-20 px-4 md:py-24'>
            <div className="flex  items-center gap-5 ">
                <div className='flex-1 md:flex-none'>
                    <h2>
                        Trusted by top innovative teams
                    </h2>
                </div>
                <div className='flex-1 overflow-hidden mask-[linear-gradient(to_right,transparent,black_20%,transparent)]'>
                    <div className='flex flex-none gap-14 '>
                        {logos.map((logo) => (
                            <img src={logo} key={logo} className='h-6 w-atuo' />
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default LogoTicker