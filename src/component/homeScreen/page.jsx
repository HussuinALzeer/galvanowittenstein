import React, { useEffect } from 'react'
import style from '../homeScreen/HomeScreen.module.css'
import Image from 'next/image'
import bg_img from '../../../public/Luftaufnahme_a.jpg'
import Logo from '../../../public/logo.png'
import gsap from 'gsap'

import { SplitText } from 'gsap-trial/SplitText'

import About from '../about/page'
import Services from '../servercs/page'
import Contact from '../Contact/page'
import Info2 from '../info2/page'
import Footer from '../Footer/page'

// images
import man from '../../../public/images/car-man-fotor-bg-remover-20240601175155.svg'
import tool1 from '../../../public/images/file.png'
import tool2 from '../../../public/images/file (1).png'
import tool3 from '../../../public/images/file (2).png'
import tool4 from '../../../public/images/file (6).png'


function HomeScreen() {

    useEffect(() => {
      
        const titles = gsap.utils.toArray('p')
        const tl = gsap.timeline({delay:7,repeat:-1})


        titles.forEach(title => {

            // const splitTitle = new SplitTextJS(title)
            gsap.registerPlugin(SplitText)
            const splitTes = new SplitText(title)
            let chars = splitTes.chars

                
                tl.from(chars, {
                    opacity:0,
                    y:80,
                    rotateX:-90,
                    stagger:0.03
                }, "<")

                .to(chars, {
                    opacity:0,
                    y:-80,
                    rotateX:90,
                    stagger:0.03
                }, "<3")



        });

    

    }, [])
    

  return (

    <div>
     <Contact/>   
    <div className={style.container} >

        
        <div className={style.content}>
            <div className={style.bg}>
            </div>
            <Image src={bg_img} className={style.image} alt="Example Image" width={1000} height={100} />
            
        </div>

        <div className={style.details}>
            <div className={style.left}>
                <h2 className={style.title} >Galvano Wittenstein GmbH</h2>
        
                <div className={style.material}>
                    <p className={`${style.text} text-mat`}>Phosphatieren</p>
                    <p className={`${style.text} text-mat`}>Sandstrahlen</p>
                    <p className={`${style.text} text-mat`}>Vernickeln</p>
                    <p className={`${style.text} text-mat`}>Vergolden</p>
                    <p className={`${style.text} text-mat`}>Brünieren</p>
                    <p className={`${style.text} text-mat`}>Verchromen</p>
                    <p className={`${style.text} text-mat`}>Entschichten</p>
                </div>
        
                <h2 className={style.since}>Since 1973</h2>
                <Image className={style.logo} src={Logo} width={200} height={120} />
                {/* <div className={style.btn}>Explore</div> */}

            </div>

            <div className={style.right}>
                
                <div className={style.floatingCard}>
                    
                </div>

                <Image className={style.man} src={man} priority={true} objectFit="cover"  height={100} width={100} />
                <Image className={style.tool1} src={tool1} height={250} width={170} />
                <Image className={style.tool2} src={tool2} height={200} width={380} />
                <Image className={style.tool3} src={tool3} height={200} width={180} />
                <Image className={style.tool4} src={tool4} height={200} width={180} />
            </div>

        </div>
    </div>

    <About/>
    <Services/>
    <Info2 />
    <Footer />

    </div>
  )
}

export default HomeScreen