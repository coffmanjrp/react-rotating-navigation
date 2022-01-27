import { useState } from 'react';
import { FaBars, FaEnvelope, FaHome, FaTimes, FaUserAlt } from 'react-icons/fa';
import Icon from './components/Icon';
import './App.scss';

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div className={`container${showNav ? ' show-nav' : ''}`}>
        <div className="circle-container">
          <div className="circle">
            <button className="close" onClick={() => setShowNav(false)}>
              <Icon icon={<FaTimes />} />
            </button>
            <button className="open" onClick={() => setShowNav(true)}>
              <Icon icon={<FaBars />} />
            </button>
          </div>
        </div>
        <div className="content">
          <h1>Some Article</h1>
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
          <h3>About My Dog</h3>
          <img
            src="https://images.unsplash.com/photo-1600077106724-946750eeaf3c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80"
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
              <Icon icon={<FaHome />} className="icon" />
              Home
            </a>
          </li>
          <li>
            <a href="#!">
              <Icon icon={<FaUserAlt />} className="icon" />
              About
            </a>
          </li>
          <li>
            <a href="#!">
              <Icon icon={<FaEnvelope />} className="icon" />
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
