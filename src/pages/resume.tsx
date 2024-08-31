import Link from 'next/link';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Resume() {
  const [isActiveCvButtons, setIsActiveCvButtons] = useState<string>('creative');

  return (
    <div className="resume-field">
      <div className="position">
        <div className="header">
          <div className="position">
            <div>
              <span>Updated on</span>
              <div>
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
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>31/08/2024</span>
              </div>
            </div>
            <div className="cv-buttons-field">
              <div>
                <input
                  onChange={(event) => setIsActiveCvButtons(event.target.value)}
                  type="radio"
                  name="cv-buttons"
                  className={`${isActiveCvButtons?.toLowerCase() === 'creative' && 'active-cv-button'}`}
                  id="creative-cv"
                  value={'creative'}
                  defaultChecked
                />
                <label htmlFor="creative-cv">Elaborado</label>
              </div>
              <div>
                <input
                  onChange={(event) => setIsActiveCvButtons(event.target.value)}
                  type="radio"
                  name="cv-buttons"
                  className={`${isActiveCvButtons?.toLowerCase() === 'simple' && 'active-cv-button'}`}
                  id="simple-cv"
                  value={'simple'}
                />
                <label htmlFor="simple-cv">Simples</label>
              </div>
            </div>
            <Link
              href={`${
                isActiveCvButtons.toLowerCase() === 'creative'
                  ? '/pdf/creative_cv.pdf'
                  : isActiveCvButtons.toLowerCase() === 'simple' && '/pdf/simple_cv.pdf'
              }`}
              target="_blank"
              rel="noreferrer noopenner"
            >
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
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Download CV
            </Link>
          </div>
        </div>
        <div className="image-container">
          <LazyLoadImage
            src={`${
              isActiveCvButtons.toLowerCase() === 'creative'
                ? '/images/creative_cv.png'
                : isActiveCvButtons.toLowerCase() === 'simple' && '/images/simple_cv.png'
            }`}
            alt="cv"
            effect="blur"
          />
        </div>
      </div>
    </div>
  );
}
