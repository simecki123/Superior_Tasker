import ProfileScreen from './Profile_components/Profile-component';
import ToolBarComponent_MainPage from './ToolBar_components/Toolbar';
import ListOfProjectsScreen from './List-Of-Projects-components/List-Of-Projects_component';
import './Main-Page-dark.css';
import PropTypes from 'prop-types';
import profilePic from '../assets/logo.png';
import React, { useState } from 'react';


function MainPageScreen() {

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
    <div className='main-page'>
      <div className='tool-bar'>
        <ToolBarComponent_MainPage user={user} />
      </div>
      <div className='main-part'>
        <div className='profile-part'>
          <ProfileScreen user={user} />
        </div>
        <div className='listOfProjects'> 
          <ListOfProjectsScreen  projectlist={projectlist} setProjectList={setProjectList} />
        </div>
      </div> 
    </div>
  );
}

MainPageScreen.propTypes = {
  user: PropTypes.object.isRequired,
  projectlist: PropTypes.array.isRequired,
  setProjectList: PropTypes.func.isRequired,
};

export default MainPageScreen;
