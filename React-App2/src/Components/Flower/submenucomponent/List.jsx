

import React from 'react'
import Table from 'react-bootstrap/Table'
import {tableheader}  from './Listflowerdata'
import {flowerslist} from './Listflowerdata'
// import { Icon } from 'rsuite';
// import Addtotableform from '../addtotable/Addtotableform'
// import  {datanahaee}  from '../addtotable/Gelobaldata.jsx'
import { useRecoilState } from 'recoil'
// import Add from '../submenucomponent/Add.jsx'
import { Icon } from 'rsuite';
import HandelIconclick from '../submenucomponent/HandelIconclick'
export default function List() {

    const [flowerslist1 , setflowerslist] = useRecoilState(flowerslist)
    
   
    return (
        <div>
            <div>
                <Table responsive >
                    <thead >
                            <tr >
                                    {tableheader.map((header)=>{return(<th >{header}</th>)})}
                            </tr>  
                                    
                                
                    </thead>
                    <tbody >
                            { flowerslist1.map((flowers,index)=>{return(
                                    
                                        <tr key={index}   id={index} >
                                            
                                            <td >{flowers.id}</td>
                                            <td >{flowers.name}</td>
                                            <td >{flowers.color}</td>
                                            <td >{flowers.price}</td>
                                            <td><Icon icon='data-decrease' onClick={HandelIconclick}  id={index} /></td>
                                            
                                        </tr>
                                         
                                    
                                    
                                )})}

                                   
                    </tbody>

                        
                        
                </Table> 
                    </div>
                      
        </div>
    )
}
