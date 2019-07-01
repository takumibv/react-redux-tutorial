
// const ADD_TODO = 'ADD_TODO'
// {
//   type: ADD_TODO,
//   text: 'Build my first Redux app'
// }

let nextTodoId = 0

export const addTodo= (text) => ({
  {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
})
