console.log("library project");
//constructor
function Book(name,author,type){
    this.name=name;
    this.author=author;
    this.type=type;
}
//display constructor
function Display(){

}
//add method in prototype
Display.prototype.add=function (book){
    tebleBody=document.getElementById('tableBody');
    let uistring=`<tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
</tr>`;
tableBody.innerHTML+=uistring;
}
//clear function
Display.prototype.clear=function (){
    libraryForm=document.getElementById('libraryForm');
    libraryForm.reset();
}
//validate
Display.prototype.validate=function(book){
    if(book.name.length<2 || book.author.length<2){
        return false;
    }
    else{
        return true;
    }
}
//show
Display.prototype.show=function(type,displayMessage){
    let message=document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Messge:</strong> ${displayMessage}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">×</span>
    </button>
</div>`;
setTimeout(() => {
    message.innerHTML='';
}, 5000);
}
//event in library
let libraryForm=document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormSubmit);
function libraryFormSubmit(e){
    console.log('submit');
    let name=document.getElementById('bookName').value;
    let author=document.getElementById('author').value;
    let type;
    let fiction=document.getElementById('fiction');
    let programming=document.getElementById('programming');
    let cooking=document.getElementById('cooking');

    if(fiction.checked){
        type=fiction.value;
    }
    else if(programming.checked){
        type=programming.value;
    }
    else if(cooking.checked){
        type=cooking.value;
    }

    let book =new Book(name,author,type);
    let display=new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success','your book has been successfully added ');
    }
    else{
        display.show('danger','sorry you can not added any book ------>> please check number of charecter minimum 3');
    }
    e.preventDefault();


}