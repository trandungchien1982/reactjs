
import './custom.css'

function ChangeComponents() {
  const handleInputChange = (event) => {
      console.log('Giá trị input thay đổi:', event.target.value);
  };

  return (
    <div style={{padding: "5px", margin: "5px", background: "lightmagenta"}}>
      <p>Input something ... <br/>
        <input type="text" onChange={handleInputChange} placeholder="Gõ gì đó..." />
      </p>
    </div>
  )
}

export default ChangeComponents;
