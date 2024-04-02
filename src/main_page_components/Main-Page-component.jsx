import ProfileScreen from './Profile_components/Profile-component';
import ToolBarComponent_MainPage from './ToolBar_components/Toolbar';
import ListOfProjectsScreen from './List-Of-Projects-components/List-Of-Projects_component';
import './Main-Page-dark.css';
import PropTypes from 'prop-types';

function MainPageScreen({ user, projectlist, setProjectList }) {
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
          <ListOfProjectsScreen projectlist={projectlist} setProjectList={setProjectList} />
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
