

import { FaOpencart } from "react-icons/fa";
import './CartWidget.css';
export default function CartWidget(props){

    return(
        <div className="CartWidget">
          
          <div className="cart-icono">
            <FaOpencart  />
          </div>
          {
            props.val !=0 
            ?<div className='cart-valor'>{props.val}</div>
            :<div/>
          }
          
        </div>
    );
};