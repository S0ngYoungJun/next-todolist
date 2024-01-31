"use client"
import { useState } from 'react';
import TodoList from '../components/TodoList';

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]); // 초기 상태를 빈 문자열 배열로 지정
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>추가</button>
      <TodoList todos={todos} setTodos={setTodos} /> {/* setTodos를 전달 */}
    </div>
  );
}