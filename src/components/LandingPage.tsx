import Menu from './Menu';
import OrangeGear from 'public/images/computer/orange-gear.svg';
import Computer from 'public/images/computer/computer.svg';
import BlueGear from 'public/images/computer/blue-gear.svg';
import Screwdriver from 'public/images/computer/screwdriver.svg';
import Google from 'public/images/social-media/vetor-google.svg';
import Github from 'public/images/social-media/vetor-github.svg';
import Instagram from 'public/images/social-media/vetor-instagram.svg';
import Whatsapp from 'public/images/social-media/vetor-whatsapp.svg';
import Behance from 'public/images/social-media/vetor-behance.svg';
import Linkedin from 'public/images/social-media/vetor-linkedin.svg';
import Developer from 'public/images/developer.svg';
import Typed from 'typed.js';
import { useContext, useEffect, useRef } from 'react';
import { Context } from '@/context/layout';
import Image from 'next/image';

export default function LandingPage() {
  const { pageWidth }: any = useContext(Context);

  const typedRef = useRef<any>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Designer Digital', 'Desenvolvedor Web'],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 300,
      loop: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="landing-page">
      <Menu />
      <div className="position">
        <div>
          <p>Olá, meu nome é</p>
          <h1>Davhy Andrade</h1>
          <p>
            e sou <span ref={typedRef}></span>
          </p>
          {pageWidth < 800 && (
            <div className="profile-picture">
              <div>
                <Image src="https://github.com/davhyandrade.png" width={100} height={100} alt="profile picture" />
              </div>
              <Developer />
            </div>
          )}
          <a href="https://api.whatsapp.com/send?phone=5511934643395">
            <button id="btn-contato-landing-page" type="submit">
              Contratar-me
            </button>
          </a>
          <div className="social-media-field">
            <a href="mailto:davhydesign@gmail.com">
              <Google />
            </a>
            <a href="https://github.com/davhyandrade">
              <Github />
            </a>
            <a href="https://www.instagram.com/_davhy/">
              <Instagram />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5511934643395">
              <Whatsapp />
            </a>
            <a href="https://www.behance.net/davhyandrade">
              <Behance />
            </a>
            <a href="https://www.linkedin.com/in/davhy-andrade-dev">
              <Linkedin />
            </a>
          </div>
        </div>
        <div className="computer-image-field">
          <Computer id="image-computer" />
          <OrangeGear id="image-orange-gear" />
          <BlueGear id="image-blue-gear" />
          <Screwdriver id="image-screwdriver" />
        </div>
      </div>
    </section>
  );
}
