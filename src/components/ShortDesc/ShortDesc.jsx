import Button from "@/components/ui-kit/Buttons/Button";

import styles from "./ShortDesc.module.scss";
import { createContext } from "react";
import Modal from "../ui-kit/Modal/Modal";
import ResponseForm from "../ResponseForm/ResponseForm";
export const FormContext = createContext(null);

const ShortDesc = ({ vacancy, isModal, setIsModal }) => {
  const handleClick = () => {
    setIsModal(true);
  };

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card_left}>
          <div className={styles.img_wrapper}>
            {vacancy && vacancy.pic_main && (
              <img src={vacancy.pic_main} alt="Logo" width="200" height="200" />
            )}
          </div>
          <h3 className={styles.subtitle}>{vacancy?.company_name}</h3>
        </div>
        <hr className={styles.devider} />
        <div className={styles.card_right}>
          <div className={styles.main_content}>
            <div className={styles.tags}>
              <h6 className={styles.tag}>Новая вакансия</h6>
              <h6 className={styles.tag}>Полный рабочий день</h6>
              <h6 className={styles.tag}>Опыт от 2х лет</h6>
            </div>
            <h2 className={styles.title}>{vacancy?.name}</h2>
            <div className={styles.salaries}>
              {vacancy?.salary_from && (
                <h3 className={styles.salary}>от {vacancy?.salary_from/1000} 000 ₽ </h3>
              )}
              {vacancy?.salary_to && (
                <h3 className={styles.salary}>до {vacancy?.salary_to/1000} 000 ₽</h3>
              )}
            </div>
          </div>
          <Button
            value="Откликнуться"
            style="base"
            onClick={handleClick}
          ></Button>
        </div>
        <Modal visible={isModal} setVisible={setIsModal}>
          <ResponseForm vacancy={vacancy} setIsModal={setIsModal} />
        </Modal>
      </div>
    </section>
  );
};

export default ShortDesc;
