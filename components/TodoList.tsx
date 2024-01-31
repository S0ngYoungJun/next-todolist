import TodoItem from './TodoItem';

export default function TodoList({ todos, setTodos } : any) {
  const handleEditTodo = (index : any, newText : any) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = newText;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index : any) => {
    const updatedTodos = todos.filter((_ : any, i : any) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      {todos.map((todo : any, index : any) => (
        <TodoItem
          key={index}
          text={todo}
          todoIndex={index}
          onEdit={handleEditTodo}
          onDelete={handleDeleteTodo}
        />
      ))}
    </div>
  );
}