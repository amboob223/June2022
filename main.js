const form = document.getElementById('form');
const addBtn = document.getElementById('addto');
const list = document.getElementById('listcontainer');

addBtn.addEventListener('click',function(){
    //I want this listener to add a p element when clicked and ins
    // inside the p we put the value form the forms input tag
    var paragraph = document.createElement('p');
        paragraph.classList.add("smash");// this class list is an element method the elemenet we created above
        
        paragraph.innerText = form.value // when it say not  afunction that menaset it instead
        list.appendChild(paragraph);
        //now we use inner text to put in the info 
        
        form.value = " "//now we resetting the info in the form after we use it each time.
    
        // we want to draw a line through the p tage element when clicked 
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through";

    })
    // when double clicked we want to remove the child p form the elmeent.

    paragraph.addEventListener('dblclick',function(){
        list.removeChild(paragraph)
    })


})