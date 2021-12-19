const draggable_list=document.getElementById("draggable-list");
const check=document.getElementById("check");
const richestPeople=[
    "Jeff Bezoes",
    "Elon Mosk",
    "Bernard Arnault",
    "Mark Zugerberg",
    "Wareen Buffet",
    "Larry Ellission",
    "Larry Page",
    "Sergey Brin",
];
const listItems=[];
let dragstartIndex;
createlist();
function createList(){
    [...richestPeople].forEach((person,index)=> {
       const listItem=document.createElement('li');
       listItem.setAttribute('data-index', index);
       listItem.innerHTML=`
       <span class="number">${index+1}</span>
       <div class="draggable" draggable="true">
       <p class="person-name">${person}</p>
       </div>
        `;


        listItems.push(listItem);
        draggable_list.appendChild(listItem);
    })
}