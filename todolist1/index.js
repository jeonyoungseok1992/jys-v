//할일이 담겨있는 목록
let todoList = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [];
console.log(todoList);
window.onload = function(){
    //모든 dom이 세팅되면 drawTodoList함수를 호출하여 localstorage로부터 받아온 todoList목록 그려주기
    drawTodoList(document.getElementsByClassName('todo-list')[0], todoList);
}
//할일 추가 + ui에 바로 그리기
/*
function addTodo(){
    const searchInput = document.getElementById('search-input');

    if (searchInput.value.replace(/ /g,"") === '')
        return;

    const todoListUl = document.getElementsByClassName('todo-list')[0];
    // todoListUl.innerHTML += ('<li>' +  searchInput.value + '</li>');

    const toDoLi = document.createElement('li');
    toDoLi.isDone = false;
    toDoLi.innerHTML = searchInput.value;
    todoListUl.appendChild(toDoLi);
    searchInput.value = '';

    const removeToDoli = document.createElement('div');
    removeToDoli.className = 'todo-remove-btn';
    removeToDoli.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    toDoLi.appendChild(removeToDoli);

    toDoLi.onclick = function(ev){     
        //클릭될때마다 isDone값을 반대로 변경해줌
        ev.target.isDone = !ev.target.isDone;

        //isDone값에 따라서 done class를 부여해주거나 삭제해줌
        if (ev.target.isDone) {
            ev.target.className = 'done';
        } else {
            ev.target.classList.remove('done');
        }
    }

    removeToDoli.onclick = function(ev){
        removeEvent(ev);
        this.parentNode.remove();
    }
}
*/

//데이터만 할일에 추가
function addTodo(){
    //서치input에서 추가할 할일을 가지고온다
    const todo = document.getElementById('search-input').value;

    //할일이 입력되지 않았다면 함수를 끝낸다.
    if (todo.replace(/ /g,"") === '')
        return;

    todoList.push({
        title : todo, 
        date : new Date()
    })

    document.getElementById('search-input').value = '';
    localStorage.setItem('todoList', JSON.stringify(todoList))
    console.log(todoList)

    // console.log(JSON.parse(JSON.stringify(todoList)))

    //최종적인 할일목록의 완성
    drawTodoList(document.getElementsByClassName('todo-list')[0], todoList);
}

//할일목록 배열을 통해서 전체적인 할일목록 ui를 생성
//할일목록 todoList와 그려줄 영역 parent를 넘겨받아
//parent에 todoList를 그려준다.
function drawTodoList(parent, list){
    $(parent).empty();
    
    for (let unit of list) {
        // 할일목록을 표시해줄 li태그생성
        const toDoLi = document.createElement('li');
        toDoLi.isDone = false;
        toDoLi.innerHTML = unit.title;
        parent.appendChild(toDoLi);

        //할일목록을 지워줄 버튼을 만들어서 li태그 자식노드로 추가
        const removeToDoli = document.createElement('div');
        removeToDoli.className = 'todo-remove-btn';
        removeToDoli.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        toDoLi.appendChild(removeToDoli);

        toDoLi.onclick = function(ev){     
            //클릭될때마다 isDone값을 반대로 변경해줌
            ev.target.isDone = !ev.target.isDone;

            //isDone값에 따라서 done class를 부여해주거나 삭제해줌
            if (ev.target.isDone) {
                ev.target.className = 'done';
            } else {
                ev.target.classList.remove('done');
            }
        }

       
        removeToDoli.onclick = function(ev){
            console.log(new Date(unit.date).getTime());
            removeEvent(ev);

            //ui에서 삭제(dom에서 제거)
            this.parentNode.remove();

            //데이터에서 삭제
            
            // let newTodoList = [];
            // for (let data of todoList) {
            //     let tmpDate = new Date(data.date).getTime();
            //     let unitTime = new Date(unit.date).getTime();

            //     if (tmpDate !== unitTime)
            //         newTodoList.push(data);
            // }

            // todoList = newTodoList;

            //filter메소드 => 배열에서 조건에 맞는 값만 추릴때 사용
            //특정 자료를 삭제할때 많이 사용한다.
            todoList = todoList.filter(function(data){
                let tmpDate = new Date(data.date).getTime();
                let unitTime = new Date(unit.date).getTime();
         
                return (tmpDate !== unitTime);
            })
            localStorage.setItem('todoList', JSON.stringify(todoList))
            console.log(todoList)
        }
    }

}

function removeEvent(ev){
    ev.preventDefault(); //이벤트의 기본동작을 중단한다.   return false;
    ev.stopPropagation(); //현재 이벤트가 상위로 전파되지 않도록 중단한다.
    ev.stopImmediatePropagation(); // 현재 이벤트가 상위뿐만아니라 현재레벨에 걸린 다른 이벤트도 동작하지 않도록 중단한다.

}