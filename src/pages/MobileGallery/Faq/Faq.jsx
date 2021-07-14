import { useState } from "react";
import Flex from "../../../components/atoms/Flex";
import style from "./style.module.scss";
import VectorTop from "../../../assets/images/VectorTop.png";
import VectorBottom from "../../../assets/images/VectorBottom.png";
import "swiper/swiper.scss";

const Faq = () => {
  const [faq_list, setfaq_list] = useState([
    {
      header: "Какой реквизит идет в комплекте?",
      show: false,
      text: "Какой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго",
      id: Math.random(),
    },
    {
      header: "Какой реквизит идет в комплекте?",
      show: false,
      text: "Какой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго",
      id: Math.random(),
    },
    {
      header: "Какой реквизит идет в комплекте?",
      show: false,
      text: "Какой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго",
      id: Math.random(),
    },
    {
      header: "Какой реквизит идет в комплекте?",
      show: false,
      text: "Какой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго",
      id: Math.random(),
    },
    {
      header: "Какой реквизит идет в комплекте?",
      show: false,
      text: "Какой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго",
      id: Math.random(),
    },
  ]);

  return (
    <Flex direction="column" className={style.faq}>
      <p>Почему выбирают нас?</p>
      <h3>FAQ</h3>

      {faq_list.map((el) => {
        return (
          <Flex key={el.id} direction="column">
            <Flex align="center" className={ el.show && style.active  } onClick={(e) => {}}>
              <p>{el.header}</p>
              {el.show ? (
                <img
                  id={el.id}
                  onClick={(e) => {
                    const copyfaq_list = [...faq_list];
                    copyfaq_list.forEach((item) => {
                      if (Number(e.target.id) === item.id) {
                        item.show = false;
                      }
                    });
                    setfaq_list([...copyfaq_list]);
                  }}
                  src={VectorTop}
                  alt="VectorTop"
                />
              ) : (
                <img
                  id={el.id}
                  src={VectorBottom}
                  alt="VectorBottom"
                  onClick={(e) => {
                    const copyfaq_list = [...faq_list];
                    copyfaq_list.forEach((item) => {
                      if (Number(e.target.id) === item.id) {
                        item.show = true;
                      }
                    });
                    setfaq_list([...copyfaq_list]);
                  }}
                />
              )}
            </Flex>
            {el.show && <p>{el.text}</p>}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Faq;
