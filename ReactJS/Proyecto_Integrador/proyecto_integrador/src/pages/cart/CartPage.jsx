import "./CartPage.css";

import {Link} from 'react-router-dom';

import { CartList, NavBar } from '../../components';
import { CheckoutButton, ContinueButton } from "../../components/buttons";

export default function CartPage()
{
    return (
        <div>
          <NavBar isCart={true} />
    
          <main>
              
            <CartList />

            <div className="buttons">
                <ContinueButton />
                <CheckoutButton />
            </div>
          </main>
        </div>
      );
}