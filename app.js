const addbtn = document.querySelector("#add") //add task button
const addopt = document.querySelector(".input") // input from and two related buttons
const closebtn = document.querySelector("#close") //close button
const tasklist = document.querySelector('.task-list')
const input = document.querySelector('#task') //inputs from input box
const insert = document.querySelector('#submit') //add button
const clr= document.querySelector('#clear')
const body = document.querySelector('body')
const notaskmsg=document.querySelector('.notask')
const horizontal_line =document.querySelector('.line')
horizontal_line.style.display='none'

addbtn.addEventListener('click', function () {
    addopt.style.transitionDelay = '150ms'
    tasklist.style.transitionDelay = '0ms'
    horizontal_line.style.transitionDelay = '0ms'
    if (body.clientWidth <= 900) {
        tasklist.style.top = '260px'
        horizontal_line.style.top = '272px'
    } else {
        horizontal_line.style.top = '292px'
        tasklist.style.top = '280px'
    }
    addopt.style.opacity = 1
    insert.style.cursor = 'pointer'
    closebtn.style.cursor = 'pointer'
    tasklist.style.height="54vh";
})

closebtn.addEventListener('click', function () {
    addopt.style.transitionDelay = '0ms'
    addopt.style.opacity = 0
    tasklist.style.transitionDelay = '100ms'
    horizontal_line.style.transitionDelay = '100ms'
    tasklist.style.top = '150px'
    horizontal_line.style.top = '162px'
    input.value = ''
    closebtn.style.cursor = ''
    insert.style.cursor = ''
    tasklist.style.height="70vh";
})

clr.addEventListener('click', function () {
    tasklist.innerHTML=''
    notaskmsg.style.display=''
    horizontal_line.style.display='none'
})

function createtask() {
    if (input.value != '') {
        const newli = document.createElement("li");
        newli.classList.add("items");
        newli.innerHTML = `\n            <div class="tasknmark">\n                <img class="checkmark" src="https://img.icons8.com/glyph-neue/20/989898/ok--v1.png">\n                <span class="taskname">${input.value} </span>\n            </div>\n            <div class="taskbtns">\n                <button id="taskbtn"><img class="tick" src="https://img.icons8.com/glyph-neue/20/null/C3C3C3/checkmark.png"></button>\n                <button id="taskbtn"><img class="bin" src="https://img.icons8.com/glyph-neue/20/null/C3C3C3/delete.png"> </button>\n            </div>\n        `
        tasklist.insertBefore(newli, tasklist.firstChild);
        notaskmsg.style.display='none'
        horizontal_line.style.display=''
        input.value = ''

        const donebtn = newli.querySelector('.tick') //done button
        const delbtn = newli.querySelector('.bin') //delete button
        const checkmark = newli.querySelector('.checkmark')
        const task = newli.querySelector('.taskname')

        donebtn.addEventListener('mouseover', function () {
            donebtn.src = donebtn.src.replace("C3C3C3", "47CF73")
        })
        donebtn.addEventListener('mouseout', function () {
            donebtn.src = donebtn.src.replace("47CF73", "C3C3C3")
        })
        delbtn.addEventListener('mouseover', function () {
            delbtn.src = delbtn.src.replace("C3C3C3", "FF0000")
        })
        delbtn.addEventListener('mouseout', function () {
            delbtn.src = delbtn.src.replace("FF0000", "C3C3C3")
        })
        var done = false;
        donebtn.addEventListener('click', function () {
            if (!done) {
                task.style.textDecoration = 'line-through'
                task.style.color = '#979797'
                checkmark.src = checkmark.src.replace("989898", "47CF73")
                done = true
            } else {
                task.style.textDecoration = 'none'
                task.style.color = '#000000'
                checkmark.src = checkmark.src.replace("47CF73", "989898")
                done = false
            }
        })
        delbtn.addEventListener('click', function () {
            const parent = delbtn.parentNode.parentNode.parentNode;
            parent.remove();
            if (tasklist.childElementCount==0){
                notaskmsg.style.display=''
                horizontal_line.style.display='none'
            }
        })
    }
}
input.addEventListener('keydown', function (e) {
    if (e.key == "Enter") {
        createtask()

    }
})
insert.addEventListener('click', createtask)
