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
            <Link className="nav-link" to="/register">Register</Link>
         </li>
                    
        <li className="nav-item">
            <Link className="nav-link" to="/add">Add Tweet</Link>
        </li>
                    
        <li className="nav-item">
            <Link className="nav-link" to ="/users">Users</Link>
        </li>
                    
        <li className="nav-item">
             <Link className="nav-link" to = "/reply" >Tweet Replies</Link>
        </li>
                    
        <li className="nav-item">
             <Link className="nav-link" to= "/tweets">Tweets</Link>
        </li>
                    
      
    </ul>
  </div>
</nav>
       
    )
}

export default Navbar
