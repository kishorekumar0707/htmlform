function submitForm() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var food = [];
    var foodInputs = document.querySelectorAll('input[name="food"]:checked');
    foodInputs.forEach(function(input) {
        food.push(input.value);
    });
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = address;
    cell4.innerHTML = pincode;  
    cell5.innerHTML = gender;
    cell6.innerHTML = food.join(', ');
    cell7.innerHTML = state;
    cell8.innerHTML = country;

    document.getElementById("form").reset();
}
