import DesignPage from "@/components/DesignPage";
import { Context } from "@/context/layout";
import { useContext } from "react";

export default function SocialMedia() {
  const { widthPage }: any = useContext(Context);

  const images = [
    {
      url: "https://i.postimg.cc/fLpqvqD7/img-gallery-esportivos-slide1.png",
      description: "Flyer Esportivo do Salah"
    },
    {
      url: "https://i.postimg.cc/2SrcTZRt/img-gallery-esportivos-slide2.png",
      description: "Amistoso entre Etecs"
    },
    {
      url: "https://i.postimg.cc/3JMb4qLY/img-gallery-esportivos-slide3.png",
      description: "Campeão do Campeonato de Pes Mobile"
    },
    {
      url: "https://i.postimg.cc/TYrNrcSm/img-gallery-esportivos-slide4.png",
      description: "Campeão do Campeonato de Pes Mobile"
    },
    {
      url: "https://i.postimg.cc/Kc3HYbD0/img-gallery-esportivos-slide5.png",
      description: "Banner da Interclasse"
    },
    {
      url: "https://i.postimg.cc/5tksxKYc/img-gallery-esportivos-slide6.png",
      description: "Banner do Jogo Destaque da Rodada"
    },
    {
      url: "https://i.postimg.cc/GmKMfmbm/img-gallery-esportivos-slide7.png",
      description: "Banner do Jogo Destaque da Rodada"
    },
    {
      url: "https://i.postimg.cc/pThqyQzm/img-gallery-esportivos-slide8.png",
      description: "Banner do Jogo Destaque da Rodada"
    },
    {
      url: "https://i.postimg.cc/KYY9hhYr/img-gallery-esportivos-slide9.png",
      description: "Banner do Jogo Destaque da Rodada"
    },
    {
      url: "https://i.postimg.cc/wvCFNtQ0/img-gallery-esportivos-slide10.png",
      description: "Banner do Jogo Destaque da Rodada"
    },
    {
      url: "https://i.postimg.cc/gchgWDG5/img-gallery-esportivos-slide12.png",
      description: "Semi-Final do Campeonato"
    },
    {
      url: "https://i.postimg.cc/ZKhVKdRq/img-gallery-esportivos-slide13.png",
      description: "Banner do Time Destaque da Rodada"
    },
    {
      url: "https://i.postimg.cc/D07JRnv7/img-gallery-esportivos8.png",
      description: "Flyer do Comunicado da Atlética",
      class: "w-66"
    },
    {   
      url: "https://i.postimg.cc/Nf7byj9k/img-gallery-esportivos-slide14.png",
      description: "Flyer de Amistoso"
    },
    widthPage < 800 && {
      url: "https://i.postimg.cc/gj3sHYMd/img-gallery-esportivos-slide11.png",
    },
  ];

  const carouselImages = [
    widthPage > 800 && {
      url: "https://i.postimg.cc/gj3sHYMd/img-gallery-esportivos-slide11.png",
    },
    {
      url: "https://i.postimg.cc/3rfc8RG4/img-tabelas1.png",
    },
    {
      url: "https://i.postimg.cc/L5JvYtPq/img-tabelas4.png",
    },
    {
      url: "https://i.postimg.cc/mrTwNfMW/img-tabelas11.png",
    },
    {
      url: "https://i.postimg.cc/C1PmxPRT/img-tabelas9.png",
    },
    {
      url: "https://i.postimg.cc/bNKVnB3q/img-tabelas3.png",
    },
    {
      url: "https://i.postimg.cc/XNrTyd4c/img-tabelas8.png",
    },
    {
      url: "https://i.postimg.cc/1zSWCVkT/img-tabelas7.png",
    },
    {
      url: "https://i.postimg.cc/wBkwSTHB/img-tabelas5.png",
    },
    {
      url: "https://i.postimg.cc/PxrShsrQ/img-tabelas6.png",
    },
    {
      url: "https://i.postimg.cc/g28SHHT8/img-tabelas2.png",
    },
    {
      url: "https://i.postimg.cc/JzNxk4sQ/img-tabelas10.png",
    },
    {
      url: "https://i.postimg.cc/rpg9fnC0/img-tabelas12.png",
    }
  ];

  return (
    <DesignPage images={images} carouselImages={carouselImages} title="Sporting Image" header_description="Imagens autorais, como flyers esportivos, tabelas e outros materiais relacionados." description="Explore meus trabalhos referentes aos flyes esportivos em diversos contextos." />
  );
}
