import React from 'react';
import "./Sidebar.scss";
import {Button} from '../../utils';
import { connect } from "react-redux";
import { auth_logout } from "../../redux/actions/auth-action";
import { NavLink, useOutletContext } from "react-router-dom";
import sidebarstaticdata from "../../static/static.json";

const Sidebar = (props) => {
  const [profiledata, isloading] = useOutletContext();

    const handleLogOut = () => {
        const isuseragreedtologout = window.confirm(
          "Are you sure you want to logout?"
        );
        if (isuseragreedtologout) {
          props.auth_logout("You logged out");
        }
      };
  return (
    <div className='sidebar'>
        <div className='sidebar__profile'>
            {profiledata ? (
            <div className='profile'>
                <div className='profile__avatar'>
                 {profiledata.name.slice(0, 1).toUpperCase()}
                </div>
               <div>
                    <h3>{profiledata.name}</h3>
                    {
                        profiledata.email.length > 15 ? (
                            <marquee>{profiledata.email}</marquee>
                        )
                        : (
                            <p>{profiledata.email}</p>
                        )
                    }
                </div>
               </div>
            ) : (
            <>{isloading ? <p>Loading...</p> : <p>Something went wrong</p>}</>
            )}
        </div>
        <div className='sidebar__menu'>
            <ul className='menu__list' >
                {sidebarstaticdata.sidebar.map((item) => (
                    <li className='list__item' key={item.id}>
                        <NavLink end className={({isActive}) => isActive ? "link link--active" : "link"} to={item.link}>{item.title}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
        <Button
            text={"Logout"}
            type={"button"}
            click={handleLogOut}
            isloading={false}
            appearence={"danger"}
      />
    </div>
  )
}

export default connect(null, { auth_logout }) (Sidebar)