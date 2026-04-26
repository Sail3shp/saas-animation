import starsbg from '../assets/stars.png'
import gridLines from '../assets/grid-lines.png'
import Button from '../components/Button'
const CallToAction = () => {
    return (
        <section className="px-4 py-20 md:py-24">
            <div
                className="border border-white/15 py-24 rounded-xl overflow-hidden relative"
                style={{
                    backgroundImage: `url(${starsbg})`
                }}
            >
                <div className='absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay mask-[radial-gradient(50%_50%_at_50%_35%,black,transparent)]'
                    style={{
                        backgroundImage: `url(${gridLines})`
                    }}
                ></div>
                <div className='relative'>
                    <h1 className="text-5xl md:text-6xl max-w-sm mx-auto font-medium text-center tracking-tighter">AI-driven SEO for everyone</h1>
                    <p className="text-white/70 md:text-xl max-w-xs mx-auto mt-5 text-lg px-4 tracking-tight text-center">Acheive clear, impactful results without the complexity</p>
                    <div className='text-center mt-8'>
                        <Button>Join Waitlist</Button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default CallToAction