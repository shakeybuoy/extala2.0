import React from 'react'
function Navbar() {
    return (
        <nav className="navbar lg:py-4 lg:px-10 drop-shadow-md">

            <div className="navbar-start ">
                <img className="w-32 cursor-pointer" src="./logo.svg" />
            </div>
            {/* <div className="navbar-end">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div> */}
        </nav>
    )
}

export default Navbar