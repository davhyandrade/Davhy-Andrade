import LandingPage from '@/components/LandingPage';
import Timeline from '@/components/Timeline';
import Graphic from '@/components/Graphic';
import Code from '@/components/Code';
import { useSelector } from 'react-redux';
import Card from '@/components/Card';
import { useContext, useEffect, useState } from 'react';
import CodeIcon from 'public/images/timeline/code.svg';
import { Context } from '@/context/layout';

export default function Home() {
  const { buttonsMenu } = useSelector((rootReducer: any) => rootReducer.menuReducer);

  const { setIsActiveMenu } = useContext(Context);

  let [quantCards, setQuantCards] = useState<number>(8);

  const [projects, setProjects] = useState(buttonsMenu.filter((item: any) => item.name === 'Projects')[0].dropdown);

  function handleMoreButton() {
    return setQuantCards(quantCards += 4);
  }

  useEffect(() => {
    return setIsActiveMenu(false);
  }, [])

  return (
    <>
      <LandingPage />
      <section className="about-section">
        <div className="position">
          <Timeline />
          <div className="introduction-field">
            <h1 data-animation="appear-right-animation" translate="no">Programming World</h1>
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
                , com sua capacidade de criar interfaces e experiências únicas que tornam a web muito mais interessante
                e envolvente.
              </span>
              <Code />
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
      <section className="projects-section">
        <div className="position">
          <div className="header">
            <div>
              <CodeIcon data-animation="appear-animation" className="title-timeline" />
              <div data-animation="vertical-line-animation" className="vertical-line">
                <div></div>
              </div>
            </div>
            <div>
              <h2 data-animation="appear-right-animation">Projects</h2>
              <p>Explore minha coleção de projetos, em constante desenvolvimento e aprimoramento com intuito de atender às necessidades dos futuros clientes.</p>
            </div>
          </div>
          <div className="cards-field">
            {projects.slice(0, quantCards).map((item: any, id: number) => {
              return (
                <Card
                  key={id}
                  url={item.url}
                  image={item.imageUrl}
                  title={item.name}
                  description={item.description}
                  date={item.date}
                />
              );
            })}
          </div>
          {quantCards < projects.length && (
            <div id="more-button">
              <span onClick={handleMoreButton}>load more...</span>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
