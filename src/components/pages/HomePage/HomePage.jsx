import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section>
      <ul>
        <li>
          <Link to="/vacancies/add">Создать вакансию</Link>
        </li>
        <li>
          <Link to="/resposes/vacancy">Поиск откликов по вакансии</Link>
        </li>
        <li>
          <Link to="/resposes/candidate">Поиск откликов по кандидату</Link>
        </li>
      </ul>
    </section>
  );
};

export default HomePage;
