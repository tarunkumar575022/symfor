import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand navbarspace" href="#">Foodieland.</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item ms-3 ">
          <a class="nav-link active " aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item ms-3">
          <a class="nav-link" href="#">Recipies</a>
        </li>
        <li class="nav-item ms-3">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item ms-3">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item ms-3">
          <a class=" navbarspace nav-link disabled items" href="#" tabindex="-1" aria-disabled="true">About us</a>
        </li>
      </ul>
      <div className='spacee'>
      <i class="fa-brands fa-facebook-f"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-instagram"></i>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
