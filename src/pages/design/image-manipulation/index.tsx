import DesignPage from "@/components/DesignPage";

export default function SocialMedia() {
  const images = [
    {
      url: "https://i.postimg.cc/HxVkfn50/gallery-manipulacao2.png",
      description: "Ilha da Bruxa"
    },
    {
      url: "https://i.postimg.cc/MpSXvW2x/gallery-manipulacao1.png",
      description: "Submerged Track"
    },
    {
      url: "https://i.postimg.cc/vTnHZK0c/gallery-manipulacao3.png",
      description: "Mysterious Life"
    },
    {
      url: "https://i.postimg.cc/fbWLfBRr/gallery-manipulacao4.png",
      description: "Paradise"
    },
    {
      url: "https://i.postimg.cc/wBWBfLtT/gallery-manipulacao5.png",
      description: "Cat in Paris"
    },
    {
      url: "https://i.postimg.cc/GmxtDZdD/gallery-manipulacao6.png",
      description: "Desbravador"
    },
    {
      url: "https://i.postimg.cc/bYSvgGqp/gallery-manipulacao7.png",
      description: "TBT"
    },
    {
      url: "https://i.postimg.cc/7LDjp1s7/Muie.png",
      description: "Fairy"
    },
    {
      url: "https://i.postimg.cc/cH2LZWMp/gallery-manipulacao8.png",
      description: "Mar Distante"
    }
  ];

  return (
    <DesignPage images={images} title="Manipulations" header_description="Imagens autorais, manipulando-as e deixando-as o mais surreais possível." description="Explore os meus trabalhos relacionados à manipulação de imagens." />
  );
}
