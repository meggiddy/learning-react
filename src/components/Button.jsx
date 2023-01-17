function AddButton({ color, text, onAdd }) {
  return (
    <button className="btn" style={{ backgroundColor: color }} onClick={onAdd}>
      {text}
    </button>
  );
}

export default AddButton;
