import Button from "../ui-kit/Buttons/Button";
import styles from "./Contacts.module.scss";
import { getResponseCookies } from "@/helpers/responseVacancy";
import { formatPhone } from "@/helpers/formatPhone";
const Contacts = ({ vacancy }) => {
  const contact = (type) =>
    vacancy.contacts?.filter((el) => el.type === type)[0].contact;

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
          <h2 className={styles.title_name}>
            {getResponseCookies("last_name")} {getResponseCookies("first_name")}{" "}
            {getResponseCookies("middle_name")}
          </h2>
          <h2 className={styles.title}>{vacancy?.name}</h2>
          <div className={styles.contacts_container}>
            <h6 className={styles.title_contacts}>Контакты работодателя</h6>
            <div className={styles.contacts_name}>
              <h4 className={styles.title}>{vacancy.contact_name}</h4>
              <h5 className={styles.title}>{vacancy.contact_position}</h5>
            </div>
            <div className={styles.contacts}>
              {contact("phone") && (
                <div className={styles.contact}>
                  <div className={styles.icon_phone}></div>
                  {/* <object url(../../assets/icons/check.svg);
                    type="image/svg+xml"
                    data="/src/assets/icons/phone.svg"
                    width="16"
                    height="16"
                  ></object> */}
                  <a href={`tel:${contact("phone")}`}>
                    {formatPhone(contact("phone"))}
                  </a>
                </div>
              )}
              {contact("email") && (
                <div className={styles.contact}>
                  <div className={styles.icon_email}></div>
                  {/* <object
                    type="image/svg+xml"
                    data="/src/assets/icons/email.svg"
                    width="16"
                    height="16"
                  ></object> */}
                  <a href={`mailto:${contact("email")}`}>{contact("email")}</a>
                </div>
              )}
              {contact("telegram") && (
                <div className={styles.contact}>
                  <div className={styles.icon_telegram}></div>
                  {/* <object
                    type="image/svg+xml"
                    data="/src/assets/icons/telegram.svg"
                    width="16"
                    height="16"
                  ></object> */}
                  <a href={`https://t.me/${contact("telegram")}`}>
                    {contact("telegram")}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
