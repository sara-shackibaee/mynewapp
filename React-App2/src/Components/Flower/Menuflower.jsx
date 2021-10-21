import React from 'react'
import { Dropdown } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import menudatalist from './Menuflowerdata';
import {
       Link, 
  } from "react-router-dom";
function Menuflower() {
    // const NavLink = <Dropdown.Item  />;
    return (
        <Dropdown title="Flowers" >
            {menudatalist.map((menuitem)=>{return(

            
                <Dropdown.Item ><Link  to={menuitem.path}>{menuitem.title}</Link></Dropdown.Item>

            
                

                   
                    
            )})}
           
           
        </Dropdown>
       
        
    )
}

export default Menuflower;
