import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { useSelector } from "react-redux";
import Cards from "../components/card/Cards";
import { Col, Row } from "react-bootstrap";

const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  const [findTodo, setFindTodo] = useState("");
  const [filterComplited, setFilterComplited] = useState(false);

  const filteredTodos = todos.filter((todo) => {
    const isMatched = todo.todo.toLowerCase().includes(findTodo.toLowerCase());
    const isComplited = filterComplited ? todo.complited : true;
    return isMatched && isComplited;
  });

  const todosByUser = todos.reduce((acc, todo) => {
    if (!acc[todo.user]) {
      acc[todo.user] = [todo];
    } else {
      acc[todo.user].push(todo);
    }
    return acc;
  }, {});

  return (
    <Layout>
      <h1>My Todo</h1>
      <label htmlFor="find">Find Todo</label>
      <input
        id="find"
        value={findTodo}
        onChange={({ target }) => setFindTodo(target.value)}
      />
      <label htmlFor="complited">Show Complited</label>
      <input
        id="complited"
        type="checkbox"
        checked={filterComplited}
        onChange={({ target }) => setFilterComplited(target.checked)}
      />
      <Row className="m-4">
        {Object.keys(todosByUser).map((user) => (
          <Col key={user}>
            <h2>{user}'s Todos</h2>
            {filteredTodos.map((todo) => (
              <Cards
                key={todo.id}
                id={todo.id}
                user={todo.user}
                todo={todo.todo}
                complited={todo.complited}
                hobby={todo.hobby}
              />
            ))}
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default TodoList;
