function inserttext(event) {

  var input = document.getElementById("insertTask").value;
  var container = document.createElement("div");
  var box = document.createElement("div");
  box.className = "input-group-prepend";

  container.className = "input-group-append mb-3";
  container.id = "cont"

  var text = document.createElement("input");
  text.className = "form-control ";
  text.id = "textId";

  text.disabled = true;
  text.value = input;

  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.className = "mark "
  checkbox.id = "test"
  box.append(checkbox);
  container.append(box);
  container.append(text);

  var element = document.getElementById("fixed");
  element.append(container);
}

$(document).on('click', '#test', function () {

  var input = document.getElementById("textId");
  input.toggleclass(strike);


});

function deleteCheckBox() {
  if (document.getElementById('test').checked) {
    $("#cont").remove();
    for (var i = 0; i < 100; i++) {
      if (document.getElementById('test').checked)
        if (answer)
          $("#cont").remove();;
    }
  }
}

