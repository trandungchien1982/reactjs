
import './custom.css'

function ClickComponents() {
  const handleClick = (event) => {
    alert(
      "Click with event name: "
      + event.target.name
      + ", id: " + event.target.id
    );
  };

  const handleClickPanel = (event) => {
      console.log(
        "Handle click event from Panel: tag = "
        + event.target.tagName
        + ", id: " + event.target.id
      );

      const millis = Date.now() ;
      event.target.style.background = (millis % 3 == 0) ? "red" : millis % 3 == 1 ? "blue" : "green";
    };

  const items = [
     {id: "idx_01", name: "name_01"}
    ,{id: "idx_02", name: "name_02"}
    ,{id: "idx_03", name: "name_03"}
  ];

  const handleDeleteItem = (itemId, event) => {
      console.log('Đang xóa item với ID:', itemId);
      console.log('Sự kiện gốc voi name = :', event.target.name); // Bạn vẫn có thể truy cập event
      alert("Xoa item voi id: " + itemId + ", name = " +  event.target.name);
  };

  return (
    <div style={{padding: "5px", margin: "5px", background: "lightgreen"}} name={"mainPanel"} id={"idPanel"} onClick={handleClickPanel}>
      <p>Button:
        <button id={"ID_01"} name={"NutNhan01"} onClick={handleClick}>Click 01</button>
      </p>

      <div>List Buttons:
        <ul>
            {items.map(item => (
              <li key={item.id} style={{margin: "5px"}}>
                {item.name}
                <button name={item.name} onClick={(event) => handleDeleteItem(item.id, event)}>
                  Xóa
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default ClickComponents;
