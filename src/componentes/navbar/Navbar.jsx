import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           <div className="container-fluid">
               <Link className="navbar-brand" href="#">Mandarina.tool</Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                   data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                   aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                       <li className="nav-item">
                           <Link className="nav-link active" aria-current="page" to='/CheckList' >Chek-List</Link>
                       </li>
                       <li className="nav-item">
                           <Link className="nav-link" to='/CheckList_SASS'>CheckList Operam</Link>
                       </li>
                       <li className="nav-item">
                           <Link className="nav-link" href="#">Link 2</Link>
                       </li>
                       <li className="nav-item">
                           <Link className="nav-link" href="#">Link 3</Link>
                       </li>
                   </ul>
               </div>
           </div>
       </nav>
  )
}

export default Navbar