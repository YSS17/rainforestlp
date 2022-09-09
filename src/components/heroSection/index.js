import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import Typewriter from 'typewriter-effect';
import { Button } from '../buttonElement';
import { HeroContainer, HeroBg, VideoBg,
         HeroContent, HeroH1, HeroP,
         HeroBtnWrapper, ArrowForward,
         ArrowRight} from './hero';

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
        <HeroH1>        
          <Typewriter onInit={(typewriter) => {
            typewriter
            .pauseFor(500)
            .typeString("healthcare ")
            .pauseFor(500)
            .typeString('<span style="color: #01bf71;">Sustainable</span>')
            .pauseFor(800)
            .deleteChars(11)
            .typeString('<span style="color: #01bf71;">from Amazon</span>')
            .pauseFor(800)
            .deleteChars(11)
            .typeString('<span style="color: #01bf71;">Premium</span>')
            .pauseFor(800)
            .deleteAll()
            .pauseFor(500)
            .typeString('<span style="color: #01bf71;">Rainforest</span>')
            .start()
          }}
          />
        </HeroH1>
        <HeroP>Get access to our plans</HeroP>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>Get Started {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;