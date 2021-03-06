console.log('es6 class');
class Book{
    constructor(name,author,type){
        this.name=name;
        this.author=author;
        this.type=type;
    }

}
class Display{
    add(book){
        let tebleBody=document.getElementById('tableBody');
        let uistring=`<tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>`;
    tableBody.innerHTML+=uistring;
    }
    clear(){
        let libraryForm=document.getElementById('libraryForm');
        libraryForm.reset();
}
validate(book){
    if(book.name.length<2 || book.author.length<2){
        return false;
    }
    else{
        return true;
    }
}
show(type,displayMessage){
    let message=document.getElementById('message');
    let boldText;
    if(type==='success'){
        boldText = 'Success';
    }
    else{
        boldText = 'Error!';
    }
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>${boldText}:</strong> ${displayMessage}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">×</span>
    </button>
</div>`;
setTimeout(() => {
    message.innerHTML='';
}, 5000);
}
}
// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('YOu have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let phyics = document.getElementById('phyics');
    let chemistry = document.getElementById('chemistry');
    let mathematics = document.getElementById('mathematics');
    let programming = document.getElementById('programming');
    let life = document.getElementById('life');
    let english = document.getElementById('english');

    if (phyics.checked) {
        type = phyics.value;
    }
    else if (chemistry.checked) {
        type = chemistry.value;
    }
    else if (mathematics.checked) {
        type = mathematics.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (life.checked) {
        type = life.value;
    }
    else if (english.checked) {
        type = english.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }

    e.preventDefault();
}
