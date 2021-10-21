




import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button'
import React,{ useState } from 'react';
import {flowerslist} from '../submenucomponent/Listflowerdata'
import { useRecoilState } from 'recoil'

export default function Add(props) {

    const [items, setitems] = useState({id:'',name:'',price:'',color:''})
    
    const [flowerslist1 , setflowerslist] = useRecoilState(flowerslist)
    // const flowerlist = useRecoilValue(flowerslist);

    function handelButton(){
        
        flowerslist1.push(items)
        
        
        setflowerslist(flowerslist1)
        console.log(flowerslist1)
        alert('add to table')
    }

    return (
        <div>
            <div >
               <Form onSubmit={e=>e.preventDefault()}  >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>id</Form.Label>
                        <Form.Control placeholder="id" onChange={e=>setitems({...items,id:e.target.value})}/>
                        
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>name</Form.Label>
                        <Form.Control  placeholder="name" onChange={e=>setitems({...items,name:e.target.value})} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>color</Form.Label>
                        <Form.Control  placeholder="color" onChange={e=>setitems({...items,color:e.target.value})} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>price</Form.Label>
                        <Form.Control  placeholder="price" onChange={e=>setitems({...items,price:e.target.value})} />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" onClick={handelButton}>
                        Submit
                    </Button>
                </Form> 
                
                
            </div>
            
        </div>
    )
}
