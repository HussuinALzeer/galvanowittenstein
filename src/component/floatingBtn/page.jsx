import React, { useEffect, useState } from 'react'
import styles from './floatingbtn.module.css'
import send from '../../../public/send.png'

import Image from 'next/image'
import { GsapContent } from '@/app/animation/gsap'

function FloatingBtn() {
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    
      GsapContent(toggle)
      console.log(toggle);
    
  }, [toggle])

  return (
    <div className={styles.container} onClick={() =>{setToggle(!toggle)}}>
        <div className={styles.btn} >
            <div className={` ${styles.btnoutline} ${styles.btnoutline_1}`}></div>
            <div className={` ${styles.btnoutline} ${styles.btnoutline_2}`}></div>
            <Image src={send} className={styles.icon} width={30} height={30} />
        </div>
    </div>
  )
}

export default FloatingBtn
