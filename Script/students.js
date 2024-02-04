// All the Code for All Students Page Goes Here

let admission = JSON.parse(localStorage.getItem("admission")) || [];
let admitted = JSON.parse(localStorage.getItem("admission-accepted")) || [];
let rejected = JSON.parse(localStorage.getItem("admission-rejected")) || [];

function addList(admission) {
  document.querySelector("tbody").innerHTML = "";
  admission.forEach((elem, i) => {
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

    let Admitted = document.createElement("td");
    Admitted.style.backgroundColor = "green";
    Admitted.style.color = "white";
    Admitted.style.cursor = "pointer";
    Admitted.innerText = "Admitted";
    Admitted.addEventListener("click", () => {
      admission_accepted(elem, i);
    });

    let Rejected = document.createElement("td");
    Rejected.style.backgroundColor = "red";
    Rejected.style.color = "white";
    Rejected.style.cursor = "pointer";
    Rejected.innerText = "Rejected";
    Rejected.addEventListener("click", () => {
      admission_rejected(elem, i);
    });

    document.querySelector("tbody").append(table_row);
    table_row.append(
      StudentName,
      StudentEmail,
      StudentCourse,
      StudentGender,
      StudentPhone,
      Admitted,
      Rejected
    );
  });
}
addList(admission);

function admission_accepted(elem, i) {
  admitted.push(elem);
  localStorage.setItem("admission-accepted", JSON.stringify(admitted));
  admission.splice(i, 1);
  localStorage.setItem("admission", JSON.stringify(admission));
  addList(admission);
}

function admission_rejected(elem, i) {
  rejected.push(elem);
  localStorage.setItem("admission-rejected", JSON.stringify(rejected));
  admission.splice(i, 1);
  localStorage.setItem("admission", JSON.stringify(admission));
  addList(admission);
}

let Filter = document.querySelector("#filter");
Filter.addEventListener("change", () => {
  if (Filter.value == "") {
    addList(admission);
  } else if (Filter.value == "all") {
    addList(admission);
  } else {
    const new_data = admission.filter((elem) => {
      return elem.Course == Filter.value;
    });
    addList(new_data);
  }
});
