import { FaHome, FaUserAlt, FaEnvelope, FaTimes, FaBars } from 'react-icons/fa';
import './App.scss';

function App() {
  return (
    <>
      <div className="container">
        <div className="circle-container">
          <div className="circle">
            <button className="close">
              <FaTimes />
            </button>
            <button className="open">
              <FaBars />
            </button>
          </div>
        </div>
        <div className="content">
          <h1>Amazing Article</h1>
          <small>coffmanjrp</small>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum
            quod animi labore, at amet molestiae consequuntur dicta reiciendis
            magnam adipisci ipsum minima facilis porro officiis! Praesentium
            consequuntur, unde sint sequi doloribus, ex earum doloremque aut
            cupiditate facilis quo, perferendis vero laboriosam expedita minus
            aliquam odit dolorum aspernatur porro saepe placeat tenetur.
            Excepturi, architecto officia mollitia dolorem molestias consectetur
            aspernatur adipisci quos distinctio. Earum fugit impedit, labore
            cupiditate id nisi dolor quaerat, aspernatur nobis velit quibusdam
            esse modi suscipit vitae blanditiis in error molestiae voluptatibus
            tempora delectus temporibus rem rerum possimus. Sint voluptatum
            optio magnam similique mollitia quasi quae consequuntur?
          </p>
          <h3>My Dog</h3>
          <img
            src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&amp;fit=crop&amp;w=2100&amp;q=80"
            alt="doggy"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            perspiciatis quas suscipit mollitia culpa saepe eligendi quasi.
            Ducimus voluptatum minima error modi iusto quia, quo eveniet,
            doloribus ab voluptatem rerum ad, impedit voluptate illo eaque eius
            accusamus veniam possimus eum ea ipsa laborum dolorem dolor iure?
            Esse ipsam illo voluptate, aperiam aut modi maxime qui perspiciatis
            expedita eos commodi quia cupiditate natus. Et, consequatur minus
            qui voluptate facilis nihil eius laudantium harum dicta blanditiis
            exercitationem!
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#!">
              <FaHome />
              Home
            </a>
          </li>
          <li>
            <a href="#!">
              <FaUserAlt />
              About
            </a>
          </li>
          <li>
            <a href="#!">
              <FaEnvelope />
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
