import "@dotlottie/player-component";
import vroom from '../assets/lottie/vroom.lottie'
import click from '../assets/lottie/click.lottie'
import stars from '../assets/lottie/stars.lottie'
import productImage from '../assets/product-image.png'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
//could have used public folder for lottie files might have been easier

const tabs = [
    {
        icon: vroom,
        title:'User-friendly dashboard',
        isNew: false,
        backgroundPositionX: 0,
        backgroundPositionY: 0,
        backgroundSizeX: 150,
    },
    {
       icon:click,
        title:'One-click optimization',
        isNew: false,
        backgroundPositionX: 98,
        backgroundPositionY: 100,
        backgroundSizeX: 135, 
    },
    {
        icon:stars,
        title:'Smart keyword generator',
        isNew: true,
        backgroundPositionX: 100,
        backgroundPositionY: 27,
        backgroundSizeX: 177,
    }
]
const Features = () => {
    tabs.map((tab) => console.log(tab.icon))
  return (
    <section className="px-4 py-20 md:py-24">
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-center">
            Elevate your SEO efforts
        </h1>
        <p className="text-white/70 md:text-xl max-w-2xl mx-auto text-center text-lg tracking-tight mt-5">
            From small startups to large enterprises, our AI-driven tool has revolutionized the way businesses approach SEO.
        </p>
        <div className="mt-10 flex flex-col lg:flex-row  gap-3 ">
        {tabs.map((tab) => (
            <div key={tab.title} className="border lg:flex-1 border-white/15 flex rounded-xl p-2.5 gap-2.5 items-center">
                <div className="size-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
                <DotLottieReact src={tab.icon}  className="size-5" autoplay />
                </div>
                <div className="font-medium">{tab.title}</div>
                {tab.isNew &&( 
                    <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">new</div>
                )
                }

            </div>
        ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
        <img src={productImage} alt="productImg" />
        </div>

    </section>
  )
}

export default Features