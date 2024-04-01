import ListOfProjectsScreen from './List-Of-Projects-components/List-Of-Projects_component';
import ProfileScreen from './Profile_components/Profile-component';
import ToolBarComponent_MainPage from './ToolBar_components/Toolbar';
import './Main-Page-dark.css';


function MainPageScreen() {
    return (
      <div className='main-page'>
        <div className='tool-bar'>
          <ToolBarComponent_MainPage></ToolBarComponent_MainPage>
        </div>
        <div className='main-part'>
          <div className='profile-part'>
              <ProfileScreen></ProfileScreen>
          </div>
          <div className='listOfProjects'> 
              <ListOfProjectsScreen></ListOfProjectsScreen>
          </div>
        </div>
      </div>
    );
  }
  

export default MainPageScreen;

