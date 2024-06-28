let btn = document.querySelector("button");
let ul = document.querySelector("ul");

let inp = document.querySelector("input");


btn.addEventListener("click", function(){
    //console.log("clicked");
    // to add task in list create item
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    // to create button element
    let delbtn = document.createElement("button");
    delbtn.innerText ="Task Done";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    console.log(inp.value);
    // reset input value to empty string
    inp.value = "";
});

// let delbtns = document.querySelectorAll(".delete");

// for(delBtn of delbtns){
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     });
// }

// if we have already some event listeners on old elements like specified tasks in li and if we delete them by using above event listener it will work 
// but for new elements appended the event listener wont work
// for that we use event delegation (bubbling property)

// as event listener won't work on innerelements will apply that on ul  for that commented line 26 to 31

ul.addEventListener("click", function(event){
    // event.target tell us that what was the target for click
    let delItem = event.target.parentElement;
    delItem.remove();
});