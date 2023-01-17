import AddButton from "./Button";

function Header({ onAdd, showAdd }) {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <AddButton
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onAdd={onAdd}
      />
    </header>
  );
}

export default Header;
