import Flex from "../../../components/atoms/Flex";
import Call from "../../../assets/svgComponents/Call";
import Addres from "../../../assets/svgComponents/Addres";
import "swiper/swiper.scss";
import style from "./style.module.scss";

const Contact = () => {
  return (
    <Flex className={style.contact} direction="column">
      <p>Мы всегда достпну для вас</p>
      <h3>Контакты</h3>
      <Flex direction="column">
        <Flex className={style.contact_info}>
          <Flex>
            <Call />
          </Flex>
          <Flex direction="column">
            <h4>Телефон</h4>
            <p>+7 495 123 45 67</p>
          </Flex>
        </Flex>
        <Flex className={style.contact_info}>
          <Flex>
            <Addres />
          </Flex>
          <Flex direction="column">
            <h4>Адрес</h4>
            <p>
              109382, Москва, пр. Егорьевский, д.2а, стр.10 въезд на машине
              только с улицы Люблинская
            </p>
          </Flex>
        </Flex>
        <Flex className={style.contact_info}>
          <Flex></Flex>
          <Flex direction="column">
            <h4>Почта</h4>
            <p>Info@test.ru</p>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contact;
