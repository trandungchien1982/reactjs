
import './custom.css'

function DoubleClickComponents() {
  const handleDbClick = (event) => {
    alert(
      "DoubleClick with event name: "
      + event.target.name
      + ", id: " + event.target.id
    );
  };

  return (
    <div style={{padding: "5px", margin: "5px", background: "lightyellow"}}>
      <p>Button:
        <button id={"ID_01"} name={"NutNhan01"} onDoubleClick={handleDbClick}>DB Click 01</button>
      </p>
    </div>
  )
}

export default DoubleClickComponents;
