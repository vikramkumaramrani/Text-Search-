var students = [
  "Vikram", "Lokesh", "Adesh", "Chaman", "Preet", "Ravi", "Jawhar", "Bharat", "Ashish", "Pawan",
  "Dasrat", "Suneel", "Dileep", "Love", "Mukesh", "Akash", "Kartik", "Ali", "Amar", "Bhavet"
];

var studentContainer = document.getElementById("students-list");
var searchBtn = document.getElementById("searchBtn");
var message = document.getElementById("message");
var searchBox = document.getElementById("searchBox");

function showAllStudent() {
  studentContainer.innerHTML = "";
  for (var i = 0; i < students.length; i++) {
    var div = document.createElement("div");
    div.className = "student";
    div.textContent = "Student " + (i + 1) + ": " + students[i];
    studentContainer.appendChild(div);
  }
}

function searchStudent() {
  var input = searchBox.value.toLowerCase();
  studentContainer.innerHTML = "";
  message.textContent = "";
  var found = false;

  for (var i = 0; i < students.length; i++) {
    var name = students[i].toLowerCase();
    if (name.includes(input)) {
      var div = document.createElement("div");
      div.className = "student";
      div.textContent = "Student " + (i + 1) + ": " + students[i];
      studentContainer.appendChild(div);
      found = true;
    }
  }

}

searchBtn.onclick = searchStudent;
showAllStudent();
// drag and drop