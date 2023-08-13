const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/"><img className="logo" src="/assets/Xolv-logo.webp" alt="Xolv Logo"/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/serve">Who We Serve</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/solutions">Our Solutions</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/technology">Technology</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/careers">Careers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Nav;