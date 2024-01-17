import User from "../user/User";
const Header = ()=>{
    return(
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid bg-info">
          <a className="navbar-brand" href="#">Holiday Photo App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <User/>
          </div>
        </div>
      </nav>
    )
}

export default Header