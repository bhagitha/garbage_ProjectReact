import React from 'react';
import "./styles.css"
function Header() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
       <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Check Value</a>
        </li> */}
      </ul>
      <form class="d-flex">
        <button class="btn btn-sm btn-outline-secondary" type="submit">LOGOUT</button>
      </form>
    </div>
  </div>
</nav>

    )
}
export default Header;