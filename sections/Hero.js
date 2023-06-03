import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          {/* <TitleLogo title='creative' caption='7' className='logobg' /> */}
          <img src="/images/scaleinclogo.png" alt="Scale Inc Logo" height={100} width={600} />
          <h1 className='hero-title'>Accelerating growth</h1>

          <div className='sub-heading'>
            <TitleSm title='Data Strategy' /> <span>.</span>
            <TitleSm title='Web & App Development' /> <span>.</span>
            <TitleSm title='Process Automation' /> <span>.</span>
            <TitleSm title='Digital Marketing' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='The last digital agency you ll ever need' />
            <p>We help businesses with their data strategy, automation and marketing needs so they can focus on growing their businesses. </p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      {/* <Brand /> */}

      {/* <div className='text-center'>
        <Title title='Latest news & articles' />
      </div> */}
      
    </>
  )
}

export default Hero
