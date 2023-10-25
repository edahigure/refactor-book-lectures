import './Nav.css';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../redux/user/userReducer';
import { setDataUser } from '../redux/user/dataUserSlice';


const Nav = () => {

  const dispatch = useDispatch();
  const { status } = useSelector((store) => store.currentUser);

  useEffect(() => {
    if (status === 'no user') {
      const getUser = async () => {
        const url = 'http://localhost:3000/api/v1/users';
        return new Promise((resolve, reject) => {
          fetch(url)
            .then((res) => res.json())
            .then((user) => {
              dispatch(setCurrentUser(user.id));
              dispatch(setDataUser(user));
              resolve(user);
            }).catch((err) => {
              reject(err);
            });
        });
      };
      getUser();
    }
  }, [status, dispatch]);

  return (
    <div className="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-light d-flex sticky-top">
      <div className="white d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
        <div className="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-5">
            <img src="/images/planet_desktop.jpg" alt="planet" className="logo" />
            {' '}
          </span>
        </div>
        <ul className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
          <li className="nav-item">
            <NavLink
              id="hide-1"
              to="/lectures"
              className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
            >
              LECTURES
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              id="hide-1"
              to="/reservations"
              className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
            >
              RESERVATIONS
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              id="hide-1"
              to="/add_lecture"
              className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
            >
              ADD LECTURE
            </NavLink>
          </li>
          
        </ul>
        <div className="social-group">
          <ul>
            <li className="social">
              <a href="https://twitter.com/edahigure">
                <img src="/images/twitter.png" alt="twitter icon" />
              </a>
            </li>
            <li className="social">
              <a href="https://www.facebook.com/profile.php?id=61551901379880&is_tour_dismissed=true">
                <img src="/images/facebook.png" alt="facebook icon" />
              </a>
            </li>

            <li className="social">
              <a
                href="https://www.flaticon.com/free-icons/google-plus"
                title="google plus icons"
              >
                <img src="/images/google-plus-logo.png" alt="google icon" />
              </a>
            </li>

            <li className="social">
              <a
                href="https://www.flaticon.es/iconos-gratis/letra-v"
                title="letra v iconos"
              >
                <img src="/images/vimeo.png" alt="vimeo icon" />
              </a>
            </li>

            <li className="social">
              <a
                href="https://www.flaticon.es/iconos-gratis/letra-v"
                title="letra v iconos"
              >
                <img src="/images/social.png" alt="pinterest icon" />
              </a>
            </li>
          </ul>
          <footer className="row bg-light py-4 mt-auto">
            <div className="col">
              <p className="tiny">
                {' '}
                {`${String.fromCodePoint(0x00a9)}`}
                {' '}
                2023 Aprendes inc.
                {' '}
              </p>
            </div>
          </footer>
        </div>

        <div className="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
          <div className=" d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="/images/Hamburger.png" alt="HamburgerImg" width="60" height="60" />
          </div>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">

            <li className="dropdown-item">
              <NavLink
                to="/lectures"
              >
                LECTURES
              </NavLink>
            </li>

            <li className="dropdown-item">
              <NavLink
                to="/reserve"
              >
                RESERVE FORM
              </NavLink>
            </li>

            <li className="dropdown-item">
              <NavLink
                to="/my-reservations"
              >
                RESERVATIONS
              </NavLink>
            </li>

            <li className="dropdown-item">
              <NavLink
                to="/add_lecture"
              >
                ADD LECTURE
              </NavLink>
            </li>

            <li className="dropdown-item">
              <NavLink
                to="/delete_lecture"
              >
                DELETE LECTURE
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
