import React from 'react'
import "./nav.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
    return (
        <div className="header">
            <img src="https://static.vecteezy.com/system/resources/previews/019/040/342/non_2x/amazon-logo-editorial-free-vector.jpg" class="logo" alt="img"/>
                    
            <div className= "searchprod" >
                <input type="text" className="searchinp" placeholder="Search"></input>
                <SearchIcon className="searchicon" />
            </div>

            <div className="options">
                <div className="option">
                    <span className="small">Hello, Vital</span>
                    <span className="big">Accounts & Lists</span>
                </div>
                <div className="option">
                    <span className="small">Returns</span>
                    <span className="big">& Orders</span>
                 </div>
                <div className="option">
                    <ShoppingCartIcon />
                    <span className="big">Cart</span>
                </div>
            </div>
            
        </div>
    )
}
