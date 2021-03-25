import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
      
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" href="#">Tweet & Post</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    
        <li className="nav-item active">
            <Link className="nav-link" to ="/">Home <span className="sr-only">(current)</span></Link>
        </li>
                    
        <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
        </li>
                    
        <li className="nav-item">
            <Link className="nav-link" to="/add">Add Post</Link>
        </li>
                    
        <li className="nav-item">
            <Link className="nav-link" to ="/users">Users</Link>
        </li>
                    
        <li className="nav-item">
             <Link className="nav-link" to= "/comments">Comments</Link>
        </li>
                    
      
    </ul>
  </div>
</nav>
       
    )
}

export default Navbar
