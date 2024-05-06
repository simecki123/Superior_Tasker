import ProjectDetailsTaskListScreen from "./CheckProjectComponents/Project-details-task-list";
import NewProjectComponent from "./CreateNewProjectPage/New-Project-component";
import EditProfileScreen from "./Edit_profile_components/EditProfileScreen";
import LoginScreen from "./login_components/Login"
import MainPageScreen from "./main_page_components/Main-Page-component";
import RegisterScreen from "./register_components/register";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  

  

  return (
    <Router>
      <Routes>
        <Route path="/projectdetails" element={<ProjectDetailsTaskListScreen />} />
        <Route path="/editprofile" element={<EditProfileScreen />} />
        <Route path="/newproject" element={<NewProjectComponent />} />
        <Route path="/mainpage" element={<MainPageScreen />} />
        <Route path="/" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
    </Router>
  )
}

export default App;
