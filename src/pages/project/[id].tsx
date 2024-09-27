import { Context } from '@/context/layout';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { toast } from 'react-toastify';

export default function Project() {
  const router = useRouter();

  let { id } = router.query;

  const { setIsActiveMenu, setIsActiveLoading, pageWidth }: any = useContext(Context);

  useEffect(() => {
    return setIsActiveMenu(true);
  }, []);

  const [project, setProject] = useState<any>();

  const fetchProject = async () => {
    setIsActiveLoading(true);

    try {
      await axios.get(`/api/project/${id}`).then((response) => {
        setProject(response.data.project);
        setTimeout(() => {
          setIsActiveLoading(false);
        }, 2000);
      });
    } catch (error: any) {
      setTimeout(() => {
        setIsActiveLoading(false);
      }, 2000);
      if (error.resonse?.data.msg)
        toast.error(error.response?.data.msg, {
          theme: 'colored',
        });
    }
  };

  useEffect(() => {
    if (id) fetchProject();
  }, [id]);

  const [creationDate, setCreationDate] = useState<String>();

  useEffect(() => {
    if (project && project.creationDate)
      setCreationDate(project.creationDate.split('T')[0].split('-').reverse().join('/'));
  }, [project]);

  return (
    <>
      {project && (
        <div className="project-page">
          <div className="header">
            {project.title && (
              <h1>
                <b>{project.title}</b>
                {project.subtitle && (
                  <>
                    {pageWidth > 800 && <>&nbsp;-&nbsp;</>}
                    {project.subtitle}
                  </>
                )}
              </h1>
            )}
          </div>
          <div>
            <div className="position">
              <div>
                {project.image && (
                  <div>
                    <div className="status-bar">
                      {project.status_bar &&
                        project.status_bar.map((item: any, id: number) => {
                          return (
                            <div key={id}>
                              <span>{item.name}:</span>
                              <span>{item.value}</span>
                            </div>
                          );
                        })}
                    </div>
                    <div className="image-field">
                      <div>
                        {project.video ? (
                          <video src={project?.video} poster={project.image.url} controls muted></video>
                        ) : (
                          <LazyLoadImage
                            src={project.image.url}
                            alt={project.image.subtitle}
                            effect="blur"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                )}
                <div>
                  {project.introduction && <p>{project.introduction}</p>}
                  {project.url && 
                    <a id="project-link-button" href={project.url} target="_blank">
                      Acessar
                    </a>
                  }
                  <div>
                    <div>
                      <span>created in</span>
                      {project.creationDate && <span>{creationDate}</span>}
                    </div>
                    <button
                      onClick={() =>
                        navigator.clipboard
                          .writeText(window.location.href)
                          .then(() => {
                            toast('Link copiado com sucesso!', {
                              theme: 'colored',
                            });
                          })
                          .catch(() => {
                            toast('Algo deu errado!', {
                              theme: 'colored',
                            }); 
                          })
                      }
                      id="share-button"
                    >
                      Compartilhar
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                {project.paragraphs.length > 0 && project.paragraphs.map((item: any, id: number) => {
                  return item.type === 'text' ? (
                    <p key={id}>{item.value}</p>
                  ) : (
                    item.type === 'image' && (
                      <div key={id} className="image-field">
                        <div>
                          <LazyLoadImage src={item.url} alt={item.subtitle} effect="blur" width={`${item.width}%`} />
                        </div>
                        <span>{item.subtitle}</span>
                      </div>
                    )
                  );
                })}
                {project.tags && (
                  <div className="tags-field">
                    <h2>Tecnologias Utilizadas</h2>
                    {project.tags.map((item: String, id: number) => {
                      return <span key={id}>{item}</span>;
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
