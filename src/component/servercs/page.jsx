import React, { useEffect } from 'react'
import style from '../servercs/serveces.module.css'
import Image from 'next/image'
import item1 from '../../../public/item1.1.jpg'
import item2 from '../../../public/item2.jpg'
import item3 from '../../../public/item3.jpg'
import item4 from '../../../public/item4.jpg'
import item5 from '../../../public/item5.webp'
import item6 from '../../../public/item6.jpg'

function Services() {


    const items = [ 
        {
            id:1,
            title:"Sandblasting",
            text:`During sandblasting, slight metal removal occurs by blasting with a blasting agent under high pressure. This is for further processing of e.g. B. rusty or scaled parts are absolutely necessary.

            In our company…
            
            ...the workpieces are processed in a rotating trough system with blasting sand or in a new system in a rotating basket with glass granules.
            
            Further processing of the workpieces would usually mean a matt chrome layer, since the surface is visually slightly roughened by sandblasting.
            
            `,

            image:item1
        },
        {
            id:2,
            title:"Browning",
            text:`During burnishing, a chemical immersion process at high temperatures and high alkalinity creates an oxide layer on steel that is glossy black or matt black, depending on the surface. Corrosion protection is improved by subsequent immersion in a corrosion inhibitor. This process does not produce any dimensional changes.

            In our company…
            
            ...entire workpieces, as well as just the tips of the blades, which must be covered during the galvanic process, are burnished in a two-stage process in accordance with DIN 50 938. It can then be oiled or waxed according to customer requirements.`,

            image:item2
        },
        {
            id:3,
            title:"phosphating",
            text:'During phosphating, a phosphate layer is created using a chemical immersion process at high temperatures. The corrosion protection is higher than with blackening and is further enhanced by an anti-corrosion agent.<br/> <br />In our company… <br /> <br/> ...entire workpieces, as well as just the tips of the blades, which have to be covered during the galvanic process, are manganese phosphated.',

            image:item3
        },
        {
            id:4,
            title:"Nickel plating",
            text:`Nickel plating is primarily used to protect steel parts from corrosion. The nickel layer is deposited galvanically on the workpiece in an electrolyte.

            In our company…
            
            ...matt nickel and bright nickel are available. Both processes depend heavily on the nature of the base material. A blasted surface that is plated with bright nickel will never be as shiny as a troweled surface.
            
            The resulting surface is light silver with a slight yellow tinge.`,

            image:item4
        },
        {
            id:5,
            title:"Chrome plating",
            text:`Since the thickness of a chrome layer is less than 1 µm, the difference between matt and bright chrome depends on the previously deposited nickel layer or the degree of gloss of the surface.

            From a chemical point of view, the electrolytically produced chromium layers are characterized by an extraordinary resistance to air oxidation, but also to attacks by the substances that occur in practical use (salt solutions, alkalis, fruit acids or hand sweat).
            
            In our company…
            
            …is mainly deposited on nickel. However, there is also the option of depositing on steel, depending on customer requirements.
            
            The resulting surface is light silver with a slight blue tint.`,

            image:item5
        },
        {
            id:6,
            title:"Gild",
            text:`Gold deposition is not only used for decorative purposes such as: B. used in the watch and jewelry industry, but also for special technical areas of application in modern electronics, but also for valuable laboratory equipment in which the noble character of the metal is used as corrosion protection.

            In our company…
            
            ...we have the opportunity to gold-plate small and medium-sized workpieces using an electrolytic and chemical process. This gilding is used almost exclusively for decorative purposes. `,

            image:item6
        }

    ]

   

  return (
    <div className={style.container}>
        
        <div className={style.ServicesTitle}>Verfahren</div>

        <div className={style.hr}></div>
        <div className={style.hr}></div>

        <div className={style.ServicesText}>In unserem Hause bearbeiten wir <span className={style.ServicesTextSpan}>Eisen- und Buntmetalle</span> . Folgende  <span className={style.ServicesTextSpan}>Verfahren </span>bieten wir an <span className={style.ServicesTextSpan}>:</span></div>
        
        <div className={style.items}>
            
            {items.map((item) =>(
                <div className={style.item} key={item.id}>
                <div className={style.ImageSide}>
                    <div className={style.Image}>
                        <Image className={style.img} src={item.image} width={200} height={200}  />
                    </div>
                    <div className={style.bg}></div>
                    
                </div>
                <div className={style.information} >
                    <div className={style.infoTitle}>
                        <div className={style.title}>
                            {item.title}
                            <div className={style.line1}></div>
                            <div className={style.line2}></div>
                        </div>

                        <div className={style.btn}>
                        Zeig mehr
                        </div>

                    </div>
                </div>
            </div>
            ))}
        </div>

    </div>
  )
}

export default Services