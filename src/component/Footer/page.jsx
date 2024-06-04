import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import icon1 from '../../../public/icons8-location-100.png'
import icon2 from '../../../public/icons8-phone-50.png'
import icon3 from '../../../public/icons8-email-open-100.png'

import fb from '../../../public/facebook (1).png'
import ig from '../../../public/instagram (1).png'
import twt from '../../../public/twitter.png'


function Footer() {
  return (
    <div className={styles.container}>
        
        <div className={styles.Into}>
            <div className={styles.title}>
                Kontakt
            </div>
            <div className={styles.secondText}>
                Wir stehen Ihnen gerne mit Rat und Tat zur Verfügung. Sprechen Sie uns an!
            </div>
        </div>
        
        <div className={styles.formContainer}>
            <div className={styles.contactInfo}>

                <div className={styles.box}>
                    <div className={styles.icon}>
                        <b></b>
                        <Image className={styles.img} src={icon1} />
                    </div>
                    <div className={styles.textt}>
                        <h3>Address</h3>
                        <h3>Galvano Wittenstein GmbH <br />
Dültgenstaler Straße 97 <br />
42719 Solingen </h3>
                    </div>
                </div>

                <div className={styles.box}>
                    <div className={styles.icon}> 
                        <b></b>
                        <Image className={styles.img} src={icon2} />
                    </div>
                    <div className={styles.textt}>
                        <h3>Phone</h3>
                        <h3>+49-212-314507 </h3>
                    </div>
                </div>

                <div className={styles.box}>
                    <div className={styles.icon}> 
                        <b></b>
                        <Image className={styles.img} src={icon3} />
                    </div>
                    <div className={styles.textt}>
                        <h3>Email</h3>
                        <h3>kontakt[at]galvano-wittenstein.de </h3>
                    </div>
                </div>

                <h2 className={styles.txt}>Contact us with</h2>
                <ul className={styles.sci}>
                    <li><a href="#"> <Image className={styles.sciIcon} src={fb} /></a></li>
                    <li><a href="#"> <Image className={styles.sciIcon} src={ig} /></a></li>
                    <li><a href="#"> <Image className={styles.sciIcon} src={twt} /></a></li>
                </ul>

            </div>
            <div className={styles.contactForm}>
                <form>
                    <h2>Send Message</h2>

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
  )
}

export default Footer
