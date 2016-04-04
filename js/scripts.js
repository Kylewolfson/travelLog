//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

// Contact.prototype.fullName = function() {
//   return this.lastName + ", " + this.firstName;
}

//ui logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#places").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#new-first-name").val();
    $("input#new-last-name").val();

    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });
  });
});
