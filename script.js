let tasks=[]
let studyTasks=[]
let exerciseTasks=[]
let mixedTasks=[]

function startAI(){

let type=prompt(
"Choose plan:\n1 Study\n2 Exercise\n3 Mixed"
)

if(type==1){

generateStudy()

}

else if(type==2){

generateExercise()

}

else{

generateMixed()

}

}

/* STUDY PLAN */

function generateStudy(){

let level=prompt("School / College / Graduation?")
let subjects=prompt("Subjects (comma separated)")
let hours=prompt("Daily study hours?")
let wake=prompt("Wake up time?")

let subjectList=subjects.split(",")

studyTasks=[]

for(let i=0;i<subjectList.length;i++){

studyTasks.push({

name:subjectList[i]+" Study",

time:(9+i)+":00",

duration:60

})

}

renderStudy()

}

/* EXERCISE PLAN */

function generateExercise(){

let goal=prompt("Goal? Weight loss / Muscle / Fitness")
let days=prompt("How many workout days?")
let time=prompt("Workout minutes per day?")

exerciseTasks=[

{ name:"Warmup", time:"07:00", duration:10 },

{ name:"Workout", time:"07:10", duration:time }

]

renderExercise()

}

/* MIXED PLAN */

function generateMixed(){

mixedTasks=[

{ name:"Morning Exercise", time:"07:00", duration:30 },

{ name:"Study Session", time:"09:00", duration:60 },

{ name:"Revision", time:"14:00", duration:45 }

]

renderMixed()

}

/* RENDER FUNCTIONS */

function renderStudy(){

let list=document.getElementById("studyList")

list.innerHTML=""

studyTasks.forEach(t=>{

let li=document.createElement("li")

li.innerHTML=`
<b>${t.name}</b><br>
⏰ ${t.time}<br>
⏳ ${t.duration} min
`

list.appendChild(li)

})

}

function renderExercise(){

let list=document.getElementById("exerciseList")

list.innerHTML=""

exerciseTasks.forEach(t=>{

let li=document.createElement("li")

li.innerHTML=`
<b>${t.name}</b><br>
⏰ ${t.time}<br>
⏳ ${t.duration} min
`

list.appendChild(li)

})

}

function renderMixed(){

let list=document.getElementById("mixedList")

list.innerHTML=""

mixedTasks.forEach(t=>{

let li=document.createElement("li")

li.innerHTML=`
<b>${t.name}</b><br>
⏰ ${t.time}<br>
⏳ ${t.duration} min
`

list.appendChild(li)

})

}

/* MANUAL TASK */

function addManual(){

let name=document.getElementById("taskName").value
let date=document.getElementById("taskDate").value
let time=document.getElementById("taskTime").value
let duration=document.getElementById("taskDuration").value

tasks.push({name,date,time,duration})

renderManual()

}

function renderManual(){

let list=document.getElementById("taskList")

list.innerHTML=""

tasks.forEach(t=>{

let li=document.createElement("li")

li.innerHTML=`
<b>${t.name}</b><br>
📅 ${t.date}<br>
⏰ ${t.time}<br>
⏳ ${t.duration} min
`

list.appendChild(li)

})

}

/* TABS */

function showTab(tab){

document.getElementById("studyContent").style.display="none"
document.getElementById("exerciseContent").style.display="none"
document.getElementById("mixedContent").style.display="none"

if(tab=="study")
document.getElementById("studyContent").style.display="block"

if(tab=="exercise")
document.getElementById("exerciseContent").style.display="block"

if(tab=="mixed")
document.getElementById("mixedContent").style.display="block"

}
