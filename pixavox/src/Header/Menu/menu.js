import './menu.css'
import React from 'react';
import { slide as Menu } from 'react-burger-menu';

function SettingMenu () {
return (
<Menu right >
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        Salads
      </a>
      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>
      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
    )
};

export default SettingMenu;