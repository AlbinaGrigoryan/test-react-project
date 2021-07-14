import { useState } from "react";
import Flex from "../../../components/atoms/Flex";
import PhotoBoothsImg from "../../../assets/images/photo_booths_img.png";
import Select from "react-select";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import style from "./style.module.scss";
import MobileSection from "../MobileSection";

const options = [
  { value: "По умолчанию", label: "По умолчанию" },
  { value: "По умолчанию2", label: "По умолчанию2" },
  { value: "По умолчанию3", label: "По умолчанию3" },
];

const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "inherit",
    width: "170px ",
    padding: "0",
    marginLeft: "5px",
    minHeight: "0",
    border: "none",
    outline: "none",
    fontFamily: "Work_sans",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#939598",
  }),
  option: (styles) => ({
    ...styles,
    padding: "0",
  }),
  input: (styles) => ({ ...styles, padding: "0" }),
  placeholder: (styles) => ({ ...styles, padding: "0" }),
  singleValue: (styles, { data }) => ({ ...styles, padding: "0" }),
  indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
  indicatorContainer: (styles) => ({ ...styles, padding: "0" }),
};

const PhotoBoots = () => {
  const [photo_booths_list, setphoto_booths_list] = useState([
    {
      name: "Фотобудка с ширмой",
      id: Math.random(),
      setting: [
        {
          name: "Разработка макета рамки 1",
          id: Math.random(),
          price: 17500,
          checked: true,
        },
        {
          name: "Разработка макета рамки 2",
          id: Math.random(),
          price: 17600,
          checked: false,
        },
        {
          name: "Разработка макета рамки 3",
          price: 17700,
          id: Math.random(),
          checked: false,
        },
        {
          name: "Разработка макета рамки 4",
          id: Math.random(),
          price: 17800,
          checked: false,
        },
        {
          name: "Разработка макета рамки 5",
          id: Math.random(),
          price: 17900,
          checked: false,
        },
        {
          name: "Разработка макета рамки 6",
          price: 18000,
          id: Math.random(),
          checked: false,
        },
        {
          name: "Разработка макета рамки 7",
          id: Math.random(),
          price: 18100,
          checked: false,
        },
        {
          name: "Разработка макета рамки 8",
          id: Math.random(),
          price: 18200,
          checked: false,
        },
        {
          name: "Разработка макета рамки 9",
          price: 18300,
          id: Math.random(),
          checked: false,
        },
        {
          name: "Разработка макета рамки 10",
          id: Math.random(),
          price: 18400,
          checked: false,
        },
        {
          name: "Разработка макета рамки 11",
          id: Math.random(),
          price: 18500,
          checked: false,
        },
        {
          name: "Разработка макета рамки 12",
          price: 18600,
          id: Math.random(),
          checked: false,
        },
        {
          name: "Разработка макета рамки 13",
          id: Math.random(),
          price: 18700,
          checked: false,
        },
        {
          name: "Разработка макета рамки 14",
          id: Math.random(),
          price: 18800,
          checked: false,
        },
        {
          name: "Разработка макета рамки 15",
          price: 18900,
          id: Math.random(),
          checked: false,
        },
        {
          name: "Разработка макета рамки 16",
          id: Math.random(),
          price: 19000,
          checked: false,
        },
        {
          name: "Разработка макета рамки 17",
          id: Math.random(),
          price: 19100,
          checked: false,
        },
        {
          name: "Разработка макета рамки 18",
          price: 19200,
          id: Math.random(),
          checked: false,
        },
        {
          name: "Разработка макета рамки 19",
          id: Math.random(),
          price: 19300,
          checked: false,
        },
        {
          name: "Разработка макета рамки 20",
          price: 19400,
          id: Math.random(),
          checked: false,
        },
      ],
    },
    {
      name: "Фотобудка с ширмой",
      id: Math.random(),
      setting: [
        {
          name: "Разработка макета рамки 1",
          id: Math.random(),
          price: 17500,
          checked: true,
        },
        {
          name: "Разработка макета рамки 2",
          id: Math.random(),
          price: 17600,
          checked: false,
        },
        {
          name: "Разработка макета рамки 3",
          price: 17700,
          id: Math.random(),
          checked: false,
        },
        {
          name: "Разработка макета рамки 4",
          id: Math.random(),
          price: 17800,
          checked: false,
        },
        {
          name: "Разработка макета рамки 5",
          id: Math.random(),
          price: 17900,
          checked: false,
        },
        {
          name: "Разработка макета рамки 6",
          price: 18000,
          id: Math.random(),
          checked: false,
        },
        {
          name: "Разработка макета рамки 7",
          id: Math.random(),
          price: 18100,
          checked: false,
        },
        {
          name: "Разработка макета рамки 8",
          id: Math.random(),
          price: 18200,
          checked: false,
        },
        {
          name: "Разработка макета рамки 9",
          price: 18300,
          id: Math.random(),
          checked: false,
        },
        {
          name: "Разработка макета рамки 10",
          id: Math.random(),
          price: 18400,
          checked: false,
        },
        {
          name: "Разработка макета рамки 11",
          id: Math.random(),
          price: 18500,
          checked: false,
        },
        {
          name: "Разработка макета рамки 12",
          price: 18600,
          id: Math.random(),
          checked: false,
        },
        {
          name: "Разработка макета рамки 13",
          id: Math.random(),
          price: 18700,
          checked: false,
        },
        {
          name: "Разработка макета рамки 14",
          id: Math.random(),
          price: 18800,
          checked: false,
        },
        {
          name: "Разработка макета рамки 15",
          price: 18900,
          id: Math.random(),
          checked: false,
        },
        {
          name: "Разработка макета рамки 16",
          id: Math.random(),
          price: 19000,
          checked: false,
        },
        {
          name: "Разработка макета рамки 17",
          id: Math.random(),
          price: 19100,
          checked: false,
        },
        {
          name: "Разработка макета рамки 18",
          price: 19200,
          id: Math.random(),
          checked: false,
        },
        {
          name: "Разработка макета рамки 19",
          id: Math.random(),
          price: 19300,
          checked: false,
        },
        {
          name: "Разработка макета рамки 20",
          price: 19400,
          id: Math.random(),
          checked: false,
        },
      ],
    },
    {
      name: "Фотобудка с ширмой",
      id: Math.random(),
      setting: [
        {
          name: "Разработка макета рамки 1",
          id: Math.random(),
          price: 17500,
          checked: true,
        },
        {
          name: "Разработка макета рамки 2",
          id: Math.random(),
          price: 17600,
          checked: false,
        },
        {
          name: "Разработка макета рамки 3",
          price: 17700,
          id: Math.random(),
          checked: false,
        },
        {
          name: "Разработка макета рамки 4",
          id: Math.random(),
          price: 17800,
          checked: false,
        },
        {
          name: "Разработка макета рамки 5",
          id: Math.random(),
          price: 17900,
          checked: false,
        },
        {
          name: "Разработка макета рамки 6",
          price: 18000,
          id: Math.random(),
          checked: false,
        },
        {
          name: "Разработка макета рамки 7",
          id: Math.random(),
          price: 18100,
          checked: false,
        },
        {
          name: "Разработка макета рамки 8",
          id: Math.random(),
          price: 18200,
          checked: false,
        },
        {
          name: "Разработка макета рамки 9",
          price: 18300,
          id: Math.random(),
          checked: false,
        },
        {
          name: "Разработка макета рамки 10",
          id: Math.random(),
          price: 18400,
          checked: false,
        },
        {
          name: "Разработка макета рамки 11",
          id: Math.random(),
          price: 18500,
          checked: false,
        },
        {
          name: "Разработка макета рамки 12",
          price: 18600,
          id: Math.random(),
          checked: false,
        },
        {
          name: "Разработка макета рамки 13",
          id: Math.random(),
          price: 18700,
          checked: false,
        },
        {
          name: "Разработка макета рамки 14",
          id: Math.random(),
          price: 18800,
          checked: false,
        },
        {
          name: "Разработка макета рамки 15",
          price: 18900,
          id: Math.random(),
          checked: false,
        },
        {
          name: "Разработка макета рамки 16",
          id: Math.random(),
          price: 19000,
          checked: false,
        },
        {
          name: "Разработка макета рамки 17",
          id: Math.random(),
          price: 19100,
          checked: false,
        },
        {
          name: "Разработка макета рамки 18",
          price: 19200,
          id: Math.random(),
          checked: false,
        },
        {
          name: "Разработка макета рамки 19",
          id: Math.random(),
          price: 19300,
          checked: false,
        },
        {
          name: "Разработка макета рамки 20",
          price: 19400,
          id: Math.random(),
          checked: false,
        },
      ],
    },
  ]);

  const handler = (e) => {
    const copyPhoto_booths_list = [...photo_booths_list];
    copyPhoto_booths_list.forEach((item) => {
      item.setting.forEach((el) => {
        if (el.id === Number(e.target.id)) {
          el.checked = true;
        }
      });
    });
    setphoto_booths_list([...copyPhoto_booths_list]);
  };

  const FilterArr = [...photo_booths_list];
  const priceArr = [];
  FilterArr.forEach((item, i) => {
    let price = 0;
    item.setting.forEach((el) => {
      if (el.checked) {
        price += el.price;
        priceArr[i] = price;
      }
    });
  });

  const [MobileSectionToggle, setMobileSectionToggle] = useState(false);

  return (
    <>
      <Flex direction="column" className={style.photo_booths}>
        <h3>Фотобудки</h3>
        <Flex align="center">
          <p>Сортровка:</p>
          <Select
            options={options}
            styles={colourStyles}
            defaultValue={{ label: "По умолчанию", value: 0 }}
          />
        </Flex>
        {photo_booths_list.map((el, i) => {
          return (
            <Flex
              key={el.id}
              className={style.photo_booths_box}
              direction="column"
            >
              <Swiper
                spaceBetween={16}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className={style.swiper_one}
              >
                <SwiperSlide>
                  <img src={PhotoBoothsImg} alt="PhotoBoothsImg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={PhotoBoothsImg} alt="PhotoBoothsImg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={PhotoBoothsImg} alt="PhotoBoothsImg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={PhotoBoothsImg} alt="PhotoBoothsImg" />
                </SwiperSlide>
              </Swiper>
              <Flex direction="column" className={style.setting}>
                <h3>{el.name}</h3>
                <Flex className={style.setting_size}>
                  <p>Размер:</p>
                  <p>2м x 1.5м x 2 м</p>
                </Flex>
                <Flex className={style.setting_box} direction="column">
                  <p>Доп. опции</p>
                  <Flex direction="column">
                    {el.setting.map((item) => {
                      return (
                        <Flex key={item.id} className={style.setting_overflow}>
                          <Flex align="center">
                            <img src={PhotoBoothsImg} alt="PhotoBoothsImg" />
                            <Flex direction="column">
                              <h4>{item.name}</h4>
                              <p>от {item.price} ₽</p>
                            </Flex>
                            <input
                              type="checkbox"
                              checked={item.checked}
                              onChange={handler}
                              id={item.id}
                            />
                          </Flex>
                        </Flex>
                      );
                    })}
                  </Flex>
                </Flex>
                <Flex direction="column" className={style.setting_time}>
                  <p>Укажите время аренды</p>
                  <Flex>
                    <p>1 час</p>
                    <p>2 часа</p>
                    <p>3 часа</p>
                    <p>5 часов</p>
                    <p>выставка 2 дня</p>
                    <p>выставка 3 дня</p>
                  </Flex>
                </Flex>
                <hr />
                <Flex className={style.price}>
                  <p>{priceArr[i]}₽</p>
                  <p
                    onClick={() => {
                      setMobileSectionToggle(!MobileSectionToggle);
                    }}
                  >
                    Оставить заявку
                  </p>
                </Flex>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      {MobileSectionToggle && (
        <MobileSection
          toggle={() => {
            setMobileSectionToggle(!MobileSectionToggle);
          }}
        />
      )}
    </>
  );
};

export default PhotoBoots;
