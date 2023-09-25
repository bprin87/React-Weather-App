import './Navigation.css'
import { useState} from 'react'

function Navigation() {

    // display/hide mobile navbar list

    const[isNavDisplayed, setIsNavDisplayed] = useState(false)
  

    return (
        <div className='nav-container'>
            <nav className='navbar'>
                <div className='logo'>FindMyForecast.com</div>
                <ul className='nav-list nav-list-hidden'>
                    <li>Weather</li>
                    <li>Services</li>
                    <li>About</li>
                </ul>
                <button className='mobile-btn' onClick={() => { setIsNavDisplayed(!isNavDisplayed)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                </button>
            </nav>
            <nav className={isNavDisplayed ? "mobile-navbar" : "navbar"}>
                <ul className={isNavDisplayed ? "mobile-nav-list": "mobile-nav-list-hidden"}>
                    <li>Weather</li>
                    <li>Services</li>
                    <li>About</li>
                </ul>
            </nav>
        </div>
        
    )

}

export default Navigation