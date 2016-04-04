//business logic
function Location(place, landmark, time, note) {
  this.placeFoo = place;
  this.landmarkFoo = landmark;
  this.timeFoo = time;
  this.noteFoo = note;
}

//ui logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var inputtedPlace = $("input#new-place").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedTime = $("input#new-time-of-year").val();
    var inputtedNote = $("input#new-notes").val();

    var newPlace = new Location(inputtedPlace, inputtedLandmark, inputtedTime, inputtedNote);

    $("ul#places").append("<li><span class='location-class'>" + newPlace.placeFoo() + "</span></li>");

    $("input#new-place").val();
    $("input#new-landmark").val();
    $("input#new-time-of-year").val();
    $("input#new-notes").val();

    $(".contact").last().click(function(){
      $("#show-place").show();
      $("#show-place h2").text(newPlace.placeFoo);
      $(".place-name").text(newPlace.placeFoo);
      $(".landmarks").text(newPlace.landmarkFoo);
      $(".time-of-year").text(newPlace.placeFoo);
      $(".notes").text(newPlace.landmarkFoo);    });
  });
});
