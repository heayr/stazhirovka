import styles from "./FullDesc.module.scss";
import { useEffect, useState } from "react";

import { textDevider } from "@/helpers/formatText";

const FullDesc = ({ vacancy }) => {
  const [resp, setResp] = useState([]);
  const [req, setReq] = useState([]);
  const [conditions, setConditions] = useState([]);
  useEffect(() => {
    if (vacancy) {
      setResp(textDevider(vacancy.responsibilities));
      setReq(textDevider(vacancy.requirements[0].description));
      setConditions(textDevider(vacancy.conditions[0].other));
    }
  }, [vacancy]);

  return (
    <section className={styles.container}>
      <div>
        <h3 className={styles.title}>Обязанности</h3>
        <div className={styles.content}>
          <ul>
            {resp[0] &&
              resp.map((el) => (
                <li key={el}>
                  <h5 className={styles.text}>{el}</h5>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div>
        <h3 className={styles.title}>Требования</h3>
        <div className={styles.content}>
          <ul>
            {req &&
              req.map((el) => (
                <li key={el}>
                  <h5 className={styles.text}>{el}</h5>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div>
        <h3 className={styles.title}>Условия</h3>
        <div className={styles.content}>
          <ul>
            {conditions[0] &&
              conditions.map((el) => (
                <li key={el}>
                  <h5 className={styles.text}>{el}</h5>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FullDesc;
