import './Todos.css';

const Todos = ({ todos, handleDelete }) => {
  return (
    <section className="todo">
      {todos.map((todo) => (
        <ul className="todo__list" key={todo.id}>
          <li className="todo__name">{todo.name}</li>
          <button
            className="delete__button"
            onClick={() => handleDelete(todo.id)}
          >
            Delete
          </button>
        </ul>
      ))}
    </section>
  );
};

export default Todos;
