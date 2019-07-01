
// 初期State
const initialState = [
  {
    id: 0,
    text: "actiontext",
    completed: false
  },
  {
    id: 1,
    text: "actiontext22",
    completed: false
  }]

// Reducer処理
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // SET_VISIBILITY_FILTER
    case "type1":
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}

export default reducer