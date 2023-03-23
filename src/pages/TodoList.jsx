import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { useSelector } from "react-redux";
import { Col, Row, Form } from "react-bootstrap";

import Cards from "../components/card/Cards";
import { hobby } from "../utilits/const";

const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  const [filterdHobby, setFilteredHobby] = useState("All");
  const [findTodo, setFindTodo] = useState("");
  const [filterComplited, setFilterComplited] = useState(false);

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
      <h1 className="text-center">My Todo</h1>
      <Form.Group className="mb-3 fs-3 fw-bold" controlId="formBasicEmail">
        <Form.Label>Find Todo</Form.Label>
        <Form.Control
          placeholder="Enter todo"
          value={findTodo}
          onChange={({ target }) => setFindTodo(target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3 fs-3 fw-bold">
        <Form.Label>Hobby</Form.Label>
        <Form.Select
          value={filterdHobby}
          onChange={({ target }) => {
            setFilteredHobby(target.value);
          }}
        >
          <option>All</option>
          {hobby.map((hobby) => {
            return <option key={Math.random()}>{hobby.value}</option>;
          })}
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Label className="me-2 fs-3 fw-bold">
          Filtered complited
        </Form.Label>
        <input
          id="complited"
          type="checkbox"
          checked={filterComplited}
          onChange={({ target }) => setFilterComplited(target.checked)}
        />
      </Form.Group>
      <Row className="m-4">
        {Object.keys(todosByUser).map((user) => (
          <Col key={user} className="bg-light">
            <h2>{user}'s Todos</h2>
            {todosByUser[user]
              .filter((todo) => {
                const isMatched = todo.todo
                  .toLowerCase()
                  .includes(findTodo.toLowerCase());

                const isComplited = filterComplited ? todo.complited : true;
                const isFilteredHobby =
                  filterdHobby === "All"
                    ? todo.hobby
                    : filterdHobby === todo.hobby;
                return isMatched && isComplited && isFilteredHobby;
              })
              .map((todo) => (
                <Cards
                  key={todo.id}
                  id={todo.id}
                  user={todo.user}
                  todo={todo.todo}
                  complited={todo.complited}
                  hobby={todo.hobby}
                  data={todo.data}
                />
              ))}
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default TodoList;
