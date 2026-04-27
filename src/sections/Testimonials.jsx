import avatar1 from '../assets/avatar-1.png'
import avatar2 from '../assets/avatar-2.png'
import avatar3 from '../assets/avatar-3.png'
import avatar4 from '../assets/avatar-4.png'
import { motion } from 'motion/react'
const testimonials = [
    {
        text: '"This product has completely transformed how I manage my project and deadlines"',
        name: "Sophia Perez",
        title: "Directior @ Quantum",
        avatarImg: avatar1,
    },
    {
        text: '"These AI tools have completely revolutionized our SEO entire strategy overnight"',
        name: "Jackei chan",
        title: "CEO @ Quantum",
        avatarImg: avatar2,
    },
    {
        text: '"This ui looks cool and easy to use, it has saved me my time"',
        name: "Alice Thakuri",
        title: "Directior @ Hamro",
        avatarImg: avatar3,
    },
    {
        text: '"we have pushed out boundaries with this product"',
        name: "Walter White",
        title: "Producer @ missisipi",
        avatarImg: avatar4,
    },
]
const Testimonials = () => {
    return (
        <section className="px-4 py-20 md:py-24">
            <h1 className="text-5xl md:text-6xl font-medium tracking-tighter text-center">Beyond Expectations.</h1>
            <p 
            className="text-center text-lg md:text-xl text-white/70  mt-5 max-w-sm mx-auto ">Our revolutionary AI SEO tools have transformed our client's strategies.</p>
            <div className='flex overflow-hidden mt-10 mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
                <motion.div
                initial={{
                    translateX: '-50%',
                }}
                animate={{
                    translateX: '0',
                }}
                transition={{
                    repeat:Infinity,
                    ease:'linear',
                    duration: 30,
                }}
                className='flex gap-5 flex-none pr-5'>
                    {[...testimonials,...testimonials].map(testimonial => (
                        <div key={testimonial.name} className='border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs md:max-w-md  flex-none'>
                            <div className='text-lg md:text-2xl tracking-tight'>
                                {testimonial.text}
                            </div>
                            <div className='flex items-center gap-3 mt-5'>
                                <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                                    <img src={testimonial.avatarImg} className='size-11 rounded-lg grayscale' />
                                </div>
                                <div className=''>
                                    <div>{testimonial.name}</div>
                                    <div className='text-white/50 text-sm'>{testimonial.title}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials