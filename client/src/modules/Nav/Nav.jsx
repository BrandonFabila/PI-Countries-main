import React, { useState } from 'react';
import './Nav.css';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ReactComponent as ActivityIcon } from '../extra/magazine.svg';
import { ReactComponent as HomeIcon } from '../extra/w1.svg';
import { ReactComponent as DelIcon } from '../extra/del.svg';
import { ReactComponent as AddIcon } from '../extra/chek.svg';

const Nav = () => {
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();

  const styles = {
    width: '50px',
    height: '50px'
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
  ];

  const detailLinks = [
    {
      icon: <HomeIcon style={styles} />,
      text: 'Home'
    }
  ]; 

  const addLinks = [
    {
      icon: <HomeIcon style={styles} />,
      text: 'Home'
    }
  ]

  // determinar qué links mostrar según la ruta actual
  let linksToRender = [];
  const { id } = useParams();

  if (location.pathname === '/home') {
    linksToRender = homeLinks;
  } else if (location.pathname === '/create') {
    linksToRender = createLinks;
  } else if (location.pathname === `/detail/${id}`) {
    linksToRender = detailLinks
  }  else if (location.pathname === '/add') {
    linksToRender = addLinks
  }

  return (
    <nav className='nav' >
      {linksToRender.map((link, index) => (
        <Link
          key={index}
          to={`/${link.text.toLowerCase()}`}
          onMouseEnter={(event) => handleLinkHover(event, index)}
          onMouseLeave={handleLinkLeave}
        >
          <div className='conttext'>
            {activeLink === index && <span className='texto'>{link.text}</span>}
            {link.icon}
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
