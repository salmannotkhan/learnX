import React from 'react'

function Header() {
    return (
        <div className="hero-head" style={{ fontFamily:"Comfortaa", backgroundColor:"#d8cbe9"}}>
            <header className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <a href="adminpanel">
                        <h1 className="title is-1">LearnX</h1>
                    </a>
                </div>
                <div id="navbarMenuHeroC" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" style={{color:"#060325"}}>Manage</a>
                            <div className="navbar-dropdown" style={{color:"#060325"}}>
                                <a className="navbar-item">
                                    <a href="viewtrainers"> View Trainers</a>
                                </a>
                                
                                <a className="navbar-item">
                                    <a href="viewtrainees"> View Trainees</a>
                                </a>
                               
                                <a className="navbar-item">
                                    <a href="viewvideos"> View Videos</a>
                                </a>
                                
                                <a className="navbar-item">
                                    <a href="viewsubscriptions"> View Subscriptions</a>
                                </a>
                            </div>
                    </div>
                        <a className="navbar-item">
                            <a href="adminpanel" style={{color:"#060325"}}>Home</a>
                        </a>
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>Logout</strong>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </header>
            </div>
       
    )
}

export default Header
