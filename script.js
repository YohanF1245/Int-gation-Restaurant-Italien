var searchString;
function parseSearch(){
    // searchString= document.getElementById("searchBar").value;
    sessionStorage.setItem("searchString", document.getElementById("searchBar").value);
    let params = 'scrollbars=no,resizable=no,status=no,location=yes,toolbar=no,menubar=no,width=500,height=200';
    window.open("popup.html",'_blank',params);
    
}
function fillSearch(){
    document.getElementById("searchingText").innerHTML =("Recherche de "+sessionStorage.getItem("searchString")+" en cours ...");
}