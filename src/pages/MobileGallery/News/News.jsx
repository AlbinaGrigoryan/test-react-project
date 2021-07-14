import Flex from "../../../components/atoms/Flex";
import photoNews from "../../../assets/images/photo_news.png";
import "swiper/swiper.scss";
import { useState } from "react";
import MobileOrder from "../MobileOrder";
import style from "./style.module.scss";

const News = () => {
  const [NewsList, setNewsList] = useState([
    {
      topText: "Услуги",
      header: "Фотобудки, GIF стойка",
      show: true,
      text: "У нас есть широчайший ассортимент фотобудок на все случаи жизни",
      date: "20 Марта 2021",
      id: Math.random(),
    },
    {
      topText: "Услуги",
      header: "Фотобудки, GIF стойка",
      show: true,
      text: "У нас есть широчайший ассортимент фотобудок на все случаи жизни",
      date: "20 Марта 2021",
      id: Math.random(),
    },
    {
      topText: "Услуги",
      header: "Фотобудки, GIF стойка",
      show: true,
      text: "У нас есть широчайший ассортимент фотобудок на все случаи жизни",
      date: "20 Марта 2021",
      id: Math.random(),
    },
    {
      topText: "Услуги",
      header: "Фотобудки, GIF стойка",
      show: false,
      text: "У нас есть широчайший ассортимент фотобудок на все случаи жизни",
      date: "20 Марта 2021",
      id: Math.random(),
    },
    {
      topText: "Услуги",
      header: "Фотобудки, GIF стойка",
      show: false,
      text: "У нас есть широчайший ассортимент фотобудок на все случаи жизни",
      date: "20 Марта 2021",
      id: Math.random(),
    },
    {
      topText: "Услуги",
      header: "Фотобудки, GIF стойка",
      show: false,
      text: "У нас есть широчайший ассортимент фотобудок на все случаи жизни",
      date: "20 Марта 2021",
      id: Math.random(),
    },
    {
      topText: "Услуги",
      header: "Фотобудки, GIF стойка",
      show: false,
      text: "У нас есть широчайший ассортимент фотобудок на все случаи жизни",
      date: "20 Марта 2021",
      id: Math.random(),
    },
    {
      topText: "Услуги",
      header: "Фотобудки, GIF стойка",
      show: false,
      text: "У нас есть широчайший ассортимент фотобудок на все случаи жизни",
      date: "20 Марта 2021",
      id: Math.random(),
    },
    {
      topText: "Услуги",
      header: "Фотобудки, GIF стойка",
      show: false,
      text: "У нас есть широчайший ассортимент фотобудок на все случаи жизни",
      date: "20 Марта 2021",
      id: Math.random(),
    },
    {
      topText: "Услуги",
      header: "Фотобудки, GIF стойка",
      show: false,
      text: "У нас есть широчайший ассортимент фотобудок на все случаи жизни",
      date: "20 Марта 2021",
      id: Math.random(),
    },
    {
      topText: "Услуги",
      header: "Фотобудки, GIF стойка",
      show: false,
      text: "У нас есть широчайший ассортимент фотобудок на все случаи жизни",
      date: "20 Марта 2021",
      id: Math.random(),
    },
    {
      topText: "Услуги",
      header: "Фотобудки, GIF стойка",
      show: false,
      text: "У нас есть широчайший ассортимент фотобудок на все случаи жизни",
      date: "20 Марта 2021",
      id: Math.random(),
    },
    {
      topText: "Услуги",
      header: "Фотобудки, GIF стойка",
      show: false,
      text: "У нас есть широчайший ассортимент фотобудок на все случаи жизни",
      date: "20 Марта 2021",
      id: Math.random(),
    },
    {
      topText: "Услуги",
      header: "Фотобудки, GIF стойка",
      show: false,
      text: "У нас есть широчайший ассортимент фотобудок на все случаи жизни",
      date: "20 Марта 2021",
      id: Math.random(),
    },
    {
      topText: "Услуги",
      header: "Фотобудки, GIF стойка",
      show: false,
      text: "У нас есть широчайший ассортимент фотобудок на все случаи жизни",
      date: "20 Марта 2021",
      id: Math.random(),
    },
    {
      topText: "Услуги",
      header: "Фотобудки, GIF стойка",
      show: false,
      text: "У нас есть широчайший ассортимент фотобудок на все случаи жизни",
      date: "20 Марта 2021",
      id: Math.random(),
    },
    {
      topText: "Услуги",
      header: "Фотобудки, GIF стойка",
      show: false,
      text: "У нас есть широчайший ассортимент фотобудок на все случаи жизни",
      date: "20 Марта 2021",
      id: Math.random(),
    },
    {
      topText: "Услуги",
      header: "Фотобудки, GIF стойка",
      show: false,
      text: "У нас есть широчайший ассортимент фотобудок на все случаи жизни",
      date: "20 Марта 2021",
      id: Math.random(),
    },
    {
      topText: "Услуги",
      header: "Фотобудки, GIF стойка",
      show: false,
      text: "У нас есть широчайший ассортимент фотобудок на все случаи жизни",
      date: "20 Марта 2021",
      id: Math.random(),
    },
    {
      topText: "Услуги",
      header: "Фотобудки, GIF стойка",
      show: false,
      text: "У нас есть широчайший ассортимент фотобудок на все случаи жизни",
      date: "20 Марта 2021",
      id: Math.random(),
    },
  ]);
  const [MobileOrderToggle, setMobileOrderToggle] = useState(false);
  const FilterArr = NewsList.filter((el) => {
    return el.show;
  });
  const hanlder = () => {
    let cicleCount = 0;
    const copyToggleText = [...NewsList];
    for (let i = 0; i < copyToggleText.length; i++) {
      if (!copyToggleText[i].show) {
        copyToggleText[i].show = true;
        cicleCount++;
      }
      if (cicleCount === 3) break;
    }
    setNewsList([...copyToggleText]);
  };
  return (
    <>
      <Flex className={style.news} direction="column">
        <p>Почему выбирают нас?</p>
        <h3>Новости</h3>
        {FilterArr.map((el) => {
          return (
            <Flex
              key={el.id}
              className={style.news_in}
              direction="column"
              onClick={() => {
                setMobileOrderToggle(!MobileOrderToggle);
              }}
            >
              <img src={photoNews} alt="photoNews" />
              <Flex direction="column">
                <div></div>
                <span>{el.topText}</span>
                <h4>{el.header}</h4>
                <p>{el.text}</p>
                <p>{el.date}</p>
              </Flex>
            </Flex>
          );
        })}
        {FilterArr.length !== NewsList.length && (
          <p className={style.show_all} onClick={hanlder}>
            Показать еще
          </p>
        )}
      </Flex>
      {MobileOrderToggle && (
        <MobileOrder
          toggle={() => {
            setMobileOrderToggle(!MobileOrderToggle);
          }}
        />
      )}
    </>
  );
};

export default News;
