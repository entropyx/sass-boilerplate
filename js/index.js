function resize(element) {
  if (element[0].scrollHeight < 104) {
    element[0].style.height = "104px";
  } else {
    element[0].style.height = element[0].scrollHeight + "px";
  }
}

let text_area_selector = "textarea";

$(document).on("keyup", text_area_selector, function() {
  resize($(this));
});
$(document).on("keydown", text_area_selector, function() {
  resize($(this));
});
