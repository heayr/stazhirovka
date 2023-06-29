import { Routes, Route } from "react-router-dom";

import CreateVacancyForm from "@/components/CreateVacancyForm/CreateVacancyForm";
import Layout from "@/components/Layout/Layout";
import DescVacancyPage from "../pages/DescVacancyPage/DescVacancyPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import ResponsesListPage from "../pages/ResponsesListPage/ResponsesListPage";
import HomePage from "../pages/HomePage/HomePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vacancies/add" element={<CreateVacancyForm />} />
        <Route path="/vacancies/:id" element={<DescVacancyPage />} />
        <Route path="/contacts/:id" element={<ContactsPage />} />
        <Route
          path="/resposes/vacancy"
          element={<ResponsesListPage variant="vacancy" />}
        />
        <Route
          path="/resposes/candidate"
          element={<ResponsesListPage variant="candidate" />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
