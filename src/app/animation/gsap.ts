import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const animation = () => {

    const container  =document.getElementById("con-lod")
    const loader  =document.getElementById("loader")

    const screenWidth = window.innerWidth;


    if(container) {
        const t1 = gsap.timeline()

     .fromTo(container , {
      duration:2,
      left:"100%",
      scale:0.5,
      ease:"power4.inOut",
      delay:4,
      visibility:"hidden"
   }, 
   {
     duration:2,
     left:'0%',
     scale:0.5,
     transform:"translateX(-50)",
     ease:"power4.inOut",
     delay:4,
     visibility:"visible"
   }
   )

   .to(loader , 2, {
    scale:0,
    ease:"power4.inOut",
    delay:1,
    display:'none'
})

if (screenWidth <= 640) {
  // For screens 640px or less
  t1.to(container, 1.5, {
      scale: 1,
      ease: "power4.inOut"
  });
} else {
  // For larger screens
  t1.to(container, 1.5, {
      scale: 1,
      ease: "power4.inOut"
  });
}

   t1.to(container,0.5 ,{
    position:"relative",
    delay:0
   })


    }
}


export const MenuOverlay = (isMenuOpen: boolean) =>{

  const Menu_layover  =document.getElementsByClassName("MenuOverlay")
  const Link_c  = document.getElementsByClassName("link")

  const tl = gsap.timeline()
  

  if(isMenuOpen) {

    tl.to(Menu_layover,1 ,{
      opacity:1,
      ease:"power4.inOut",
      display:'flex'

    })

    tl.from(Link_c,1,{
      opacity:0,
      stagger:0.1,
      ease:"power4.inOut",
      delay:-0.75
    })
    
  }
  else{
    tl.to(Menu_layover,1 ,{
      opacity:0,
      ease:"power4.inOut",
      display:'none'
    })
  }

}

export const GsapAbout = () =>{

  const AboutTitle = document.getElementById('AboutTitle');
  const AboutMainText = document.getElementById('AboutMainText')
  const AboutImage = document.getElementById('AboutImage')
  

  // const tl= gsap.timeline()
  gsap.registerPlugin(ScrollTrigger)


  gsap.from(AboutTitle,1 ,{
    opacity:0,
    
    ease:"power4.inOut",
    scrollTrigger:{
      trigger:AboutTitle,
      start:"top 250px",
      // markers:true
    }
  })

  gsap.from(AboutMainText,1 ,{
    opacity:0,
    
    ease:"power4.inOut",
    scrollTrigger:{
      trigger:AboutMainText,
      start:"top 250px",
      // markers:true
    }
  })

  gsap.from(AboutImage,1 ,{
    x:'-50px',
    
    ease:"power4.inOut",
    scrollTrigger:{
      trigger:AboutImage,
      start:"top 200px",
      // markers:true
    }
  })

} 



export const GsapContent = (toggle:boolean) =>{
  const ContactContianer = document.getElementById('ContentContainer');

  const tl = gsap.timeline()

  if(toggle){
    gsap.to(ContactContianer , 0.1, {
      delay:-1,
      borderRadius:"0px 0px 1000px 1000px / 1px 1px 350px 350px",

    })


    tl.to(ContactContianer ,1 , {
      top:"0",
      visibility:"visible",
      ease: "power4.in", // Optional: specify easing function
      duration:1,

    })

    

    gsap.to(ContactContianer ,.1 , {
      borderRadius:"0",
      delay:0.6
    })

    
  }
  else{
    tl.to(ContactContianer ,.5 , {
      top:"-100%",
      borderRadius:"0",

    })

    tl.to(ContactContianer ,0 , {
      visibility: 'hidden'
    })
  }

}