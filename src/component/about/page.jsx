import React, { useEffect } from 'react'
import style from '../about/About.module.css'
import AboutImage from '../../../public/About.jpg'
import AboutIcons from '../../../public/icons.png'
import Image from 'next/image'
import { GsapAbout } from '@/app/animation/gsap'

function About() {

  useEffect(() => {
    
    // GsapAbout()

  }, [])
  


  return (
    <div className={style.ContainerAbout}>
      <div className={style.title} id='AboutTitle' >Galvano Wittenstein</div>
      <div className={style.MainText} id='AboutMainText'>
      With around 45 employees, Galvano <span> Wittenstein GmbH </span> focuses on 
      the nickel and chrome plating of <span> steel and non-ferrous metal parts</span> . We have specialized in the <span> finishing of tools </span> .
      </div>

      <div className={style.details}>
        <div className={style.information}>
          <div className={style.text}>
          The high quality of our manufacturing processes has been confirmed by certification according to DIN ISO 9001 since September 1998. These are primarily screwdrivers that do not receive any galvanic treatment at the tip for reasons of accuracy of fit. On our website you will find further information about our products and manufacturing options.

          Have we piqued your interest or do you have any further questions? We would be happy to provide you with further information upon request.
          </div>

          <div className={style.icons}>
            <Image className={style.icon} src={AboutIcons} width={200} height={90} />
          </div>
        </div>

        <div className={style.image}>
          <Image className={style.img} src={AboutImage} height={100} width={200} id='AboutImage' />
        </div>
      </div>

    </div>
  )
}

export default About
