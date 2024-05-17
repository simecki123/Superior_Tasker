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
    <div className='project-part-container'>
      <div className="project-part-topnav">
        <div className="project-part-search-container">
          <form className="project-part-search-form" onSubmit={handleSearch}>
            <input className="project-part-search-bar" type="text" placeholder="Search.." name="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button className="project-part-submit-button" type="submit">
              <i className="fa-fa-search">🔍</i>
            </button>
          </form>
        </div>

        <div className="dropdown">
          <button className="project-part-dropdown-btn">
            Search By <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <span className='dropdown-content-project-part-span' onClick={sortAlphabetically}>
              Alphabetical
            </span>
            <span className='dropdown-content-project-part-span' onClick={sortByDate}>Date</span>
            <span className='dropdown-content-project-part-span' onClick={sortByCompletion}>
              Completion
            </span>
          </div>
        </div>

        <Link to={"/newproject"}>
          <button className="project-part-create-new-project-btn">New Project</button>
        </Link>
      </div>
      <hr className='project-part-break' />

      <div>
        <ol className='project-part-unordered-list'>
          {projectlist.map(project => (
            <li className='project-part-list' key={project.id}>
              <Link to={"/projectdetails"}>
                <span className="project-part-text">{project.title}</span>
                <span className='project-part-completion'>{project.completion}</span>
              </Link>
              <div>
                <button className="project-part-delete-button" onClick={() => deleteProject(project.id)}>Delete</button>
                <button className="project-part-move-button" onClick={() => moveProjectUp(project.id)}>☝</button>
                <button className="project-part-move-button" onClick={() => moveProjectDown(project.id)}>👇</button>
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
