import DesignPage from "@/components/DesignPage";

export default function SocialMedia() {
  const images = [
    {
      url: 'https://i.postimg.cc/tJvt9YmX/img-gallery-social-media3.png',
      description: 'Aniversário Infantil',
    },
    {
      url: 'https://i.postimg.cc/YqVfVLWR/img-gallery-social-media2.png',
      description: 'Evento de Dj fictício',
    },
    {
      url: 'https://i.postimg.cc/nhy2s9Vr/img-gallery-social-media1.png',
      description: 'Anúncio de Carro',
    },
    {
      url: 'https://i.postimg.cc/4d5QF86H/img-gallery-social-media7.png',
      description: 'Palestra',
    },
    {
      url: 'https://i.postimg.cc/nV314PV6/img-gallery-social-media4.png',
      description: 'Evento de Música',
    },
    {
      url: 'https://i.postimg.cc/Zq6c6Y0c/img-gallery-social-media5.png',
      description: 'Identidade Visual',
    },
    {
      url: 'https://i.postimg.cc/jS7Qrq6b/img-gallery-social-media6.png',
      description: 'Workshop',
    },
    {
      url: 'https://i.postimg.cc/ncMG0GCM/img-gallery-social-media8.png',
      description: 'Evento de Música',
    },
    {
      url: 'https://i.postimg.cc/501mgcCM/img-gallery-social-media9.png',
      description: 'Identidade Visual',
    },
    {
      url: 'https://i.postimg.cc/hvt1F9sy/img-gallery-social-media10.png',
      description: 'Social Media',
    },
    {
      url: 'https://i.postimg.cc/wTM303wN/Rifa-Camisa-Corinthians.png',
      description: 'Rifa de Camisa',
    },
    {
      url: 'https://i.postimg.cc/FKXbFtGJ/img-gallery-social-media11.png',
      description: 'Evento de Música',
    },
  ];

  return (
    <DesignPage images={images} title="Social Media" header_description="Imagens de mídias sociais e marketing digital com posts de diversos nichos." description="Explore meus trabalhos referentes às mídias sociais em diversos contextos." />
  );
}
