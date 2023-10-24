var searchString;
function parseSearch(){
    // searchString= document.getElementById("searchBar").value;
    sessionStorage.setItem("searchString", document.getElementById("searchBar").value);
    let params = 'scrollbars=no,resizable=no,status=no,location=yes,toolbar=no,menubar=no,width=500,height=200';
    window.open("popup.html",'_blank',params);
    
}
function fillSearch(){
    document.getElementById("searchingText").innerHTML =("Recherche de "+sessionStorage.getItem("searchString")+" en cours ...");
    
    let checked = document.getElementById("s2Radio").checked = true;
    console.log(checked)


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
var observerS1 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) 
		document.getElementById("s1Radio").checked = true;
}, { threshold: [0] });
var observerS2 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) 
		document.getElementById("s2Radio").checked = true;
}, { threshold: [0] });
var observerS3 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) 
		document.getElementById("s3Radio").checked = true;
}, { threshold: [0] });
var observerS4 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) 
		document.getElementById("s4Radio").checked = true;
}, { threshold: [0] });
var observerS5 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) 
		document.getElementById("s5Radio").checked = true;
}, { threshold: [0] });
var observerS6 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) 
		document.getElementById("s6Radio").checked = true;
}, { threshold: [0] });
var observerS7 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) 
		document.getElementById("s7Radio").checked = true;
}, { threshold: [0] });
var observerS8 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) 
		document.getElementById("s8Radio").checked = true;
}, { threshold: [0] });

observerS1.observe(document.querySelector("#s1"));
observerS2.observe(document.querySelector("#s2"));
observerS3.observe(document.querySelector("#s3"));
observerS4.observe(document.querySelector("#s4"));
observerS5.observe(document.querySelector("#s5"));
observerS6.observe(document.querySelector("#s6"));
observerS7.observe(document.querySelector("#s7"));
observerS8.observe(document.querySelector("#s8"));