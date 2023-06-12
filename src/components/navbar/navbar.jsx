import React from 'react'
import "./nav.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
    return (
            <nav class=" header navbar navbar-expand-lg navbar-dark">
                <a class="navbar-brand" href="amazon.in"><img src="https://static.vecteezy.com/system/resources/previews/019/040/342/non_2x/amazon-logo-editorial-free-vector.jpg" class="logo" alt="img"/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse options" id="navbarTogglerDemo02">
                <div className= "searchprod">
                    <input type="text" className="searchinp" placeholder="Search"></input>
                    <SearchIcon className="searchicon" />
                </div>
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#footer">
                            <div className="option">
                                <span className="small">Hello, Vital</span>
                                <span className="big">Accounts & Lists</span>
                            </div>
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="option big">Returns</span>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#cta">
                                <div className="option">
                                    <ShoppingCartIcon />
                                    <span className="big">Cart</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}
