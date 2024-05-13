import React, { useState, useEffect } from "react";

const TestOne = () => {
  const [todo, setTodo] = useState(null); // Используем состояние для хранения данных

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error(response.statusText);
      })
      .then((data) => {
        setTodo(data); // Обновляем состояние с полученными данными
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []); // Пустой массив зависимостей, чтобы выполнить эффект только один раз после монтирования

  return (
    <div>
      {todo ? ( // Проверяем, есть ли данные
        <div>
          <h1>Title: {todo.title}</h1>
          <p>Completed: {todo.completed ? "Yes" : "No"}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TestOne;
