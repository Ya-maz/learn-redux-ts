import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypeSelector } from "../../hooks/useTypeSelector";

const TodoList: React.FC = () => {
  const { page, error, limit, loading, todos } = useTypeSelector(
    (state) => state.todos
  );
  const { fetchTodos, setTodopage } = useActions();
  const pages = [1, 2, 3, 4, 5];
  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return (
      <div
        style={{
          border: "5px dashed grey",
          margin: "0 10px",
          width: "400px",
        }}
      >
        <h1>Идет загрузка...</h1>
      </div>
    )
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div
      style={{
        border: "5px dashed grey",
        margin: "0 10px",
        width: "400px",
      }}
    >
      <h1>Todos</h1>
      {todos.map((todo) => (
        <h6 key={todo.id}>{todo.title}</h6>
      ))}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {pages.map((numberOfpage) => (
          <div
            key={numberOfpage}
            onClick={() => setTodopage(numberOfpage)}
            style={{
              border:
                numberOfpage === page ? "2px solid black" : "1px solid black",
              padding: "6px",
              margin: "1px",
              width: "30px",
              height: "30px",
            }}
          >
            {numberOfpage}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
