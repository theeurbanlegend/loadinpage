let init=0;

function loader() {
  init = setTimeout(showPage, 6000);
}

function showPage() {
  document.getElementById("preloader").style.display = "none";

}