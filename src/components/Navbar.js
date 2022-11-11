import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar gradient-color py-1">
        <div className="container">
            
            <Link to="/" className=' text-white text-decoration-none'>Registrera dig</Link>
            
            <ul className=" d-flex justify-content-between align-item-center list-unstyled mt-3 ">
              
                <li><Link to='/add' className=" text-white me-3" >Skriv Ärende</Link></li>
                <li><Link to="/issue" className=" text-light me-3 " > Ärende </Link></li>
                <li><Link to="/issues" className=" text-light me-3 " > ÄrendeLista </Link></li>
                <li><Link to="/status" className=" text-light me-3 " > Status </Link></li>
                <li><Link to="/comment" className=" text-light me-3 " > Kommentarer </Link></li>
            </ul>
           </div>
      </nav>
  )
}

export default Navbar