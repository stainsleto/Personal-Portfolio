import react from 'react'
import '../App.css'

function Header(){
    return(
    <div>
        <div className="header">
            <p>HOME</p>
            <p>ABOUT</p>
            <p>SERVICES</p>
            <p>WORKS</p>
            <button id="header-button">CONNECT ME</button>
            
        </div>
        <hr id="header-line"/>
    </div>
    );
}

export default Header;