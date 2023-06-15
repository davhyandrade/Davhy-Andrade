import Link from "next/link";
import Image from "next/image";

export default function Resume() {
  return (
    <div className="resume-field">
      <div className="position">
        <div className="header">
          <div className="position">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>12/02/2023</span>
            </div>  
            <Link href='/pdf/cv.pdf'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download CV
            </Link>
          </div>
        </div>
        <div className="image-container">
          <Image src="" data-src="/images/cv.png" alt="cv" loading="lazy" fill />
        </div>
      </div>
    </div>
  )
}