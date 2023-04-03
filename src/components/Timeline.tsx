import Pipe from 'public/images/timeline/pipe.svg';
import Gear1 from 'public/images/timeline/gear1.svg';
import Gear2 from 'public/images/timeline/gear2.svg';
import Code from 'public/images/timeline/code.svg';
import Globe from 'public/images/timeline/globe.svg';
import Arrow from 'public/images/timeline/arrow.svg';
import Github from 'public/images/social-media/vetor-github.svg';
import Link from 'next/link';

export default function Timeline() {
  return (
    <div className="timeline">
      <div>
        <div>
          <div>
            <Pipe />
            <div className="gear-field">
              <Gear1 />
              <Gear2 />
              <Gear2 />
            </div>
          </div>
          <div id="horizontal-line"></div>
          <Link href="https://github.com/davhyandrade/Davhy-Andrade" translate='no' id="button-source-code">
            <Github/>
            <div>
              <h2>Source Code</h2>
              <span>Github</span>
            </div>
            <Arrow/>
          </Link>
        </div>
        <div className="line-field">
          <div className="vertical-line"></div>
          <Code className="title-timeline"/>
          <div className="vertical-line"></div>
          <Globe className="title-timeline"/>
          <div className="vertical-line"></div>
        </div>
      </div>
    </div>
  )
}