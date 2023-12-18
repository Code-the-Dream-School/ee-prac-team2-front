import AboutPage from "@components/AboutPage/AboutPage";
import AccountCreationContainer from "@components/AccountCreation/AccountCreationContainer";
import AuthenticatedContent from "@components/AuthenticatedContent/AuthenticatedContent";
import GroupCreationContainer from "@components/Group/GroupCreationContainer";
import Footer from "@components/HomePage/Footer";
import HomePage from "@components/HomePage/HomePage";
import NavBar from "@components/HomePage/NavBar";
import ViewSingleEventContainer from "@components/ViewSingleEvent/ViewSingleEventContainer";
import ViewSingleGroup from "@components/ViewSingleGroup/ViewSingleGroup";
import ActivitiesListContainer from "@containers/ActivitiesContainer";
import EventContainer from "@containers/EventContainer";
import GroupContainer from "@containers/GroupContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activities" Component={ActivitiesListContainer} />
        <Route path="/signup" element={<AccountCreationContainer />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/account" element={<AuthenticatedContent />} />
        <Route path="/groups/:id" element={<ViewSingleGroup />} />
        <Route path="/events/:id" element={<ViewSingleEventContainer />} />
        {/*TODO needs real path with group id */}
        <Route path="/group" Component={GroupContainer} />
        {/* TODO needs real path with group and event ids */}
        <Route path="/event" Component={EventContainer} />
        {/* New route for group creation */}
        <Route path="/create-group" element={<GroupCreationContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
