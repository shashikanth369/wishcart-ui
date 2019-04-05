import React from 'react'
import './header.scss'

class Header extends React.Component{
    constructor(props, context){
        super(props, context);
    }
    render(){
        return (
        <header id="header">
            <nav>
                <div className="row">
                    <ul className = "js--main-nav">
                        <li><a href = "#features">Food delivery</a></li>
                        <li><a href = "#cities">Our Cities</a></li>
                        <li><a href = "#works">How it works</a></li>
                        <li><a href = "#signup">Sign up</a></li>
                    </ul>
                </div>
            </nav>
        </header>);
    }
}

export default Header;
