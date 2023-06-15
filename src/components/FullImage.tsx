import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Close from 'public/images/modal/vector-close.svg'
import { Context } from "@/context/layout";
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface IProps {
  value: any
}

export default function FullImage({ value }: IProps) {
  const router = useRouter();

  const { setIsFullImage } = useContext(Context);

  const [url, setUrl] = useState<any>();

  useEffect(() => {
    setIsFullImage(true);
    if (typeof value === 'undefined') {
      const valueUrl: any = window.location.href.split('/').pop();
      return setUrl(valueUrl.split('&&').join('/'));
    }
    return setUrl(value.split('&&').join('/'));
  }, [])
  
  return (
    <div className="full-image">
      <div>
        <Close onClick={() => [router.back(), setIsFullImage(false)]} />
        <LazyLoadImage
          src={url} 
          effect="blur"
          alt="image"
        />
      </div>
    </div>
  )
}