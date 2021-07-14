import Flex from "../../components/atoms/Flex";
import "swiper/swiper.scss";
import PhotoBoots from "./PhotoBoots/PhotoBoots";
import Faq from "./Faq/Faq";
import News from "./News/News";
import Contact from "./Contact/Contact";
import GoogleMap from "./Map/Map";
import Header from "./Header/Header";
import InfoBox from "./InfoBox/InfoBox";
import style from "./style.module.scss";

const MobileGallery = () => {
  return (
    <Flex className={style.mobile_gallery} direction="column">
      <Header />
      <InfoBox />
      <PhotoBoots />
      <Faq />
      <News />
      <Contact />
      <GoogleMap />
    </Flex>
  );
};

export default MobileGallery;
