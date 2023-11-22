import MenuItemComponent from './MenuItemComponent';
import React from "react";
import { data } from "../helpers/data";
import '../styles/menu.css';

export const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {data.map((menuItem,key)=>{
            return(
                <MenuItemComponent
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                content={menuItem.content}
                price={menuItem.price}
                
                />
            );
        })}

      </div>
    </div>
  );
};
export default Menu;
