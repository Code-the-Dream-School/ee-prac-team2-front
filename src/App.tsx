import AboutPage from "@components/AboutPage/AboutPage";
import AccountCreationContainer from "@components/AccountCreation/AccountCreationContainer";
import AddEventToGroupForm from "@components/AddEventToGroupForm/AddEventToGroupForm";
import AuthenticatedContent from "@components/AuthenticatedContent/AuthenticatedContent";
import GroupCreationContainer from "@components/Group/GroupCreationContainer";
import Footer from "@components/HomePage/Footer";
import HomePage from "@components/HomePage/HomePage";
import NavBar from "@components/HomePage/NavBar";
import ActivitiesListContainer from "@containers/ActivitiesContainer";
import EventContainer from "@containers/EventContainer";
import GroupContainer from "@containers/GroupContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/account" Component={AuthenticatedContent} />
        <Route path="/activities" Component={ActivitiesListContainer} />
        <Route path="/create-group" Component={GroupCreationContainer} />
        <Route path="/events" Component={AddEventToGroupForm} />
        <Route path="/events/:id" Component={EventContainer} />
        <Route path="/group" Component={GroupContainer} />
        <Route path="/groups/:id" Component={GroupContainer} />
        <Route path="/signup" Component={AccountCreationContainer} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
