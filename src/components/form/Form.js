import './Form.css';

const Form = ({ input, setInput, handleAdd }) => {
  const disable = input.length ? false : true;
  return (
    <form action="input" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button disabled={disable} className="add__button" onClick={handleAdd}>
        Add
      </button>
    </form>
  );
};

export default Form;
