var test;
$(document).ready(function(){
  $('#hello').click(function() {
      $.ajax({
          type: "POST",
          url: "http://localhost:3000/home/hello.json",
          data: {'hello':'world'},
          dataType: "JSON" // you want a difference between normal and ajax-calls, and json is standard (???)
      }).success(function(json){
          console.log("success", json);
          test = json;
      });
      return false; // prevents normal behaviour (???)
  });
});
