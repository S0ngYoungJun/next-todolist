"use client"
import { useState } from 'react';

interface TodoItemProps {
  text: string;
  todoIndex: number;
  onEdit: (index: number, newText: string) => void;
  onDelete: (index: number) => void;
}

export default function TodoItem({ text, todoIndex, onEdit, onDelete }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(todoIndex, newText); // 수정 로직을 호출하여 업데이트
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(todoIndex); // 삭제 로직을 호출하여 업데이트
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>저장</button>
        </div>
      ) : (
        <div>
          <span>{text}</span>
          <button onClick={handleEdit}>수정</button>
          <button onClick={handleDelete}>삭제</button>
        </div>
      )}
    </div>
  );
}