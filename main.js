document.title="Lab7"

document.getElementById("h1").innerHTML = "Lab7 Assignment";
document.getElementById("h1").style.color="blue";

const x = document.createElement("HR");
document.body.appendChild(x);


const text1 = document.createElement("h2");
text1.style.color='red';
text1.innerText = "Task";
document.body.appendChild(text1);

const para1 = document.createElement("p");
para1.innerText = "In this task you have to reproduce this HTML page as is using only JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
document.body.appendChild(para1);

const item1 =document.createElement ('li');
item1.classList.add('odd');
item1.innerHTML = "find elements in the DOM (<b>5 points</b>);";
document.body.appendChild(item1);

const item2 =document.createElement ('li');
item2.classList.add('even');
item2.innerHTML = "create/add/remove element (<b>5 points</b>);";
document.body.appendChild(item2);

const item3 =document.createElement ('li');
item3.classList.add('odd');
item3.innerHTML = "change content of the elements (<b>5 points</b>);";
document.body.appendChild(item3);

const item4 =document.createElement ('li');
item4.classList.add('even');
item4.innerHTML = "change styles of the elements (<b>5 points</b>);";
document.body.appendChild(item4);

const item5 =document.createElement ('li');
item5.classList.add('odd');
item5.innerHTML = "change attributes of the elements (<b>5 points</b>);";
document.body.appendChild(item5);

const item6 =document.createElement ('li');
item6.classList.add('even');
item6.innerHTML = "change classes of the elements (<b>5 points</b>);";
document.body.appendChild(item6);

const y = document.createElement("HR");
document.body.appendChild(y);


const text2 = document.createElement("h2");
text2.style.color='red';
text2.innerText = "Submission";
document.body.appendChild(text2);

const para2 = document.createElement("p");
para2.innerText = "To submit your work, follow these instructions:";
document.body.appendChild(para2);

const item7 =document.createElement ('li');
item7.classList.add('odd');
item7.innerHTML = "Create a new repository on Github, named <b>lab7 (1 point)</b>.";
document.body.appendChild(item7);

const item8 =document.createElement ('li');
item8.classList.add('even');
item8.innerHTML = "Clone this repository to your local machine and work inside it.";
document.body.appendChild(item8);

const item9 =document.createElement ('li');
item9.classList.add('odd');
item9.innerHTML = "Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with 'Hello, World!' message (<b>1 point</b>).";
document.body.appendChild(item9);

const item10 =document.createElement ('li');
item10.classList.add('even');
item10.innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).";
document.body.appendChild(item10);

const item11 =document.createElement ('li');
item11.classList.add('odd');
item11.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note:place your script at the end of the <b>body</b> section).";
document.body.appendChild(item11);

const item12 =document.createElement ('li');
item12.classList.add('even');
item12.innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).";
document.body.appendChild(item12);

const item13 =document.createElement ('li');
item13.classList.add('odd');
item13.innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>).";
document.body.appendChild(item13);

const z = document.createElement("HR");
document.body.appendChild(z);