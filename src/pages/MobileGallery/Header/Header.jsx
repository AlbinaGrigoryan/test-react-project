import Flex from "../../../components/atoms/Flex";
import Logo from "../../../assets/svgComponents/Logo";
import HeaderImg from "../../../assets/images/header_img.png";
import Ellipse from "../../../assets/images/ellipse.png";
import Point from "../../../assets/images/point.png";
import Play from "../../../assets/svgComponents/Play";
import FancyVideo from "react-videojs-fancybox";
import "swiper/swiper.scss";
import style from "./style.module.scss";

const Header = () => {
  return (
    <>
      <Logo />
      <Flex className={style.header_img_box}>
        <img src={HeaderImg} className={style.header_img} alt="header_img" />
        <img src={Ellipse} className={style.ellipse} alt="ellipse" />
        <img src={Point} className={style.point} alt="point" />
        <Flex className={style.play}>
          <Play />
          <FancyVideo
            source="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
            id={"sintel"}
            style={{opacity:'0 !important'}}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
