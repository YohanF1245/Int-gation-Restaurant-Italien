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
function goToS1(){
    window.location.href = "#s1";
}
function goToS2(){
    window.location.href = "#s2";
}
function goToS3(){
    window.location.href = "#s3";
}
function goToS4(){
    window.location.href = "#s4";
}
function goToS5(){
    window.location.href = "#s5";
}
function goToS6(){
    window.location.href = "#s6";
}
function goToS7(){
    window.location.href = "#s7";
}
function goToS8(){
    window.location.href = "#s8";
}
// intersectionhandler
var observer = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true)
		document.getElementById("s2Radio").checked = true;
}, { threshold: [0] });

observer.observe(document.querySelector("#s2"));