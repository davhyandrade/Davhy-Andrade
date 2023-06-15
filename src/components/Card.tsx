import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface IProps {
  url: string;
  image: string;
  title: string;
  description: string;
  date: string;
}

export default function Card({ url, image, title, description, date }: IProps) {
  const [dateForDay, setDateForDay] = useState<number>(0);
  
  useEffect(() => {
    // Calculate day difference
    const currentDate: any = new Date();
    const americanDate: any = new Date(date.split('/').reverse().join('-'));
    const diffInMs: number = currentDate - americanDate;
    const diffInDays: number = diffInMs / (1000 * 60 * 60 * 24);
    return setDateForDay(diffInDays);
  }, []);

  return (
    <div className="project-card">
      <Link href={url}>
        {dateForDay > 365 ? <span className='yellow-tag' id="card-tag">Antigo</span> : dateForDay < 30 && <span className='blue-tag' id="card-tag">Recente</span>}
        <div className="image-field">
          <div className='image-container' >
            <Image src="/" data-src={image} alt="project image" loading="lazy" fill />
          </div>
          <div id="drop-shadow"></div>
        </div>
        <div>
          <h1>{title}</h1>
          <span>{date}</span>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}
