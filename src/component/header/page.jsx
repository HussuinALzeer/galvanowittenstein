import React, { useEffect, useState } from 'react'
import styles from '../header/Header.module.css'
import Image from 'next/image'
import icon from '../../../public/logo.png'

import Menu from '../menu/page'
import { MenuOverlay } from '@/app/animation/gsap'

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  

  useEffect(() => {
    
    MenuOverlay(isMenuOpen)

  }, [isMenuOpen])
  


  return (

    <div className={styles.header}>
    <div className={styles.container}>
        
        <Image className={styles.image} src={icon} width={150} height={30} />

         <div className={styles.Menu_icon} onClick={() => setIsMenuOpen(!isMenuOpen)} >
            <div className={ isMenuOpen ? `${styles.line1_toggle}`: `${styles.line1}`}></div>
            <div className={ isMenuOpen ? `${styles.line2_toggle}`: `${styles.line2}`}></div>
            <div className={ isMenuOpen ? `${styles.line3_toggle}`: `${styles.line3}`}></div>

         </div>

         

    </div>
    <div className={`${styles.MenuOverlay} MenuOverlay `}>
        
        <div className={styles.links}>
          <a href="#" className={`${styles.link} link`} >GALVANO WITTENSTEIN GMBH</a>
          <a href="#" className={`${styles.link} link`}>VERFAHRENPRODU</a>
          <a href="#" className={`${styles.link} link`}>KTEKONTAKT</a>
          <a href="#" className={`${styles.link} link`}>IMPRESSUM</a>
          <a href="#" className={`${styles.link} link`}>AGB</a>
        </div>
        
    </div>
    </div>
  )
}

export default Header
