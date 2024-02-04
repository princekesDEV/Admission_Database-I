// All the JS Code for the Add Students Page Goes Here
document.querySelector("form").addEventListener("submit", addDataToLS);
let studentsData = JSON.parse(localStorage.getItem("admission")) || [];

function addDataToLS(event) {
  event.preventDefault();
  let Name = document.querySelector("#name").value;
  let Email = document.querySelector("#email").value;
  let Phone = document.querySelector("#phone").value;
  let Gender = document.querySelector("#gender").value;
  let Course = document.querySelector("#course").value;
  let data = {
    Name,
    Email,
    Phone,
    Gender,
    Course,
  };
  studentsData.push(data);
  localStorage.setItem("admission", JSON.stringify(studentsData));
}
