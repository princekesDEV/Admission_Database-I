// All the Code for the Admitted page goes here

let admitted = JSON.parse(localStorage.getItem("admission-accepted")) || [];
addToPage();
function addToPage() {
  document.querySelector("tbody").innerHTML = "";
  admitted.forEach((elem, i) => {
    let table_row = document.createElement("tr");

    //createing table data
    let StudentName = document.createElement("td");
    StudentName.innerText = elem.Name;

    let StudentEmail = document.createElement("td");
    StudentEmail.innerText = elem.Email;

    let StudentCourse = document.createElement("td");
    StudentCourse.innerText = elem.Course;

    let StudentGender = document.createElement("td");
    StudentGender.innerText = elem.Gender;

    let StudentPhone = document.createElement("td");
    StudentPhone.innerText = elem.Phone;

    document.querySelector("tbody").append(table_row);
    table_row.append(
      StudentName,
      StudentEmail,
      StudentCourse,
      StudentGender,
      StudentPhone
    );
  });
}
