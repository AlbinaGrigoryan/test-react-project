import Flex from "../../../components/atoms/Flex";
import ImgOne from "../../../assets/images/img_one.png";
import ImgTwo from "../../../assets/images/img_two.png";
import ImgThree from "../../../assets/images/img_three.png";
import ImgFour from "../../../assets/images/img_four.png";
import "swiper/swiper.scss";
import style from "./style.module.scss";

const InfoBox = () => {
  return (
    <Flex className={style.info_box} direction="column">
      <h2>
        Фото на <span>праздник</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit</span>,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Flex className={style.info_box_in} wrap="wrap" justify="space-between">
        <div>
          <img src={ImgOne} alt="img_one" />
          <p>Безлимитная печать фото</p>
        </div>
        <div>
          <img src={ImgTwo} alt="img_two" />
          <p>Фотореквизит в наличии</p>
        </div>
        <div>
          <img src={ImgThree} alt="img_three" />
          <p>Фотоотчет в электронном виде</p>
        </div>
        <div>
          <img src={ImgFour} alt="img_four" />
          <p>Цены ниже рынка</p>
        </div>
      </Flex>
    </Flex>
  );
};

export default InfoBox;
