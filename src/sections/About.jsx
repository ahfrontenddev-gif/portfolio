import React from 'react'
import Title from '../components/About/Title'
import Paragraph from '../components/About/Paragraph'
import Timeline from '../components/About/Timeline'

const About = () => {
  return (
    <section className='about w-full h-full hidden'>
        <div className="flex items-center flex-col pt-[5vh]">
            <Title />
            <Paragraph />
            <Timeline />
        </div>
    </section>
  )
}

export default About