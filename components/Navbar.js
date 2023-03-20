import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-background">
      <div className="container-fluid">
        <div>
        <Image src="/logo.png" alt="Example Image" width={160} height={70} />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">Button</span>
        </button>
        
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto fs-5 " >
            <li className="nav-item text-uppercase ">
              <Link href="/home" legacyBehavior>
                <a className="nav-link text-light ">Home</a>
              </Link>
            </li>
            <li className="nav-item text-uppercase">
              <Link href="/about" legacyBehavior>
                <a className="nav-link text-light ">About</a>
              </Link>
            </li>
            <li className="nav-item text-uppercase">
              <Link href="/plants" legacyBehavior>
                <a className="nav-link text-light ">Plants</a>
              </Link>
            </li>
            <li className="nav-item text-uppercase">
              <Link href="/buyersguide" legacyBehavior>
                <a className="nav-link text-light ">Buyer's Guide</a>
              </Link>
            </li>
            <li className="nav-item text-uppercase">
              <Link href="/contact" legacyBehavior>
                <a className="nav-link text-light ">Contact Us</a>
              </Link>
            </li>
            
            <li className="nav-item">
              <Link href="/login" legacyBehavior>
                <a className="nav-link text-light ">Log In</a>
              </Link>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar
