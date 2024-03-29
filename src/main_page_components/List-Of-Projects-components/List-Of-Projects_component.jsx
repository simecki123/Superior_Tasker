import { Link } from 'react-router-dom';
import './List-Of-Projects-dark.css';

function ListOfProjectsScreen() {
  return (
    <>
    <div className='project-part'>
      <div className="topnav">
        <div className="search-container">
          <form className='searchForm'>
            <input className='search-bar' type="text" placeholder="Search.." name="search" />
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
            <span >
              Alphabetical
            </span>
            <span >Date</span>
            <span >
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
          <li>
            <Link to={"/projectdetails"}>
              <span className="text">This is some task 10%</span>
            </Link>
                <div>
                    <button className="delete-button">Delete</button>

                    <button className="move-button">☝</button>
                    <button className="move-button">👇</button>
                </div>
          </li>
        </ol>
      </div>
      </div>
    </>
  );
}

export default ListOfProjectsScreen;
