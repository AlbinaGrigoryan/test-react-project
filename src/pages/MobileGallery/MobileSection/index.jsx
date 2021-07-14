import Flex from "../../../components/atoms/Flex";
import Select from "react-select";
import style from "./style.module.scss";

const MobileSection = (props) => {

  const options = [
    { value: "3 дня", label: "3 дня" },
    { value: "4 дня", label: "4 дня" },
    { value: "5 дня", label: "5 дня" },
  ];

  const call = [
    { value: "Позвоните мне", label: "Позвоните мне" },
  ];

  return (
    <div className={style.info_card}>
      <div className={style.info_card_in}>
        <h3>Ваша заявка</h3>
        <Flex justify='space-between'>
          <Flex className={style.info_size} direction='column'>
            <p>Фотобудка с ширмой</p>
            <Flex>
              <p>Размер:</p>
              <span>2м x 1.5м x 2 м</span>
              
            </Flex>
            <Select
              options={options}
              defaultValue={{ label: "3 дня", value: "3 дня" }}
            />
          </Flex>
          <p>17 500 ₽</p>
        </Flex>
        <Flex className={style.text}>
          <p>Разработка макета рамки</p>
          <span>17 500 ₽</span>
        </Flex>
        <Flex className={style.text}>
          <p>Разработка макета рамки</p>
          <span>17 500 ₽</span>
        </Flex>
        <hr />
        <Flex className={style.price}>
          <p>Итого:</p>
          <h4>17 500 ₽</h4>
        </Flex>
        <Flex className={style.call}>
          <p>+7 (000) 000 00 00</p>
          <Select
              options={call}
              defaultValue={{ label: "Позвоните мне", value: "Позвоните мне" }}
            />
        </Flex>
        <button className={style.btn}  onClick={() => {
          props.toggle();
        }}>Отправить заявку</button>
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

export default MobileSection;
