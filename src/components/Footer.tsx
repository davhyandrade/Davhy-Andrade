import Google from 'public/images/social-media/vetor-google.svg';
import Github from 'public/images/social-media/vetor-github.svg';
import Instagram from 'public/images/social-media/vetor-instagram.svg';
import Whatsapp from 'public/images/social-media/vetor-whatsapp.svg';
import Behance from 'public/images/social-media/vetor-behance.svg';
import Linkedin from 'public/images/social-media/vetor-linkedin.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Context } from '@/context/layout';

export default function Footer() {
  const { handleOpenModalEmail, setIsActiveMenu } = useContext(Context);

  const buttons = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Contact',
      url: '',
    },
    {
      name: 'About',
      url: '',
    },
    {
      name: 'Home Screen',
      url: '',
    },
    {
      name: 'Reload',
      url: '',
    },
  ];

  const router = useRouter();

  function handleButtonsFooter(name: string) {
    switch (name) {
      case 'Home Screen':
        return window.scrollTo(0, 0);
      case 'Reload':
        return window.location.reload();
      case 'Contact':
        return [window.scrollTo(0, 0), handleOpenModalEmail()];
      case 'About':
        if (router.pathname !== '/') {
          setIsActiveMenu(false);
          router.push('/');
          setTimeout(() => {
            return window.scrollTo({ top: 1000, left: 0 });
          }, 1000);
        }
        return window.scrollTo({ top: 1000, left: 0 });
      default:
        return;
    }
  }

  return (
    <footer>
      <div className="position">
        <div>
          {buttons.map((item, id) => {
            return (
              <div key={id}>
                {item.url ? (
                  <Link onClick={() => setIsActiveMenu()} href={item.url}>{item.name}</Link>
                ) : (
                  <button onClick={() => handleButtonsFooter(item.name)}>{item.name}</button>
                )}
              </div>
            );
          })}
        </div>  
        <span>My Portfólio ©2022</span>
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
    </footer>
  );
}
