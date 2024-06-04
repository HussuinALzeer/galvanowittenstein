"use client"

import Loader from '../component/loader/page'
import style from '../app/appcss.module.css'
import { gsap } from 'gsap/gsap-core'
import { useGSAP } from '@gsap/react'
import { useRef ,useEffect } from 'react'
import { animation } from './animation/gsap'
import HomeScreen from '../component/homeScreen/page'
import FloatingBtn from '@/component/floatingBtn/page'
import Header from '@/component/header/page'

export default function Home() {

  useEffect(() => {
    animation()  // to start the loader animation 
  }, [])
  
  


  return (
    <div>
            <FloatingBtn/>
            <Header/>
      <Loader/>
      <div className={`${style.container} container`} id='con-lod' >

        <HomeScreen/>
      </div>
    </div>
  );
}
