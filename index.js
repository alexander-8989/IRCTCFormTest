function myValidate() {

    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let date = document.getElementById('date').value;
    let classes = document.getElementById('classes').value;
    let category = document.getElementById('category').value;


    if (from == "") {
        document.getElementById('arrive').innerHTML = "please fill this field";
        return false;
    } else if (from !== "") {
        document.getElementById('arrive').innerHTML = '';
    }

    if (date == "") {
        document.getElementById('datetime').innerHTML = "please choose the date";
        return false;
    } else if (date !== "") {
        document.getElementById('datetime').innerHTML = '';
    }

    if (to == "") {
        document.getElementById('destinate').innerHTML = "please fill this field";
        return false;
    } else if (to !== "") {
        document.getElementById('destinate').innerHTML = '';
    }

    if (classes == "") {
        document.getElementById('myClass').innerHTML = "please fill this field";
        return false;
    } else if (classes !== "") {
        document.getElementById('myClass').innerHTML = '';
    }

    if (category == "") {
        document.getElementById('type').innerHTML = "please fill this field";
        return false;
    } else if (category !== "") {
        document.getElementById('type').innerHTML = '';
    }

    if(from === to){
        document.getElementById('result').innerHTML = "origin and destination can't be same"
        return false;
    }else if(from !== to){
        document.getElementById('result').innerHTML = '';
    }


    /* local storage validation*/
    let bookTicket = {
        'From': from.trim(),
        'To': to.trim(),
        'Date': date,
        'Classes': classes,
        'Category': category,
    };

    let existingEntries = JSON.parse(localStorage.getItem('bookTicket'));
    if (existingEntries == null) {
        existingEntries = [];
    }

    localStorage.setItem('bookTicket', JSON.stringify(bookTicket));
    existingEntries.unshift(bookTicket);
    localStorage.setItem('bookTicket', JSON.stringify(existingEntries));


    /* validation for redirect the page */
    window.location.href = "/table.html";

    /* validation for reset the form*/
    document.getElementById("reset").click();

}

function swapping() {
    var temp = document.getElementById('from').value;
    document.getElementById('from').value = document.getElementById('to').value;
    document.getElementById('to').value = temp;
}