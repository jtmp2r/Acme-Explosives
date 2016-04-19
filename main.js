$(document).ready(function() {
   function explosiveSales(acme) {
   	 for(var i = 0; i < acme.catergories.length; i++) {
   	  var catergory = acme.catergories[i];
      $("list-view").append("<h1>" + catergory.name + "</h1>")
   	 }
   }






})