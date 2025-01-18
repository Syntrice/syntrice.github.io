/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleNavbar() {
    var x = document.getElementById("site-navbar");
    if (x.className === "navbar") {
      x.className += " hidden";
    } else {
      x.className = "navbar";
    }
  }