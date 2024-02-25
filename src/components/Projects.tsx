import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import ProjectCard from './ProjectCard';
import CodeIcon from 'public/images/timeline/code.svg';
import { Context } from '@/context/layout';

interface IProject {
  name: string;
  url: string;
  imageUrl: string;
  description: string;
  date: string;
}

export default function Projects() {
  const { pageWidth }: any = useContext(Context);

  const { buttonsMenu } = useSelector((rootReducer: any) => rootReducer.menuReducer);

  let [quantCards, setQuantCards] = useState<number>(8);

  const [projects, setProjects] = useState(buttonsMenu.filter((item: any) => item.name === 'Projects')[0].dropdown);

  function handleMoreButton() {
    return setQuantCards((quantCards += 4));
  }

  return (
    <section className="projects-section">
      <div className="position">
        <div className="header">
          {pageWidth > 800 && (
            <div>
              <CodeIcon data-animation="appear-animation" className="title-timeline" />
              <div data-animation="vertical-line-animation" className="vertical-line">
                <div></div>
              </div>
            </div>
          )}
          <div>
            <div>
              {pageWidth < 800 && <CodeIcon data-animation="appear-animation" className="title-timeline" />}
              <h2 data-animation="appear-right-animation">Projects</h2>
            </div>
            <p>
              Explore minha coleção de projetos, em constante desenvolvimento e aprimoramento com intuito de atender às
              necessidades dos futuros clientes.
            </p>
          </div>
        </div>
        <div className="cards-field">
          {projects
            .slice(0, quantCards)
            .sort((project1: IProject, project2: IProject) => {
              const date1 = new Date(project1.date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1')).getTime();
              const date2 = new Date(project2.date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1')).getTime();
              return date2 - date1;
            })
            .map((item: any, id: number) => {
              return (
                <ProjectCard
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
  );
}
