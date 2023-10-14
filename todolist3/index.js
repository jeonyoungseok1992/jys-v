let todoList = localStorage.getItem('listKey') ? JSON.parse(localStorage.getItem('listKey')) : [];
//1)localStorage.getItem(key)는 브라우저에 key로 저장되어있는 데이터를 가져오는 기능
//  todoList라는 변수에
//  localStorage.getItem('listKey') => 브라우저에 listKey라는 키 이름으로 저장된 객체가 있는지 확인
//  있으면
//  JSON.parse(localStorage.getItem('listKey')) => 브라우저에 저장 되어있는 listKey라는 키 이름으로 된 객체를 가져온다
//  없으면
//  [] => 빈 배열을 가져온다

//window.localStorage.clear();
window.onload = function(){
    //모든 dom이 세팅되면 drawTodoList함수를 호출하여 localstorage로부터 받아온 todoList목록 그려주기
    drawTodoList(todoList);
 }


function addTodo(ev){
    const inputValue = document.getElementById('inputBox').value;

    if(inputValue.trim() == ""){
        return;
    }
    //공백 엔터 클릭 시 추가 안되게끔

    if (!ev.keyCode || ev.keyCode === 13) {
        todoList.push({
            title : inputValue, 
            date : new Date()})
        //input창에 입력한 value값을 입력할때마다 즉, addTodo가 실행 될때마다 todoList배열에 객체로 저장
        //변수에 객체 배열 함수 다 넣을 수 있으니 가능
        // inputValue = ["value값", {title : inputValue, 
                                // date : new Date()}]
                          

        document.getElementById('inputBox').value = '';
        //리스트 추가 후 비워주기

        localStorage.setItem('listKey', JSON.stringify(todoList));
        //listKey라는 키 이름으로 배열todoList를 JSON형식으로 바꿔서 저장
        //localStorage.setItem() 이게 브라우저에 데이터를 저장하는 기능
        // JS형식으로 된 todoList이라는 데이터를 JSON형식으로 바꿔서 저장하는데 기능
        // 반대로 localStorage.getItem()는 브라우저에 있는 데이터를 
        // 그래서 우리가 편한 JS형식으로 바꿔서 가져오려는게 
        // JSON.parse(localStorage.getItem(key))

        drawTodoList(todoList);
        }
   
      
}  





function drawTodoList(list){
        const vview = document.getElementById('viewBox');
        vview.innerHTML = ''; // 기존 목록 지우기
    
            for (let unit of list) {

                const viewinput = document.createElement('div');
                viewinput.className = 'newView';
                viewinput.innerText = unit.title;
                viewinput.isDone = false;
                
                const xbutton = document.createElement('button');
                xbutton.innerHTML = "<i class='fa-solid fa-xmark'></i>";
                viewinput.appendChild(xbutton); 
                

                vview.appendChild(viewinput);  

                viewinput.onclick = function oneLine(){
                    if(viewinput.classList.contains('doneLine')){
                        viewinput.classList.remove('doneLine');
                    } else{
                        viewinput.className += ' doneLine';
                    }
                }

                xbutton.onclick = function clickDelete() {
                    const titleToRemove = this.parentNode.innerText;
                    
                    list = list.filter(function(data) {
                        return data.title !== titleToRemove;
                    });
                
                    localStorage.setItem('listKey', JSON.stringify(list));
                    this.parentNode.remove();
                }
    



            
        }
}

