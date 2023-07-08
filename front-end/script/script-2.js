
/* header code */
const header =document.getElementById("header");
header.innerHTML=`
<nav id="first-navbar" class="navbar navbar-light navbar-expand-lg">
<div class="container-fluid">
<a class="logo" href="../../index/index.html">ShopCart</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div id="search">
        <input type="search" placeholder="Search" aria-label="Search">
        <button type="submit" action>Search</button>
    </div>
   <div>
    <a href="../../login/login.html"><button type="button" class="login">Login</button></a>
    <a href="../../cart/cart.html"><i class="cart-icon fa fa-shopping-cart"></i></a>
  </div>
    </div>
  </div>
  </nav>




  <ul id="second-navbar" class="list-unstyled">
    <li class="nav-item active">
      <a class="nav-link" href="../../index/index.html">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="../../products/all-products.html">All Products</a>
    </li>

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Women
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="../../products/women/women-all.html">All</a></li>
        <li><a class="dropdown-item" href="../../products/women/dress.html">Dresses</a></li>
        <li><a class="dropdown-item" href="../../products/women/pant.html">Pants</a></li>
        <li><a class="dropdown-item" href="../../products/women/skirt.html">Skirts</a></li>
        
      </ul>
    </li>

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Men
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="../../products/men/all.html">All</a></li>
        <li><a class="dropdown-item" href="../../products/men/hoodie.html">Hoodies</a></li>
        <li><a class="dropdown-item" href="../../products/men/shirt.html">Shirts</a></li>
        <li><a class="dropdown-item" href="../../products/men/pant.html">Pants</a></li>
      </ul>
    </li>
    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Kids
    </a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="../../products/kids/kids.html">All Products</a></li>
      <li><a class="dropdown-item" href="../../products/kids/boys.html">Boys</a></li>
      <li><a class="dropdown-item" href="../../products/kids/girls.html">Girls</a></li>
    </ul>
  </li>
    <li class="nav-item">
      <a class="nav-link" href="../../contact/contact-us.html">Contact</a>
    </li>
  </ul>
 
</div>
</nav>
`;

/* footer code */

const footer =document.getElementById("footer");
footer.innerHTML=`<div class="container text-center">
<div class="row">
  <div class="col-md-3 mx-auto">
    <h5>Women</h5>
    <ul class="list-unstyled">
      <li><a href="../../products/women/dress.html">Dresses </a></li><br>
      <li><a href="../../products/women/pant.html">Pants</a></li><br>
      <li><a href="../../products/women/skirt.html"> Skirts</a></li>
    </ul>          
    </div>
  <div class="col-md-3 mx-auto">
    <h5>Men</h5>
    <ul class="list-unstyled">
      <li><a href="../../products/men/shirt.html">Shirts </a></li><br>
      <li><a href="../../products/men/pant.html">Pants</a></li><br>
      <li><a href="../../products/men/hoodie.html"> Hoodies</a></li>
    </ul>          
  </div>

  <div class="col-md-3 mx-auto">
    <h5> Kids</h5>
    <ul class="list-unstyled">
      <li><a href="../../products/kids/boys.html">Boys </a></li><br>
      <li><a href="../../products/kids/girls.html">Girls</a></li><br>
    </ul>  
    </div>
  <div class="col-md-3 mx-auto">
    <h5> Links</h5>
    <ul class="list-unstyled">
      <li><a href="../../index/index.html">Home </a></li><br>
      <li><a href="../../login/login.html">Login</a></li><br>
      <li><a href="../../contact/contact-us.html"> Contact</a></li>
    </ul>
  </div>
</div>
</div>
<div class="bg-secondary py-3">
<div class="container text-center">
  <p class="mb-0">Copyright &copy; Ecommerce 2022-23 </p>
</div>
</div>`;

/* login button code */

function login(){
  var id = document.getElementById("mail").value;
  var pass = document.getElementById("password").value;
  if(id === "admin@admin.com" && pass === "123456"){
      alert("Login Successful")
  }
  else{
      alert("Incorrect Email or Password!")
  }
}

