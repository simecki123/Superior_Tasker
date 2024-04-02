import React, { useState } from 'react';
import ProjectDetailsTaskListScreen from "./CheckProjectComponents/Project-details-task-list";
import NewProjectComponent from "./CreateNewProjectPage/New-Project-component";
import EditProfileScreen from "./Edit_profile_components/EditProfileScreen";
import LoginScreen from "./login_components/Login"
import MainPageScreen from "./main_page_components/Main-Page-component";
import RegisterScreen from "./register_components/register";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import profilePic from '../src/assets/logo.png';

function App() {
  const user = {
    "id": "1",
    "firstName": "Sime",
    "lastName": "Roncevic",
    "email": "sroncevic19@gmail.com",
    "password": "KKZadar1945",
    "img": profilePic,
    "description": "Basic user"
  };

  const [projectlist, setProjectList] = useState([
    {"id": "1","userId": "1", "title": "Go to school", "description": "Go to school dude!", "date": "01-04-2024", "completion": "0%"},
    {"id": "2","userId": "1", "title": "Do your homework", "description": "Homework nooo!", "date": "04-04-2024", "completion": "20%"},
    {"id": "3","userId": "1", "title": "Excercise", "description": "Gym yea buddy", "date": "02-04-2024", "completion": "50%"},
    {"id": "4","userId": "1", "title": "Clean room", "description": "Clean your room dude", "date": "03-04-2024", "completion": "80%"}
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/projectdetails" element={<ProjectDetailsTaskListScreen />} />
        <Route path="/editprofile" element={<EditProfileScreen />} />
        <Route path="/newproject" element={<NewProjectComponent />} />
        <Route path="/mainpage" element={<MainPageScreen user={user} projectlist={projectlist} setProjectList={setProjectList} />} />
        <Route path="/" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
    </Router>
  )
}

export default App;
