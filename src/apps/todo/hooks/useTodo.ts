import { reactive, ref } from 'vue'

export default function useTodo() {
  const newTodo = ref('')
  const todoList: Array<string> = reactive([])

  const addTodo = () => {
    const value = newTodo.value && newTodo.value.trim()
    todoList.push(value)
    newTodo.value = ''
    console.log(todoList)
  }

  return { newTodo, todoList, addTodo }
}
