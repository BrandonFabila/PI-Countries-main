import React, { useState } from 'react';
import './Nav.css';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as ActivityIcon } from '../extra/add.svg';
import { ReactComponent as HomeIcon } from '../extra/w1.svg';
import { ReactComponent as DelIcon } from '../extra/del.svg';
import { ReactComponent as AddIcon } from '../extra/chek.svg';

const Nav = () => {
    const [activeLink, setActiveLink] = useState(null);
    const location = useLocation();
  
    const styles = {
      width: '40px',
      height: '40px'
    };
  
    const handleLinkHover = (event, index) => {
      setActiveLink(index);
    };
  
    const handleLinkLeave = () => {
      setActiveLink(null);
    };
  
    // definir los links para la ruta /home
    const homeLinks = [
      {
        icon: <HomeIcon style={styles} />,
        text: 'Home'
      },
      {
        icon: <ActivityIcon style={styles} />,
        text: 'Create'
      }
    ];
  
    // definir los links para la ruta /create
    const createLinks = [
      {
        icon: <HomeIcon style={styles} />,
        text: 'Home'
      },
      {
        icon: <AddIcon style={styles} />,
        text: 'Add'
      },
      {
        icon: <DelIcon style={styles} />,
        text: 'Delete'
      }
    ];

    const detailLinks = [
        {
          icon: <HomeIcon style={styles} />,
          text: 'Home'
        }
    ];
  
    // determinar qué links mostrar según la ruta actual
    let linksToRender = [];
    if (location.pathname === '/home') {
      linksToRender = homeLinks;
    } else if (location.pathname === '/create') {
      linksToRender = createLinks;
    } else if (location.pathname === '/detail') {
        linksToRender = detailLinks
    }
  
    return (
      <>
        {linksToRender.map((link, index) => (
        <div>
          {activeLink === index && <span className='nav-lin'>{link.text}</span>}
          <nav className='nav' >
              <Link className='nav-link'
                key={index}
                to={`/${link.text.toLowerCase()}`}
                onMouseEnter={(event) => handleLinkHover(event, index)}
                onMouseLeave={handleLinkLeave}
              >
                <div className='conttext'>
                  <div className='icon-container' >
                  {link.icon}
                  </div>
                </div>
              </Link>
          </nav>
        </div>
        ))}
      </>
    );
  };
  
  export default Nav;