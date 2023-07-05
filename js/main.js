
document.getElementById('header').innerHTML = `<section id="logo-header">
<a href="./index.html" class="logo-png"> <img src="./image/logo_pizzeria.png" alt="logo pizzeria" /> </a>
<h1><a href="./index.html" class="nombre-pizzeria">PIZZA JAT</a></h1>
</section>
<nav>
<ul class="nav-menu">
  <li><a href="./index.html"> HOME </a></li>
  <li><a href="./menu.html"> MENÚ </a></li>
  <li><a href="./sucursales.html"> SUCURSALES </a></li>
  <li><a href="./about.html"> SOBRE NOSOTROS </a></li>
  <li><a href="./reservas.html" id="reservas-header"> RESERVAS </a></li>
</ul>
<i class="fa-solid fa-bars" id="toggle-header"></i>
</nav>`

document.getElementById('footer').innerHTML = `<section id="logo-footer">
<a href="./index.html" class="logo-png"> <img src="./image/logo_pizzeria.png" alt="logo pizzeria" /> </a>
<h2><a href="./index.html" class="nombre-pizzeria">PIZZA JAT</a></h2>
</section>

<nav class="nav-footer nav-contacto">
<h3>CONTACTO</h3>
<ul>
  <li> <i class="fa-solid fa-location-dot"></i><span> Cabildo 938, Buenos Aires </span> </li>
  <li> <i class="fa-solid fa-envelope"></i><span> contacto@pizzajat.com </span> </li>
  <li> <i class="fa-solid fa-phone"></i><span class="telefono">1144556677</span> </li>
</ul>
</nav>

<nav class="nav-footer nav-seguinos">
<h3>SEGUINOS</h3>
<ul>
  <li> <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a> </li>
  <li> <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-square-instagram"></i></a> </li>
  <li> <a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-twitter"></i></a> </li>
</ul>
</nav>

<nav class="nav-footer nav-legales">
<h3>LEGALES</h3>
<ul>
  <li> <a href="./index.html"><i class="fa-solid fa-angle-right"></i> Términos y Condiciones</a> </li>
</ul>
</nav>`



