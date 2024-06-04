import React, { useEffect, useState } from 'react'
import styles from './Contact.module.css'
import icon1 from '../../../public/phone-call.png'
import icon2 from '../../../public/fax.png'
import icon3 from '../../../public/email.png'
import icon4 from '../../../public/web.png'

import Image from 'next/image'

function Contact() {

   
    
    
  return (
    <div className={styles.container} id='ContentContainer' >


        <div className={styles.Form}>
            <div className={styles.title}>
                <div className={styles.mainText}>Kontaktt</div>
                <div className={styles.hr}></div>
                <div className={styles.secondText}>Wir stehen Ihnen gerne mit <span>Rat und Tat</span> zur Verfügung. Sprechen Sie uns an!</div>
            </div>

            <div className={styles.Info}>
               <div className={styles.information}>
                    <div>Galvano Wittenstein GmbH</div>
                    <div>Dültgenstaler Straße 97</div>
                    <div>42719 Solingen</div>

                    <div className={styles.InfoWithIcons}>
                        <span>
                             <Image className={styles.img} src={icon1} width={30} height={30} /> 
                        </span> 
                         +49-212-318800
                    </div>
                    <div className={styles.InfoWithIcons}><span> <Image className={styles.img} src={icon2} width={30} height={30} /> </span>+49-212-314507</div>
                    <div className={styles.InfoWithIcons}><span> <Image className={styles.img} src={icon3} width={30} height={30} /> </span>kontakt[at]galvano-wittenstein.de</div>
                    <div className={styles.InfoWithIcons}><span> <Image className={styles.img} src={icon4} width={30} height={30} /> </span>www.galvano-wittenstein.de</div>
               </div>

               <div className={styles.mainForm}>
                    <form className={styles.formDo}> 
                        {/* <h2>Send Message</h2> */}
                        <div className={styles.inputBox}>
                            <input className={styles.input} type="text" placeholder='' required />
                            <span>Name (benötigt)</span>
                        </div>

                        <div className={styles.inputBox}>
                            <input className={styles.input} type="text" required />
                            <span>email (benötigt)</span>
                        </div>

                        <div className={styles.inputBox}>
                            <input className={styles.input} type="text"  required />
                            <span>Betreff (benötigt)</span>
                        </div>

                        <div className={`${styles.inputBox }`}>
                            <textarea className={styles.textarea} name="" id="" cols="20" rows="5" required></textarea> 
                            <span>Text (benötigt)</span>
                        </div>

                        <div className={styles.btnBox}>
                            <button className={styles.btn}>send</button>
                        </div>
                    </form>                 
               </div>
            </div>
        </div>

    </div>
  )
}

export default Contact