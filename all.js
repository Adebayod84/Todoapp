const addForm=document.querySelector(".add"),list=document.querySelector(".todos"),search=document.querySelector(".search input"),generateTemplate=e=>{const t=`\n  <li class="list-group-item d-flex justify-content-between align-items-center">\n    <span>${e}</span>\n    <i class="far fa-trash-alt delete"></i>\n  </li>\n`;list.innerHTML+=t};addForm.addEventListener("submit",e=>{e.preventDefault();const t=addForm.add.value.trim();t.length&&(generateTemplate(t),addForm.reset())}),list.addEventListener("click",e=>{e.target.classList.contains("delete")&&e.target.parentElement.remove()});const filterTodos=e=>{Array.from(list.children).filter(t=>!t.textContent.toLowerCase().includes(e)).forEach(e=>e.classList.add("filtered")),Array.from(list.childern).filter(t=>t.textContent.toLowerCase().includes(e)).forEach(e=>e.classList.remove("filtered"))};search.addEventListener("keyup",()=>{const e=search.value.trim().toLowerCase();filterTodos(e)});
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {

const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
`;

list.innerHTML += html;

};

addForm.addEventListener('submit', e => {

  e.preventDefault();
  const todo = addForm.add.value.trim();

  if(todo.length) {
   generateTemplate(todo);
   addForm.reset();
  }

});

list.addEventListener('click', e => {

  if(e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
})


const filterTodos = (term) => {

  Array.from(list.children)
   .filter((todo) => !todo.textContent.toLowerCase().includes(term))
   .forEach((todo) => todo.classList.add('filtered'));

   Array.from(list.childern)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));

};


search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});