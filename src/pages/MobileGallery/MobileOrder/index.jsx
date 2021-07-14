import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import img22 from "../../../assets/images/img22.png";
import Flex from "../../../components/atoms/Flex";
import style from "./style.module.scss";

const MobileOrder = (props) => {
  return (
    <div className={style.mobile_order}>
      <div>
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className={style.swiper_one}
        >
          <SwiperSlide>
            <img src={img22} alt="PhotoBoothsImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img22} alt="PhotoBoothsImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img22} alt="PhotoBoothsImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img22} alt="PhotoBoothsImg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img22} alt="PhotoBoothsImg" />
          </SwiperSlide>
        </Swiper>
        <Flex direction="column" className={style.info}>
          <Flex align="center" justify="space-between">
            <h4>Фотобудка</h4>
            <p>20 Марта 2021</p>
          </Flex>
          <h3>Название события</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Flex>
        <span
          onClick={() => {
            props.toggle();
          }}
        >
          x
        </span>
      </div>
    </div>
  );
};

export default MobileOrder;
