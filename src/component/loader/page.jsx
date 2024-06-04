"use client"

import React from 'react'
import style from '../loader/loader.module.css'
import { gsap } from 'gsap/gsap-core'
import { useGSAP } from '@gsap/react'
import { useRef, useEffect } from 'react'

function Loader() {

    const counter = useRef()
    const Loader = useRef()

    const t1 = useRef()

    useEffect(() => {
        const CounterElement = counter.current;
        let currentValue = 0 ;

        const updateCounter = () => {
            
            if(currentValue === 100 ){
                return
            }

            currentValue += Math.floor(Math.random() * 10) + 1

            if(currentValue > 100) {
                currentValue = 100
            }

            CounterElement.textContent = currentValue + "%"

            let delay = Math.floor(Math.random() * 20) + 250;

            setTimeout(updateCounter,delay)
        }

    updateCounter()    

    }, [])
    
    useGSAP(() => {

        t1.current = gsap.timeline()
        .from(".circles" , 2 ,{
        top:"-100%",
        ease:"elastic.out",
        delay: 0.5
    })
        .to(".circleInner" , 1 , {
        width:"75px",
        height:"75px",
        ease:"power4.inOut",
        delay:0.5
        
    })
        .to(".circleInnerRotator" , 0.75 , {
            scale :1,
            ease:"power4.inOut",
            delay:0
            
        })
        .to(".circles" , 0.75, {
            rotate:360,
            ease:"power4.inOut",
            delay:0
        })

        .to(".block" , 0.75 , {
            display:"block",
            height:"200px",
            ease:"power4.inOut",
            delay:0
        })

        .to(".block" , 0.75 , {
            display:"block",
            width:"800px",
            ease:"power4.inOut",
            delay:0
        })

        .to(".block" , 0.75 , {
            display:"block",
            width:"0px",
            ease:"power4.inOut",
            delay:0.5
        })

        .to(".circles" , 0.75, {
            rotate:0,
            ease:"power4.inOut",
            delay:0
        })

        
        

    }, {scope:Loader})


  return (
    <div className={`${style.loader} loader`} id='loader' ref={Loader}>
      <h1 className={style.counter} ref={counter} >0</h1>
      <div className={style.site_teaser}>
        <span>Use headphones for better experience</span>
      </div>

      <div className= { `circles ${style.circles}`}>
        <div className={`${style.circle} ${style.circleOuter}`}></div>
        <div className={`${style.circle} ${style.circleInner} circleInner`}></div>
        <div className={`${style.circle} ${style.circleInnerRotator} circleInnerRotator`}></div>
        <div className={`${style.block} block`}></div>
      </div>
    </div>
  )
}

export default Loader
