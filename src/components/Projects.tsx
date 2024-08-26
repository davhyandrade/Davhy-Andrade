import { useContext, useState } from 'react';
import ProjectCard from './ProjectCard';
import CodeIcon from 'public/images/timeline/code.svg';
import { Context } from '@/context/layout';

interface IProject {
  description: string;
  url: String;
  title: String;
  subtitle: String;
  status_bar: Array<
    {
      name: String;
      value: String;
    }
  >;
  creationDate: Date;
  introduction: String;
  image: {
    url: String;
    subtitle: String;
  };
  paragraphs: Array<
    {
      type: String;
      value?: String;
      url?: String;
      subtitle?: String;
      width?: Number;
    }
  >;
  tags: String[];
}

export default function Projects() {
  const { pageWidth, projects }: any = useContext(Context);

  let [quantCards, setQuantCards] = useState<number>(8);

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
          {projects && projects
            .sort((project1: IProject, project2: IProject) => {
              const date1 = new Date(project1.creationDate.toString().replace(/(\d{4})\/(\d{2})\/(\d{2})/, '$3-$2-$1')).getTime();
              const date2 = new Date(project2.creationDate.toString().replace(/(\d{4})\/(\d{2})\/(\d{2})/, '$3-$2-$1')).getTime();
              return date2 - date1;
            })
            .slice(0, quantCards)
            .map((item: any, id: number) => {
              return (
                <ProjectCard
                  key={id}
                  url={item._id}
                  image={item.image.url}
                  title={item.title}
                  description={item.description}
                  date={item.creationDate.split("T")[0].split("-").reverse().join("/")}
                />
              );
            })}
        </div>
        {projects && quantCards < projects.length && (
          <div id="more-button">
            <span onClick={handleMoreButton}>load more...</span>
          </div>
        )}
      </div>
    </section>
  );
}
