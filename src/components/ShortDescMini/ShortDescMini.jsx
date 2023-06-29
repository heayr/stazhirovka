import Button from "@/components/ui-kit/Buttons/Button";

import styles from "./ShortDescMini.module.scss";
import Modal from "../ui-kit/Modal/Modal";
import ResponseForm from "../ResponseForm/ResponseForm";


const ShortDescMini = ({ vacancy, isIntersect, isModal, setIsModal }) => {
  const handleClick = () => {
    setIsModal(true);
  };

  return (
    <section className={styles.container}>
      <div className={isIntersect ? styles.card_mini : styles.card_mini_hide}>
          <div className={styles.img_wrapper}>
            {vacancy && vacancy.pic_main && (
              <img src={vacancy.pic_main} alt="Logo" width="100" height="100" />
            )}
        </div>
        <h3 className={styles.title}>{vacancy?.name}</h3>
        <div className={styles.card_right}>
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

export default ShortDescMini;
