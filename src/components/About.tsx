import { useContext } from 'react';
import ProgrammingCode from './ProgrammingCode';
import Graphic from './Graphic';
import Timeline from './Timeline';
import { Context } from '@/context/layout';

export default function About() {
  const { pageWidth }: any = useContext(Context);

  return (
    <section className="about-section">
      {pageWidth < 800 && <div className="header"></div>}
      <div className="position">
        <Timeline />
        <div className="introduction-field">
          <h1 data-animation="appear-right-animation" translate="no">
            Programming World
          </h1>
          <p>
            <span>Os primeiros 90%</span> do código representam os <span>primeiros 10%</span> do tempo de
            desenvolvimento. Os <span>10% restantes</span> do código é para mostrar aos outros os <span>90%</span> do
            tempo de desenvolvimento.{' '}
          </p>
          <div>
            <span>
              <span>
                Desenvolver aplicações web com JavaScript é uma experiência incrível que me empolga cada vez mais
              </span>
              , com sua capacidade de criar interfaces e experiências únicas que tornam a web muito mais interessante e
              envolvente.
            </span>
            <ProgrammingCode />
          </div>
        </div>
        <div className="about-field">
          <h2 data-animation="appear-right-animation">About me</h2>
          <p>
            <span>
              <span>Entusiasta da tecnologia</span>, fissurado pela sensação de desenvolver e resolver problemas.
            </span>
            <br /> Sou Desenvolvedor Web focado em NextJS e Typescript com 2 anos focado na área de programação
            desenvolvendo projetos além de ser Designer Digital com experiência freelancer.
          </p>
        </div>
        <div className="specialties-field">
          <div>
            <h2>Specialty</h2>
            <p>
              Estou sempre em busca de coisas novas para aprender, tendo o Google como meu professor e o editor de
              código como meu notebook.
            </p>
          </div>
          <Graphic />
        </div>
      </div>
    </section>
  );
}
