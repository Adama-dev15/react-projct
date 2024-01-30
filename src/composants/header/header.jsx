import React from 'react';
import "./header.css";

const Header = () => {
  return (
    <header>
        <div className='header_top'>
            <p>COMMANDEZ RAPIDEMENT AU 05 85 58 98 12 || LIVRAISON EXPRESS LE MÊME JOUR !</p>
        </div>
        <div className="header_search">
            <div className="logo"><a href="#">TA <span>|| LIVRAISON EXPRESS</span></a></div>
            <div className="search">
                <form action="#">
                    <div className="champ">
                        <input type="text" placeholder='Rechercher' />
                        <button type="submit" className="icon"><i className="fas fa-search"></i></button>
                    </div>
                </form>
            </div>
            <div className="connexion">
                <div className="inscrire"><a href="#"><i className="fas fa-user"></i>Connexion</a></div>
                <div className="pannier"><a href="#"><span>0</span><i className="fas fa-shopping-cart"></i> 0 FCFA</a></div>
            </div>
        </div>
        <div className="header_navigation">
            <div className="nemu_navigation">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="navigation">
                <div className="article">
                    <div className='name'>téléphones  <i class="fa-solid fa-caret-down"></i></div>
                    <div className='article_element'>
                        <ul>
                            <li><a href="#">element_1</a></li>
                            <li><a href="#">element_2</a></li>
                            <li><a href="#">element_3</a></li>
                            <li><a href="#">element_4</a></li>
                            <li><a href="#">element_5</a></li>
                        </ul>
                    </div>
                </div>
                <div className="article">
                    <div className='name'>tablettes <i class="fa-solid fa-caret-down"></i></div>
                    <div className='article_element'>
                        <ul>
                            <li><a href="#">element_1</a></li>
                            <li><a href="#">element_2</a></li>
                            <li><a href="#">element_3</a></li>
                            <li><a href="#">element_4</a></li>
                            <li><a href="#">element_5</a></li>
                        </ul>
                    </div>
                </div>
                <div className="article">
                    <div className='name'>informatique <i class="fa-solid fa-caret-down"></i></div>
                    <div className='article_element'>
                        <ul>
                            <li><a href="#">element_1</a></li>
                            <li><a href="#">element_2</a></li>
                            <li><a href="#">element_3</a></li>
                            <li><a href="#">element_4</a></li>
                            <li><a href="#">element_5</a></li>
                        </ul>
                    </div>
                </div>
                <div className="article">
                    <div className='name'>electronique <i class="fa-solid fa-caret-down"></i></div>
                    <div className='article_element'>
                        <ul>
                            <li><a href="#">element_1</a></li>
                            <li><a href="#">element_2</a></li>
                            <li><a href="#">element_3</a></li>
                            <li><a href="#">element_4</a></li>
                            <li><a href="#">element_5</a></li>
                        </ul>
                    </div>
                </div>
                <div className="article">
                    <div className='name'>modes <i class="fa-solid fa-caret-down"></i></div>
                    <div className='article_element'>
                        <ul>
                            <li><a href="#">element_1</a></li>
                            <li><a href="#">element_2</a></li>
                            <li><a href="#">element_3</a></li>
                            <li><a href="#">element_4</a></li>
                            <li><a href="#">element_5</a></li>
                        </ul>
                    </div>
                </div>
                <div className="article">
                    <div className='name'>accesssoires  <i class="fa-solid fa-caret-down"></i></div>
                    <div className='article_element'>
                        <ul>
                            <li><a href="#">element_1</a></li>
                            <li><a href="#">element_2</a></li>
                            <li><a href="#">element_3</a></li>
                            <li><a href="#">element_4</a></li>
                            <li><a href="#">element_5</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
export default Header
