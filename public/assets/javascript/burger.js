// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".changed").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("id");
      console.log(id);
      var newDevoured = $(this).data("changed");

      console.log(newDevoured)
      if(newDevoured == true){
          newDevoured == false;
      } else if (newDevoured == false){
          newDevoured == true;
      }
  
      var newDevouredState = {
        devoured: newDevoured
      };
  console.log(newDevouredState)
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
});
  