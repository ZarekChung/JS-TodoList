var getArrayList = [];

var btn = document.querySelector(".send");
btn.addEventListener('click',createList,false);
updateList();

 function updateList() {
    var toDoList =[];
    var getList = localStorage.getItem('mylist');

    if(getList)
    {
        getArrayList = JSON.parse(getList);
        showList();
        var list = document.querySelector(".list"); 
        list.addEventListener('click',deleteList,false);
    }else{
        getArrayList = toDoList;
    }        
}

function deleteList(e) {
    if(e.target.nodeName ==='INPUT')
    {
        var num = e.target.parentNode.parentNode.dataset.num;
        console.log(num); 
        getArrayList.splice(num,1);
        var newStr = JSON.stringify(getArrayList);
        localStorage.setItem('mylist',newStr);
        updateList();
    }
}

function showList() {
    var ul = document.querySelector(".list"); 
    var str ='';
    for (var i =0; i < getArrayList.length ; i++) {
        str +='<li data-num="'+i+'"><div ><input type="button" value="刪除"> ' + getArrayList[i] + '</div></li>'
     }
     ul.innerHTML = str;   
}

function createList() {
    var str = document.querySelector(".text").value;
    getArrayList.push(str);

    var listStr = JSON.stringify(getArrayList);
    localStorage.setItem('mylist',listStr);
    updateList();
    
    var strInput = document.querySelector(".text");
    strInput.value ='';
}

