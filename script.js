const con = document.querySelector(".con");
const title = document.querySelector(".title");
const discription = document.querySelector(".discription");
const form = document.querySelector("form");
const task = localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):[];
showAll();
function showAll(){
    task.forEach((element,index) => {
    let div = document.createElement("div");
    div.setAttribute("class","tasks")
    let innerdiv = document.createElement("div");
    innerdiv.setAttribute("class","text")
    let p = document.createElement("p");
    p.innerText = element.title;
    innerdiv.append(p);

    let span = document.createElement("span");
    span.innerText = element.discription;
    innerdiv.append(span);

    let dltbtn = document.createElement("button");
    dltbtn.setAttribute("class","dltbtn")
    dltbtn.innerText = "-";
    dltbtn.addEventListener("click",()=>{
        removeAll();
        task.splice(index,1);
        localStorage.setItem("task",JSON.stringify(task));
        showAll();
    })
    div.append(innerdiv);
    div.append(dltbtn);
    con.append(div);
    });
}
function removeAll(){
    task.forEach(val=>
        {
            const div=document.querySelector(".tasks");
            div.remove();
        })
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    removeAll();
    task.push({
        title: title.value,
        discription : discription.value
    });
    localStorage.setItem("task",JSON.stringify(task));
    showAll();
})
