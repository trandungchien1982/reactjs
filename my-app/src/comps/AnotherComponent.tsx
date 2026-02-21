import useToggle from './utils'

function AnotherComponent() {
  // Component khác cũng có thể sử dụng lại cùng logic
  const [strVal, isVisible, toggleVisibility] = useToggle(true);

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Ẩn nội dung' : 'Hiện nội dung'}
      </button>
      <br/>strVal: {strVal}
      {/* Sử dụng conditional rendering dựa trên state từ hook */}
      {isVisible && <p>Nội dung này có thể ẩn/hiện.</p>}
    </div>
  );
}
export default AnotherComponent;