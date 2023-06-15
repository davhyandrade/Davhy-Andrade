import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import CodeIcon from 'public/images/timeline/code.svg';
import Arrow from 'public/images/timeline/arrow.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
  const [widthTranslate, setWidthTranslate] = useState(0);
  const [widthImage, setWidthImage] = useState<number>(0);
  
  useEffect(() => {
    return setWidthImage(window.innerWidth > 800 ? 300 : 150); // defines the width of the image according to whether the user is on mobile or pc 
  })

  function handleLeftCarouselButton() {
    if (widthTranslate === 0) return;
    return setWidthTranslate((prevData) => prevData - widthImage);
  }

  function handleRightCarouselButton() {
    const isVisibleImageNumberOnScreen = window.innerWidth > 800 ? 4 : 3;
    const maxWidth = widthImage * carouselImages.length - (widthImage * isVisibleImageNumberOnScreen); // (widthImage * isVisibleImageNumberOnScreen) referring to the total number of images visible on the screen
    if (widthTranslate >= maxWidth) return;
    return setWidthTranslate((prevData) => prevData + widthImage);
  }

  useEffect(() => {
    if (carouselImages) carousel.current.style.transform = `translateX(-${widthTranslate}px)`;
  }, [widthTranslate]);

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
                    <div className="image-container" key={id}>
                      <LazyLoadImage src={item.url} alt="image" effect='blur' />
                    </div>
                  )
                );
              })}
            </div>
            <div>
              {images.slice(initialImage, finalImage).map((item: any, id: number) => {
                return (
                  item.url && (
                    <div className="image-container" key={id}>
                      <LazyLoadImage src={item.url} alt="image" effect='blur' />
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
                    className={`${item.class && `${item.class}`} image-container`}
                    key={id}
                    onClick={() => handleImage(item.url)}
                    data-description={item.description}
                  >
                    <LazyLoadImage src={item.url} alt="image" effect='blur' />
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
                    return (
                      item.url && (
                        <div className="image-container" key={id}>
                          <LazyLoadImage src={item.url} alt="image" effect='blur' />
                        </div>
                      )
                    );
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
