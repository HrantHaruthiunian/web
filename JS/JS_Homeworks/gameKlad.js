

document.getElementById("k3").innerHtml = `Գանձը գտնվում է անտառում: Փորձիր գտնել այն`;


let leftOffset = 0;
let topOffset = 0;

$("#map").click(function (event) {
   leftOffset = event.pageX;
   topOffset = event.pageY;
});


