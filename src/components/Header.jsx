import AddButton from "./Button";

function Header({onAdd}) {
    return ( 
        <div className="header">
        <h1>Task Tracker</h1>
        <AddButton onAdd={onAdd} />
        </div>
     );
}

export default Header;