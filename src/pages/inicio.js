import React from 'react'

const inicio = () => {
  return (
    <div>
  <div>
  <script src="C:\Users\Usuario\Desktop\taskManager\taskmanager\public\script.js"></script>
      <div class="form">
        <h1>Simple Scrum Board</h1>
        <input type="text" placeholder="Type Task" id="task" />
        <button class="button" id="add-button">Add Task</button>
      </div>
      <div class="flex">
        <div class="scrum-board backlog">
          <h2>Backlog</h2>
          <div class="input-group overflow">
            <span>Wash dishes</span>
            <a href="#" class="drag">Drag</a>
            <div class="margin-top-10">
               <button class="button button-backlog">Backlog</button><button class="button button-progress">In Progress</button><button class="button button-done">Done</button><button class="button button-delete">Delete</button>
            </div>
          </div>
          <div class="input-group overflow">
            <span>Make bed</span>
            <a href="#" class="drag">Drag</a>
            <div class="margin-top-10">
              <button class="button button-backlog">Backlog</button><button class="button button-progress">In Progress</button><button class="button button-done">Done</button><button class="button button-delete">Delete</button>
            </div>
          </div>
          <div class="input-group overflow">
            <span>Cook dinner</span>
            <a href="#" class="drag">Drag</a>
            <div class="margin-top-10">
              <button class="button button-backlog">Backlog</button><button class="button button-progress">In Progress</button><button class="button button-done">Done</button><button class="button button-delete">Delete</button>
            </div>
          </div>
          <div class="input-group overflow">
            <span>Ask wife permission to go on trip</span>
            <a href="#" class="drag">Drag</a>
            <div class="margin-top-10">
              <button class="button button-backlog">Backlog</button><button class="button button-progress">In Progress</button><button class="button button-done">Done</button><button class="button button-delete">Delete</button>
            </div>
          </div>        
        </div>
  
        <div class="scrum-board in-progress">
          <h2>In progress</h2>
        </div>
        <div class="scrum-board done">
          <h2>Done</h2>
        </div>
  
      </div>
    </div>
        
    </div>
  )
}

export default inicio