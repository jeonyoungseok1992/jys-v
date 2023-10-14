const todoList = [];

function addTodo(ev){

    if (document.getElementById('search-input').value.trim() === '')
        return;

    //추가할 일정요소 만들기
    function getTodoNode(){
         //요소만들기
        //내가 입력한 값 가지고오기
        const todoTitle = document.getElementById('search-input').value;

        //todo요소만들고 붙여주기
        const todoNode = document.createElement('div'); // <div>title</div>
        todoNode.innerText = todoTitle;
        todoNode.onclick = function(){
            if (todoNode.classList == "") {
                this.className = 'done';
            } else {
                this.className = '';
            }
        }
        
        //요소삭제버튼 만들고 붙여주기
        const removeBtn = document.createElement('button'); // <button><i class='fa-solid fa-xmark'></i></button>
        removeBtn.className = 'remove-btn';
        removeBtn.innerHTML = "<i class='fa-solid fa-xmark'></i>";
        todoNode.appendChild(removeBtn); // <div>밥먹기<button><i class='fa-solid fa-xmark'></i></button></div>
        removeBtn.onclick = function(){
            this.parentNode.remove();
        }

        document.getElementById('search-input').value = '';

        return todoNode;
    }

    //엔터키를 입력했다면 해당코드 실행
    if (!ev.keyCode || ev.keyCode === 13) {
        //일정을 보여주는 영역 가져오기
        const toDoListView = document.querySelector('#todo-list-view');
        // 요소 생성하는 함수호출
        const todoNode = getTodoNode();
        toDoListView.appendChild(todoNode);
    }


}