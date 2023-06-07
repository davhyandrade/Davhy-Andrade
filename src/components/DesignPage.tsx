import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CodeIcon from 'public/images/timeline/code.svg';

export default function DesignPage({ images, title, header_description, description }: any) {
  var [initialImage, setInitialImage] = useState<number>(0);
  var [finalImage, setFinalImage] = useState<number>(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setInitialImage(prevCount => prevCount + 1);
      setFinalImage(prevCount => prevCount + 1);
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (finalImage >= images.length+1) {
      setInitialImage(0);
      setFinalImage(3);
    } 
  }, [finalImage])

  const router = useRouter();

  function handleImage(url: string) {
    const urlWithoutSlash = url.split('/').join('&&');
    return router.push(`${router.pathname}/${urlWithoutSlash}`);
  }
  
  return (
    <div className="design-page">
      <div className="header"></div>
      <div className="design-landing-page">
        <div className="header">
          <h1 translate='no'>{title}</h1>
          <p>{header_description}</p>
          <div className="image-background">
            <div>
              {images.map((item: any, id: number) => {
                return (
                  <div key={id}>
                    <img src={item.url} alt="image" />
                  </div>
                )
              })}
            </div>
            <div>
              {images.slice(initialImage, finalImage).map((item: any, id: number) => {
                return (
                  <div key={id}>
                    <img src={item.url} alt="image" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="images-field">
        <div className="position">
          <div className="header">
            <div>
              <CodeIcon className="title-timeline" />
              <div className="vertical-line"></div>
            </div>
            <div>
              <h2 translate='no'>Images</h2>
              <p>{description}</p>
            </div>
          </div>
          <div>
            {images.map((item: any, id: number) => {
              return (
                <div key={id} onClick={() => handleImage(item.url)} data-description={item.description}>
                  <img src={item.url} alt="image" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
