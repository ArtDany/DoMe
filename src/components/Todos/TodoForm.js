import { useState } from 'react'
import Button from '../UI/Button'
import styles from './TodoForm.module.css'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  function onSubmitHandler(event) {
    event.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Введите новое задание"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button title="Задать новое задание" type="submit">
          Задать
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
