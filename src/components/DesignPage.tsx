import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import CodeIcon from 'public/images/timeline/code.svg';
import Arrow from 'public/images/timeline/arrow.svg';

export default function DesignPage({ images, title, header_description, description, carouselImages }: any) {
  var [initialImage, setInitialImage] = useState<number>(0);
  var [finalImage, setFinalImage] = useState<number>(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setInitialImage((prevCount) => prevCount + 1);
      setFinalImage((prevCount) => prevCount + 1);
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (finalImage >= images.length + 1) {
      setInitialImage(0);
      setFinalImage(3);
    }
  }, [finalImage]);

  const router = useRouter();

  function handleImage(url: string) {
    const urlWithoutSlash = url.split('/').join('&&');
    return router.push(`${router.pathname}/${urlWithoutSlash}`);
  }

  const [widthPage, setWidthPage] = useState<number>(0);

  useEffect(() => {
    return setWidthPage(window.innerWidth);
  }, []);

  const carousel = useRef<any>(null);
  const [percentageTranslate, setPercentageTranslate] = useState(0);

  function handleLeftCarouselButton() {
    if (percentageTranslate === 0) return;
    return setPercentageTranslate((prevData) => (prevData - 100 / (widthPage > 800 ? 4 : 2)));
  }

  function handleRightCarouselButton() {
    const maxPercentage = (100 / 4) * carouselImages.length - 100;
    if (percentageTranslate === maxPercentage) return;
    return setPercentageTranslate((prevData) => (prevData + 100 / (widthPage > 800 ? 4 : 2)));
  }

  useEffect(() => {
    if (carouselImages) carousel.current.style.transform = `translateX(-${percentageTranslate}%)`;
  }, [percentageTranslate]);

  return (
    <div className="design-page">
      <div className="header"></div>
      <div className="design-landing-page">
        <div className="header">
          <h1 translate="no">{title}</h1>
          <p>{header_description}</p>
          <div className="image-background">
            <div>
              {images.map((item: any, id: number) => {
                return (
                  item.url && (
                    <div key={id}>
                      <img src={item.url} alt="image" />
                    </div>
                  )
                );
              })}
            </div>
            <div>
              {images.slice(initialImage, finalImage).map((item: any, id: number) => {
                return (
                  item.url && (
                    <div key={id}>
                      <img src={item.url} alt="image" />
                    </div>
                  )
                );
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
              <h2 translate="no">Images</h2>
              <p>{description}</p>
            </div>
          </div>
          <div>
            {images.map((item: any, id: number) => {
              return (
                item.url && (
                  <div
                    className={`${item.class && `${item.class}`}`}
                    key={id}
                    onClick={() => handleImage(item.url)}
                    data-description={item.description}
                  >
                    <img src={item.url} alt="image" />
                  </div>
                )
              );
            })}
            {carouselImages && (
              <div className="carousel-field">
                <div onClick={handleLeftCarouselButton} className="button-field left-carousel-button">
                  <Arrow />
                </div>
                <div onClick={handleRightCarouselButton} className="button-field right-carousel-button">
                  <Arrow />
                </div>
                <div ref={carousel}>
                  {carouselImages.map((item: any, id: number) => {
                    return item.url && <img key={id} src={item.url} alt="image" />;
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
