menu_list=[
"chichen tandoori pizza",
"Veg suprieme pizza",
 "Paneer tikka pizza",
 "Deluxie veg pizza",
"Extra vaganza pizza"
];

Function getmenu(){
    var htmldata;
    htmldata="<ol class='menu_list'>";
    menu_list.sort();
    for(i=0;i<menu_list.length;i++){
        htmldata= htmldata+"<li>"+ menu_list[i]+ "</li>"
    }
    htmldata= htmldata+ "</ol>";
    document.getElementById("display_menu").innerHTML= htmldata;
}

Function addmenu(){
    var htmldata;
   var item=document.getElementById("pizza_recipie").value;
   menu_list.push();
   menu_list.sort();
   htmldata= htmldata+ "<section class='cards'>";
   for(i=0;i<menu_list.length;i++){
       htmldata=htmldata+ "<div class='cards'>"+ "<img src='images.jpg'>"+ menu_list[i]+ "</div>"
   }
   htmldata= htmldata+ "</section>";
   document.getElementById("addeed_menu").innerHTML= htmldata;

}
