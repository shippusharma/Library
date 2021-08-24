// Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//Display Constructor
function Display() {

}

//Add Mathod to Display prototype
Display.prototype.add = function (book) {
    console.log('Sucessfull Adding');

    let tableBody = document.getElementById('tableBody');
    let tableForm = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>
                    `;
    tableBody.innerHTML += tableForm;
}

// implement the Validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

// implement the Clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// implement the Show function
Display.prototype.show = function (showType, showMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `
                    <div class="alert alert-${showType} alert-dismissible fade show" role="alert">
                        <strong>Message :) </strong> ${showMessage}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    `;
    setTimeout(function () {
        message.innerHTML = "";
    }, 3000);
}


//Add Submit event listener to library form
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('Your form have been Submited');

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let others = document.getElementById('other');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    else if (others.checked) {
        type = others.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book)
        display.clear()
        display.show('primary', " Your Book has Been Successfully Added..!")
    }
    else {
        // show the Error
        display.show('danger', " You Can Not be Add this Book...!")
    }
    e.preventDefault()
}
