
import { useState } from "react";
const Menu = () => {
    const[age, setAge] = useState('30');
    const handleClick = (name)=>{
        console.log(name)
        console.log("Button Clicked");
        console.log(age)

    }
   
    var title = 'Paras';

    return (  
        <div className="menu">
            <ul>
                <li><a>Home</a></li>
                <li><a>ABout US</a></li>
                <li><a>COntact</a></li>
                <li><a>Careers</a></li>
            </ul>
            <h1>{title} is {age} years old</h1>
            <button onClick = {()=>{
                handleClick('paras');
                console.log(age)
                setAge(100);
                }}>Event</button>
        </div>
       
    );
}
 
export default Menu;