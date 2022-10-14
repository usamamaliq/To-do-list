import _ from 'lodash';
import './style.css';

  const toDo = [
    {
      description: 'Water the plants',
      completed: false,
      index: 0,
    },
    {
      description: 'Walk my dog',
      completed: false,
      index: 1,
    },
    {
      description: 'coding challenges',
      completed: true,
      index: 2,
    },
  ];

  const toDoList= document.querySelector('.task-list');
  const listGenerator = () => {
   
    for (let i=0; i<=toDo.length; i+=1)
    {
      toDoList.innerHTML+=`<input type="checkbox" class="list-cont" id="${toDo[i].index}" name="task1" value="Bike">
      <label class="label-cont" for="${toDo[i].index}">${toDo[i].description}</label>
      <hr>`;
    }
    
  };

  listGenerator();
  