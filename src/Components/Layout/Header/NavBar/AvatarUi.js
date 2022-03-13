import React from "react";

import { toast } from "react-toastify";
import { logout } from "../../../../store/authSlice";
import { openModal } from "../../../../store/modalSlice";

import avatar from "../../../../Assets/images/avatar.svg";
import { useDispatch, useSelector } from "react-redux";
import { IoPersonOutline } from "react-icons/io5";
import { Dropdown } from "react-bootstrap";

function AvatarUi() {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    setTimeout(() => {
      dispatch(logout());
      toast.info("logout successful!");
    }, [2000]);
  };
  return (
    <div className="navbar-tool ms-1 d-sm-flex">
      {!isLoggedIn ? (
        <a
          className="navbar-tool-icon-box "
          href="#!"
          onClick={() => dispatch(openModal("Login"))}
        >
          <IoPersonOutline /> <span className="fw-bold">Login</span>
        </a>
      ) : (
        <Dropdown className="avatar">
          <Dropdown.Toggle
            as="div"
            className="d-flex align-items-center justify-content-center"
          >
            <button className="btn btn-link p-0 navbar-tool-icon-box d-block rounded-circle">
              <img className="avatar-img" src={avatar} alt="avtar" />
            </button>
            {user.name.firstname || user.name.lastname !== undefined ? (
              <span className="avatar-name text-gray-500 fw-bold ms-2 d-none d-md-block">
                {user.name.firstname + " " + user.name.lastname}
              </span>
            ) : null}
          </Dropdown.Toggle>

          <Dropdown.Menu
            className="dropdown-menu-end shadow-sm rounded-1 border-0 w-50"
            style={{ minWidth: "15rem" }}
          >
            <Dropdown.Item href="#!">Profile</Dropdown.Item>
            <Dropdown.Item href="#!">Orders</Dropdown.Item>
            <Dropdown.Item href="#!">Favorites</Dropdown.Item>
            <Dropdown.Item href="#!">Settings</Dropdown.Item>
            <div className="dropdown-divider"></div>
            <Dropdown.Item href="#!" onClick={() => handleLogout()}>
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </div>
  );
}

export default AvatarUi;
