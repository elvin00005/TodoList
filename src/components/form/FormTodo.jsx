import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/TodoSlice";
import { hobby, users } from "../../utilits/const";

function FormTodo() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onBlur" });
  const onSubmit = (data) => {
    dispatch(
      todoActions.addTodo({
        ...data,
        id: Math.random(),
        complited: false,
      })
    );
    reset();
  };
  return (
    <Form className="p-2" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicTodo">
        <Form.Label>Todo</Form.Label>
        <Form.Control
          {...register("todo", {
            required: "Поле обязательно к заполнению",
            minLength: {
              value: 5,
              message: "Минимум 5 символов",
            },
          })}
          placeholder="Enter todo"
        />
        <p style={{ color: "red" }}> {errors?.todo?.message}</p>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUsers">
        <Form.Label>User</Form.Label>
        <Form.Select aria-label="Default select example" {...register("user")}>
          {users.map((user) => {
            return <option key={Math.random()}>{user.value}</option>;
          })}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUsers">
        <Form.Label>Hobby</Form.Label>
        <Form.Select aria-label="Default select example" {...register("hobby")}>
          {hobby.map((hobby) => {
            return <option key={Math.random()}>{hobby.value}</option>;
          })}
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isValid}>
        Submit
      </Button>
    </Form>
  );
}

export default FormTodo;
