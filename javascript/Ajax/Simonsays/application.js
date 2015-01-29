$(function(){
  $('#get_color').on("click", function(e){
    e.preventDefault();

    $.ajax({
      url: '/color', // where am I going
      type: "POST", // what am I doing to the resource
      dataType: 'json' // what format am I expecting back
    }).done(function(jsonResponse){
      $('#color_me li').eq(jsonResponse.cell)
        .css('background-color', jsonResponse.color);
    });

  });
});



// Json response can be seen in the console - click on Network and open the path. if its working it will show
//the json object (hash) you passed in the response

