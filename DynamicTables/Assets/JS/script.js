function insertrow(){
    let table = document.getElementById("mytable")
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    let lastname = document.getElementById("lastname").value
    let firstname = document.getElementById("firstname").value
    let age = document.getElementById("age").value

    cell1.innerHTML  = lastname;
    cell2.innerHTML  = firstname;
    cell3.innerHTML  = age;
    cell4.innerHTML = "<button onclick = deleterow(this)'> Delete</button>";

  
}

function deleterow(r){
    let i = r.parentNode.parentNode.rowIndex;
    document.getElementById("mytable").deleterow(i);
}
