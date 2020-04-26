// #################################################################################### //
//                            Click Style and Display Content                           //
// #################################################################################### //

function addClickedStyleAndDisplayContent(divId) {
  addClickedStyle(divId);
  displayContent(divId + "-content");
}

function addClickedStyle(id) {
  if ($(id).hasClass("unclicked") == true) {
    // if not clicked
    // $(".step").removeClass("unclicked");
    // $(".step").addClass("unclicked");
    $(id).removeClass("unclicked");
  } else {
    // if already has style
    console.log("this box already has style");
  }
}

function displayContent(id) {
  $(".content").css("display", "none");
  $(id).css("display", "block");
}

// #################################################################################### //
//                           Click Event Listeners on Div Elements                      //
// #################################################################################### //

// clicking any element within div.step (including the div itself) changes div.step style
$(".step, .num-circle, .step-title").click(function(event) {
  var eventClassName = event.target.className;

  var divId;
  var divCheckIcon;

  if (eventClassName == "step-title") {
    // clicked-on element is p.step-title -- need id of parent element which is div.step
    divId = "#" + event.target.parentElement.id;

    if (event.target.parentElement.previousElementSibling == null) {
      // remove check icon for clicked-on div
      divCheckIcon = "." + event.target.parentElement.id + "-check-icon";
      $(divCheckIcon).addClass("invisible");
      // remove check icon for next sibling div
      $("." + event.target.parentElement.nextElementSibling.id + "-check-icon").addClass("invisible");
      // remove styling for next div
      $("#" + event.target.parentElement.nextElementSibling.id).addClass("unclicked");
      addClickedStyleAndDisplayContent(divId);
    } else if (event.target.parentElement.previousElementSibling.children[2].classList.value.includes("invisible") == true) {
      alert("Complete this step first!");
    } else {
      // remove check icon for clicked-on div
      divCheckIcon = "." + event.target.parentElement.id + "-check-icon";
      $(divCheckIcon).addClass("invisible");
      // remove check icon for next sibling div
      $("." + event.target.parentElement.nextElementSibling.id + "-check-icon").addClass("invisible");
      // remove styling for next div
      $("#" + event.target.parentElement.nextElementSibling.id).addClass("unclicked");
      addClickedStyleAndDisplayContent(divId);
    }


  } else if (eventClassName == "num") {
    // clicked-on element is p.num -- need id of parent of parent element which is div.step
      // parent of p.num is div.num-circle
      // parent of div.num-circle is div.step
    divId = "#" + event.target.parentElement.parentElement.id;

    if (event.target.parentElement.parentElement.previousElementSibling == null) {
      // remove check icon for clicked-on div
      divCheckIcon = "." + event.target.parentElement.parentElement.id + "-check-icon";
      $(divCheckIcon).addClass("invisible");
      // remove check icon for next sibling div
      $("." + event.target.parentElement.parentElement.nextElementSibling.id + "-check-icon").addClass("invisible");
      // remove styling for next div
      $("#" + event.target.parentElement.parentElement.nextElementSibling.id).addClass("unclicked");
      addClickedStyleAndDisplayContent(divId);
    } else if (event.target.parentElement.parentElement.previousElementSibling.children[2].classList.value.includes("invisible") == true) {
      alert("Complete this step first!");
    } else {
      // remove check icon for clicked-on div
      divCheckIcon = "." + event.target.parentElement.parentElement.id + "-check-icon";
      $(divCheckIcon).addClass("invisible");
      // remove check icon for next sibling div
      $("." + event.target.parentElement.parentElement.nextElementSibling.id + "-check-icon").addClass("invisible");
      // remove styling for next div
      $("#" + event.target.parentElement.parentElement.nextElementSibling.id).addClass("unclicked");
      addClickedStyleAndDisplayContent(divId);
    }


  } else {
    // clicked-on element is the div.step -- only need id of div.step
    divId = "#" + event.target.id;

    if (event.target.previousElementSibling == null) {
      // remove check icon for clicked-on div
      divCheckIcon = "." + event.target.id + "-check-icon";
      $(divCheckIcon).addClass("invisible");
      // remove check icon for next sibling div
      $("." + event.target.nextElementSibling.id + "-check-icon").addClass("invisible");
      // remove styling for next div
      $("#" + event.target.nextElementSibling.id).addClass("unclicked");
      addClickedStyleAndDisplayContent(divId);
    } else if (event.target.previousElementSibling.children[2].classList.value.includes("invisible") == true) {
      alert("Complete this step first!");
    } else {
      // remove check icon for clicked-on div
      divCheckIcon = "." + event.target.id + "-check-icon";
      $(divCheckIcon).addClass("invisible");
      // remove check icon for next sibling div
      $("." + event.target.nextElementSibling.id + "-check-icon").addClass("invisible");
      // remove styling for next div
      $("#" + event.target.nextElementSibling.id).addClass("unclicked");
      addClickedStyleAndDisplayContent(divId);
    }


  }
});

// #################################################################################### //
//                        Click Event Listeners on Content Buttons                      //
// #################################################################################### //

// Choose-Title Buttons //

$(".submit-title-btn").click(function() {
  $(".choose-title-check-icon").removeClass("invisible");
  $("#choose-description").removeClass("unclicked");
  displayContent("#choose-description-content");
});

// Choose-Description Buttons //

$(".cdc-back-btn").click(function() {
  $(".choose-title-check-icon").addClass("invisible");
  $("#choose-description").addClass("unclicked");
  displayContent("#choose-title-content");
});

$(".cdc-submit-btn").click(function() {
  $(".choose-description-check-icon").removeClass("invisible");
  $("#confirm-data").removeClass("unclicked");
  displayContent("#confirm-data-content");
});

// Confirm-Data Buttons //

$(".confirm-data-back-btn").click(function() {
  $(".choose-description-check-icon").addClass("invisible");
  $("#confirm-data").addClass("unclicked");
  displayContent("#choose-description-content");
});

$(".confirm-data-submit-btn").click(function() {
  $(".confirm-data-check-icon").removeClass("invisible");
  displayContent("#confirmation-message-content");

  // remove click event listeners from elements within div.step (including the div itself)
    // on hover, change cursor to not-allowed
  $(".step, .num-circle, .step-title").off("click");
  $("div.step").hover(function() {
    $(this).css("cursor", "not-allowed");
  });
});
