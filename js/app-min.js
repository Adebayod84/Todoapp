const addForm=document.querySelector(".add"),list=document.querySelector(".todos"),search=document.querySelector(".search input"),generateTemplate=e=>{const t=`\n  <li class="list-group-item d-flex justify-content-between align-items-center">\n    <span>${e}</span>\n    <i class="far fa-trash-alt delete"></i>\n  </li>\n`;list.innerHTML+=t};addForm.addEventListener("submit",e=>{e.preventDefault();const t=addForm.add.value.trim();t.length&&(generateTemplate(t),addForm.reset())}),list.addEventListener("click",e=>{e.target.classList.contains("delete")&&e.target.parentElement.remove()});const filterTodos=e=>{Array.from(list.children).filter(t=>!t.textContent.toLowerCase().includes(e)).forEach(e=>e.classList.add("filtered")),Array.from(list.childern).filter(t=>t.textContent.toLowerCase().includes(e)).forEach(e=>e.classList.remove("filtered"))};search.addEventListener("keyup",()=>{const e=search.value.trim().toLowerCase();filterTodos(e)});