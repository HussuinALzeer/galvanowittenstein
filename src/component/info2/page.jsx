import React from 'react'
import styles from './info2.module.css'
import Image from 'next/image'
import BoxImage from '../../../public/boxImage.jpg'

function Info2() {
  return (
    <div className={styles.container}>
        
        <div className={styles.title}>Produkte</div>
        <div className={styles.hr}></div>
        <div className={styles.hr}></div>
        <div className={styles.secondText}>Unser <span className={styles.socSpanRed}>Schwerunkt</span> ist die Veredelung von <span className={styles.socSpanGrey}>Werkzeugen</span> und <span className={styles.socSpanGrey}>Maschinenteilen.</span> </div>
   
        <div className={styles.box}>
          <div className={styles.boxText}>Durch unsere langjährige Erfahrung und Kundenbindung, unsere hohen Qualitätsansprüche und unsere Liefertreue konnten wir uns als einer der führenden Lieferanten bei der Oberflächenveredelung im Werkzeugbereich behaupten.
              Darüber hinaus haben wir uns auch auf andere Produkte spezialisiert, die nicht direkt mit Werkzeugen zu tun haben, wie zum Beispiel das Veredeln von Scheren oder Nagelknipsern. Ebenso bieten wir das chemische sowie elektrolytische Vergolden von Kleinteilen an.
              Vor allem bei der Brünierung und Phosphatierung bearbeiten wir viele Maschinenteile.
              Seit einigen Jahren haben wir uns ein zweites Standbein mit dem Entschichten von verschiedenen Stahlteilen aufgebaut.
          </div>

          <div className={styles.bigbox}>
            <div className={styles.boxImage}>
              <Image className={styles.Image} src={BoxImage} width={300} height={200} alt='boxImage' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Info2
