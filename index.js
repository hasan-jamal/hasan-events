var tabButtons=document.querySelectorAll(".container .tabs .tab button");
var tabPanels=document.querySelectorAll(".container  .content");
function showPanel(panelIndex) {
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
}
