import React from 'react';
import logo from '../assets/images/KIT_LOGO.png';
import carousal1 from '../assets/images/carousal1.jpg';
import carousal2 from '../assets/images/carousal2.jpg';
import carousal3 from '../assets/images/carousal3.jpg';
import figma from '../assets/images/figma-icon.png';
import react from '../assets/images/react.png';
import selenium from '../assets/images/selenium.png';
import docker from '../assets/images/docker.png';


export default function  Hello() {
  return (
    <div> 
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand d-flex" href="#">
      <img className='logo-img' src={logo} alt="logo"/>
      <h3 className='brandname'>KIT Global technologies</h3>
      </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item d-flex">
        <i class="fa-solid fa-house home_icon"></i>
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="https://kitservices.in/">About Us</a>
        </li>
        <li class="nav-item dropdown">


<button type="button" class="btn btn-primary modal-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
  modal demo 
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Nothing to see here!
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<section className='carousal-container'>
<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={carousal1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={carousal2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={carousal3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</section>
<section className='grid-example'>
<div class="card card_ m-3" data-aos="fade-up">
  <img src={figma} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center h2">Design</h5>
    <p class="card-text">"Innovative, collaborative design team crafting solutions that merge creativity and functionality for impactful user experiences. Explore our portfolio!"</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">UI/UX</li>
    <li class="list-group-item">Adobe XD (Experience Design)</li>
    <li class="list-group-item">Figma</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
<div class="card card_ m-3" >
  <img src={react} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center h2">Build</h5>
    <p class="card-text">"Expert developers crafting robust, scalable solutions with cutting-edge technology for seamless digital experiences. Discover our tech prowess and projects!"</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">HTML/CSS</li>
    <li class="list-group-item">SpringBoot</li>
    <li class="list-group-item">React Js</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
<div class="card card_ m-3" data-aos="fade-right">
  <img src={selenium} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center h2">Test</h5>
    <p class="card-text">"Thorough testing team ensuring top-notch quality, identifying bugs, and guaranteeing seamless performance for a flawless user experience."</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Selenuim</li>
    <li class="list-group-item">Jira</li>
    <li class="list-group-item">Postman</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
<div class="card card_ m-3" data-aos="fade-left">
  <img src={docker} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center h2">Deploy</h5>
    <p class="card-text">"Efficient deployment team ensuring smooth, timely releases, optimizing performance, and maintaining reliability for seamless user interactions."</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Jenkins</li>
    <li class="list-group-item">Docker</li>
    <li class="list-group-item">AWS</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
</section>
<section className='third-section'>

</section>
    </div>
  )
}
