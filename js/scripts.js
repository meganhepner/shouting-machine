$(document).ready(function() {
    $("#formOne").submit(function(event) {
      let person1Input = $("input#person1").val();
      let formInput = person1Input.toUpperCase();

      $(".person1").text(formInput);
      $("#story").show();
  
      event.preventDefault();
    });
  });