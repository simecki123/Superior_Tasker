import { Link } from 'react-router-dom';
import { useState } from 'react'; // Import useState hook
import './List-Of-Projects-dark.css';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

function ListOfProjectsScreen({ projectlist, setProjectList }) {
  // For setting search term.
  const [searchTerm, setSearchTerm] = useState('');

  // Function for delete button to delete one project.
  const deleteProject = (projectId) => {
    setProjectList(prevList => prevList.filter(project => project.id !== projectId));
  };

  // Function for moving project up on the list.
  const moveProjectUp = (projectId) => {
    const index = projectlist.findIndex(project => project.id === projectId);
    if (index > 0) {
      const newList = [...projectlist];
      const temp = newList[index];
      newList[index] = newList[index - 1];
      newList[index - 1] = temp;
      setProjectList(newList);
    }
  };

  // Function for moving project down on the list.
  const moveProjectDown = (projectId) => {
    const index = projectlist.findIndex(project => project.id === projectId);
    if (index < projectlist.length - 1) {
      const newList = [...projectlist];
      const temp = newList[index];
      newList[index] = newList[index + 1];
      newList[index + 1] = temp;
      setProjectList(newList);
    }
  };

  // Function for button to sort projects Alphabetically.
  const sortAlphabetically = () => {
    const sortedList = [...projectlist].sort((a, b) => a.title.localeCompare(b.title));
    setProjectList(sortedList);
  };

  // Function for button to sort projects by date.
  const sortByDate = () => {
    const sortedList = [...projectlist].sort((a, b) => new Date(a.date) - new Date(b.date));
    setProjectList(sortedList);
  };

  // Function for button to sort projects by completion.
  const sortByCompletion = () => {
    const sortedList = [...projectlist].sort((a, b) => parseFloat(b.completion) - parseFloat(a.completion));
    setProjectList(sortedList);
  };

  // Function for handling searchbar and search button.
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTermLowerCase = searchTerm.toLowerCase();
    const updatedList = projectlist.filter(project => project.title.toLowerCase().includes(searchTermLowerCase));
    setProjectList(updatedList.concat(projectlist.filter(project => !project.title.toLowerCase().includes(searchTermLowerCase))));
  };

  return (
    <div className='project-part'>
      <div className="topnav">
        <div className="search-container">
          <form className='searchForm' onSubmit={handleSearch}>
            <input className='search-bar' type="text" placeholder="Search.." name="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button className='submit-button' type="submit">
              <i className="fa fa-search">🔍</i>
            </button>
          </form>
        </div>

        <div className="dropdown">
          <button className="dropdown-btn">
            Search By <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <span onClick={sortAlphabetically}>
              Alphabetical
            </span>
            <span onClick={sortByDate}>Date</span>
            <span onClick={sortByCompletion}>
              Completion
            </span>
          </div>
        </div>

        <Link to={"/newproject"}>
          <button className="create-new-project">New Project</button>
        </Link>
      </div>
      <hr />

      <div>
        <ol>
          {projectlist.map(project => (
            <li key={project.id}>
              <Link to={"/projectdetails"}>
                <span className="text">{project.title}</span>
                <span className='completion'>{project.completion}</span>
              </Link>
              <div>
                <button className="delete-button" onClick={() => deleteProject(project.id)}>Delete</button>
                <button className="move-button" onClick={() => moveProjectUp(project.id)}>☝</button>
                <button className="move-button" onClick={() => moveProjectDown(project.id)}>👇</button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

ListOfProjectsScreen.propTypes = {
  projectlist: PropTypes.array.isRequired, // Validate projectlist prop as an array and required
  setProjectList: PropTypes.func.isRequired, // Validate setProjectList prop as a function and required
};

export default ListOfProjectsScreen;
