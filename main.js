$(document).ready(function() {

   function catergoryName(acme) {
   	 for(var i = 0; i < acme.categories.length; i++) {
   	  var catergory = acme.categories[i];
        $("#list-view").append("<h1 class='col-md-4'>" + catergory.name + "</h1>")
   	 }
   }

   function typeList(acme) {
   	for (var i = 0; i < acme.types.length; i++) {
   		var type = acme.types[i];
         $("#list-view").append("<h3>" + type.name + "</h3>" + "<div>" + type.description + "</div>")
   	};
   }
   function productList(acme) {
    for(var i = 0; i < acme.products.length; i++) {
      var product = acme.products[i];
        $("#list-view").append("<div" + product.name + "</div>" + "<div>" + product.description + "</div>")
    }
   }



   var promise1 = function() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "categories.json"
      }).done(function(data1) {
        resolve(data1);
      }).fail(function(error) {
        reject(error)
      })
    })
   }

   var promise2 = function() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "products.json"
      }).done(function(data2) {
        resolve(data2);
      }).fail(function(error) {
        reject(error)
      })
    })
   }

  var promise3 = function() {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: "types.json"
        }).done(function(data3) {
          resolve(data3);
        }).fail(function(error) {
          reject(error)
        })
      })
     }
  
  promise1()
    .then(function(data1) {
      catergoryName(data1)
      return promise2();
    })
    .then(function(data2) {
      productList(data2)
      return promise3();
    })
    .then(function(data3) {
      typeList(data3)
    })


})