//import "JQuery";

//valori
var data = [
    {
      "id": 10001,
      "birthDate": "1953-09-01",
      "firstName": "Georgi",
      "lastName": "Facello",
      "gender": "M",
      "hireDate": "1986-06-25",
    },
    {
      "id": 10002,
      "birthDate": "1964-06-01",
      "firstName": "Bezalel",
      "lastName": "Simmel",
      "gender": "F",
      "hireDate": "1985-11-20",
    },
    {
      "id": 10003,
      "birthDate": "1959-12-02",
      "firstName": "Parto",
      "lastName": "Bamford",
      "gender": "M",
      "hireDate": "1986-08-27T22:00:00.000+0000",
    },
    {
      "id": 10004,
      "birthDate": "1954-04-30",
      "firstName": "Chirstian",
      "lastName": "Koblick",
      "gender": "M",
      "hireDate": "1986-11-30",
  
    },
    {
      "id": 10005,
      "birthDate": "1955-01-20",
      "firstName": "Kyoichi",
      "lastName": "Maliniak",
      "gender": "M",
      "hireDate": "1989-09-11T22:00:00.000+0000",
  
    }
  ];
  var nextID = 10006;


//create employee table
function employeeTable(){
  var rows = "";
  $.each(data,function (key,value){
    rows = rows + "<tr class='control'>";
    rows = rows + "<th>" + value.id + "</th>";
    rows = rows + "<td>" + value.firstName + "</td>";
    rows = rows + "<td>" + value.lastName + "</td>";
    rows = rows + "<td>" + value.gender + "</td>";
    //rows = rows + "<td>" + value.hireDate + "</td>";
    rows = rows + "<td>" + "<input type='button' value='Rimuovi' class='rmButton' id='"+value.id+"' onclick='rmEmployee("+value.id+")'>";
    rows = rows + "</tr>";
  });
  $("tbody").append(rows);

}

$(document).ready(function (){
  employeeTable();
}) 

//add employee
$(document).ready(function (){
  $("#btnAdd").click(function (){
    var rows = "";
    var id = nextID;
    var bithDate = "";
    var firstName = $("#firstName").val().trim();
    var lastName = $("#lastName").val().trim();
    var gender = $("#gender").val().trim();
    var hireDate = "";

    data.push({
      "id": id,
      "birthDate": bithDate,
      "firstName": firstName,
      "lastName": lastName,
      "gender": gender,
      "hireDate": hireDate,

    })
    rows = rows + "<tr class='control'>";
    rows = rows + "<th>" + id + "</th>";
    rows = rows + "<td>" + firstName + "</td>";
    rows = rows + "<td>" + lastName + "</td>";
    rows = rows + "<td>" + gender + "</td>";
    //rows = rows + "<td>" + value.hireDate + "</td>";
    rows = rows + "<td>" + "<input type='button' value='Rimuovi' class='rmButton' id='"+id+"' onclick='rmEmployee("+id+")'>";
    rows = rows + "</tr>";

    nextID++;
    $("tbody").append(rows);
})
})

//elimina impiegati
function rmEmployee(id){
  var rimozione = "#";
  rimozione += id;
  
  $(rimozione).closest("tr").remove();

  $.each(data,function (key,value){
    if(key.value.id = id){
      data.splice(key, 1);
    }
  })
}

