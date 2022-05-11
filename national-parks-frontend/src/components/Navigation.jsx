import { Link } from 'react-router-dom'
import logo from '../logo/S.mp4'
import ReactPlayer from 'react-player'
import React, { useState, useEffect } from 'react';

function Navigation() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') { 
          if (window.scrollY > lastScrollY) { 
            setShow(true); 
          } else { 
            setShow(false);  
          }
          setLastScrollY(window.scrollY); 
        }
      };
    
      useEffect(() => {
        if (typeof window !== 'undefined') {
          window.addEventListener('scroll', controlNavbar);

          return () => {
            window.removeEventListener('scroll', controlNavbar);
          };
        }
      }, [lastScrollY]);

    return (
        <nav className={`active ${show && 'hidden'}`}>
            <Link to={`/`}>
                <ReactPlayer
                    url = {logo} 
                    playing = {true}
                    className = {'react-player'}
                    muted = {true}
                    playsinline = {true}
                    width = {"180px"}
                    height = {"180px"}
                />
            </Link>
        </nav>
    )
}

export default Navigation