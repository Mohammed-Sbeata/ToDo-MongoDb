// window.addEventListener('load', () => {
// 	const form = document.querySelector("#new-task-form");
// 	const input = document.querySelector("#new-task-input");
// 	const list_el = document.querySelector("#tasks");


// 	form.addEventListener('submit', (e) => {
// 		e.preventDefault();

// 		const task = input.value;

// 		const task_el = document.createElement('div');
// 		task_el.classList.add('task');

// 		const task_content_el = document.createElement('div');
// 		task_content_el.classList.add('content');

// 		task_el.appendChild(task_content_el);

// 		const task_input_el = document.createElement('input');
// 		task_input_el.classList.add('text');
// 		task_input_el.type = 'text';
// 		task_input_el.value = task;
// 		task_input_el.setAttribute('readonly', 'readonly');

// 		task_content_el.appendChild(task_input_el);

// 		const task_actions_el = document.createElement('div');
// 		task_actions_el.classList.add('actions');
		
// 		const task_edit_el = document.createElement('button');
// 		task_edit_el.classList.add('edit');
// 		task_edit_el.innerText = 'Edit';

// 		const task_delete_el = document.createElement('button');
// 		task_delete_el.classList.add('delete');
// 		task_delete_el.innerText = 'Delete';

// 		task_actions_el.appendChild(task_edit_el);
// 		task_actions_el.appendChild(task_delete_el);

// 		task_el.appendChild(task_actions_el);

// 		list_el.appendChild(task_el);

// 		input.value = '';

// 		task_edit_el.addEventListener('click', (e) => {
// 			if (task_edit_el.innerText.toLowerCase() == "edit") {
// 				task_edit_el.innerText = "Save";
// 				task_input_el.removeAttribute("readonly");
// 				task_input_el.focus();
// 			} else {
// 				task_edit_el.innerText = "Edit";
// 				task_input_el.setAttribute("readonly", "readonly");
// 			}
// 		});

// 		task_delete_el.addEventListener('click', (e) => {
// 			list_el.removeChild(task_el);
// 		});
// 	});
// });

const list_el = document.querySelector("#tasks");
const input = document.getElementById("new-task-input");
const addBtn = document.getElementById('new-task-submit');

addBtn.addEventListener('click',(e)=>{
	console.log(input.value);
	fetch(`/task`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			task: input.value
			
		}),
	}).then(window.location.reload());
});

fetch('/getTasks')
.then((data)=>data.json())
.then((result)=> showData(result))

const showData = (result)=>{
	result.data.forEach(item => {
		console.log(item);
		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.textContent=`${item.task}`
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';
		

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
            const saveBtn = document.createElement('button')
		    saveBtn.className = 'save'
		    saveBtn.innerText = 'Save';
			
			fetch(`/task/edit/${item._id}`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json'},
				body: JSON.stringify({
				  task: input.value
				})
			  })
			  .then((data) => data.json())
			  .then((data) => {
				if(!data.error){
				  if (task_edit_el.innerText.toLowerCase() == "edit") {
					  task_edit_el.innerText = "Save";
					  task_input_el.removeAttribute("readonly");
					  task_input_el.focus();
				  } else {
					  task_edit_el.innerText = "Edit";
					  task_input_el.setAttribute("readonly", "readonly");
				  }
				}else{
					throw new Error(data.message);
				}

			  })
			  .catch((error) => window.alert(error.message))

			
		});


		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
			fetch(`/task/remove/${item._id}`,{
				method: 'DELETE'
			});
		});
	});
	
}