import { useState } from 'react'
import './App.css'
import AddTodo from './component/AddTodo'
import Todos from './component/Todos'
import { store } from './app/store.js'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <AddTodo/>
      <Todos/>
    </Provider>
  )
}

export default App
