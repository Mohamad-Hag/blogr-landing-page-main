let menu = document.createElement("div");
menu.setAttribute("id", "mobile-menu-container");
window.onresize = window.onload = () => {
  let x = window.matchMedia("(max-width: 1000px)");
  changeMenu(x);
  x.addListener(changeMenu);
};
function changeMenu(x) {
  menu.innerHTML = `
    <button onclick="menuBtnClicked()" id="mobile-menu-btn"><i class="fa fa-bars"></i></button>
    `;
  let rightHeader = document.querySelector("#header-right");
  let headerMenu = document.querySelector("#mobile-menu");
  let ill1 = document.querySelector("#ill-1");
  let ill2 = document.querySelector("#ill-2");
  
  if (x.matches) {
    if (menu === null) menu = document.createElement("div");
    rightHeader.append(menu);    
    ill1.setAttribute("src", "./images/illustration-editor-mobile.png");
    ill2.setAttribute("src", "./images/illustration-laptop-mobile.png");
  } else {
    if (rightHeader.querySelector("#mobile-menu-container") !== null)
    rightHeader.removeChild(menu);
    headerMenu.style.visibility = "hidden";
    ill1.setAttribute("src", "./images/illustration-editor-desktop.png");
    ill2.setAttribute("src", "./images/illustration-laptop-desktop.png");
  }
}
function menuBtnClicked()
{
    let headerMenu = document.querySelector("#mobile-menu");
    let icon = document.querySelectorAll("#mobile-menu-btn i")[0];
    let visibility = getComputedStyle(headerMenu).getPropertyValue("visibility");
    if (visibility === "hidden")
    {
        headerMenu.style.visibility = "visible";
        icon.setAttribute("class", "fa fa-close");
    }
    else
    {
        headerMenu.style.visibility = "hidden";
        icon.setAttribute("class", "fa fa-bars");
    }
}
function menuItemClicked(e)
{
    let parent = e.parentElement.childNodes[3];
    let icon = e.childNodes[1];
    let visibility = getComputedStyle(parent).getPropertyValue("display");    
    if (visibility === "none")
    {
        parent.style.display = "block";
        icon.setAttribute("class", "bi bi-chevron-up");
        e.style.opacity = "0.7";
    }
    else
    {
        parent.style.display = "none";
        icon.setAttribute("class", "bi bi-chevron-down");
        e.style.opacity = "1";
    }    
}
