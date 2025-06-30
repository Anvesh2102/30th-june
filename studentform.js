document.body.style.backgroundColor="rgb(193, 247, 238)";
document.body.style.display="flex";

// let h=document.createElement("h1");
// h.textContent="Student Information Form";
// document.body.appendChild(h)

let myform=document.createElement("form");
myform.setAttribute("id","studentform");
myform.style.margin="auto";
myform.style.padding="60px 80px 60px 80px";
myform.style.borderRadius="20px"
myform.style.backgroundColor="rgba(57, 98, 151, 0.68)"

let fs=document.createElement("fieldset");
fs.style.borderRadius="20px";
fs.style.fontSize="25px";
// fs.style.display="flex"

let title=document.createElement("legend");
title.setAttribute("id","title");
title.textContent="Student Form ";

let name1=document.createElement("lable")
name1.textContent="Student Name: ";
name1.setAttribute("for","name");
let nip= document.createElement("input");
nip.setAttribute("type","text")
nip.setAttribute("placeholder","Enter your full name")
nip.setAttribute("id","name");
nip.required="true"
name1.appendChild(nip);
fs.appendChild(document.createElement("br"));
fs.appendChild(name1);
fs.appendChild(document.createElement("br"));
fs.appendChild(document.createElement("br"));

let roll=document.createElement("lable");
roll.textContent="Student rollno: ";
roll.for="roll";
let rip= document.createElement("input");
rip.type="text";
rip.placeholder="Enter your roll number";
rip.id="roll";
rip.required="true"
roll.appendChild(rip);
fs.appendChild(roll);
fs.appendChild(document.createElement("br"));
fs.appendChild(document.createElement("br"));

let age=document.createElement("lable");
age.textContent="Student Age: ";
age.for="age";
let aip= document.createElement("input");
aip.type="number";
aip.min="15";
aip.max="30";
aip.required="true"
aip.placeholder="Enter the Age";
aip.id="age";
age.appendChild(aip);
fs.appendChild(age);
fs.appendChild(document.createElement("br"));
fs.appendChild(document.createElement("br"));

let ph=document.createElement("lable");
ph.textContent="Student phno: ";
ph.for="phone";
let pip= document.createElement("input");
pip.type="tel";
pip.placeholder="Enter your mobile number";
pip.id="phone";
pip.required="true"
pip.setAttribute("pattern","[0-9]{10}");
ph.appendChild(pip);
fs.appendChild(ph);
fs.appendChild(document.createElement("br"));
fs.appendChild(document.createElement("br"));

let mail=document.createElement("lable");
mail.textContent="Student Email: ";
mail.for="mail";
let eip= document.createElement("input");
eip.type="email";
eip.placeholder="Enter your Mail";
eip.id="mail";
eip.required="true"
mail.appendChild(eip);
fs.appendChild(mail);
fs.appendChild(document.createElement("br"));
fs.appendChild(document.createElement("br"));

let gen=document.createElement("lable");
gen.setAttribute("for","gender");
gen.textContent="Gender :";
let mip=document.createElement("input");
mip.setAttribute("type","radio");
mip.setAttribute("id","male");
mip.setAttribute("value","male");
mip.setAttribute("name","gender");
mip.required="true";
let m=document.createElement("label");
m.for="male";
m.textContent=" Male"
let fip=document.createElement("input");
fip.setAttribute("type","radio");
fip.setAttribute("id","female");
fip.setAttribute("value","female");
fip.setAttribute("name","gender");
let f=document.createElement("label");
f.for="female";
f.textContent="Female";
gen.appendChild(mip);
gen.appendChild(m);
gen.appendChild(fip);
gen.appendChild(f);
fs.appendChild(gen);
fs.appendChild(document.createElement("br"));
fs.appendChild(document.createElement("br"));

let brn=document.createElement("label");
brn.textContent="Select your Branch :";
brn.for="branch";
let dd=document.createElement("select");
dd.id="branch";
dd.required="true"
let op=document.createElement("option");
op.value="";
op.textContent="Select";
op.setAttribute("disabled","true")
op.setAttribute("selected","true")
dd.appendChild(op);
let op1=document.createElement("option");
op1.value="eee";
op1.textContent="EEE";
dd.appendChild(op1);
let op2=document.createElement("option");
op2.value="ece";
op2.textContent="ECE";
dd.appendChild(op2);
let op3=document.createElement("option");
op3.value="civil";
op3.textContent="CIVIL";
dd.appendChild(op3);
let op4=document.createElement("option");
op4.value="cse";
op4.textContent="CSE";
dd.appendChild(op4);
let op5=document.createElement("option");
op5.value="csd";
op5.textContent="Data Science";
dd.appendChild(op5);
let op6=document.createElement("option");
op6.value="csm";
op6.textContent="AIML";
dd.appendChild(op6);
let op7=document.createElement("option");
op7.value="cs";
op7.textContent="Cyber Security";
dd.appendChild(op7);
brn.appendChild(dd);
fs.appendChild(brn);
fs.appendChild(document.createElement("br"));
fs.appendChild(document.createElement("br"));

const d=document.createElement("div");
d.id="divb";
d.style.textAlign="center"
const b= document.createElement("button");
b.id="button";
b.type="submit";
b.textContent="Sumit";
d.appendChild(b);
fs.appendChild(d);

myform.appendChild(fs)
fs.appendChild(title);

document.body.appendChild(myform);