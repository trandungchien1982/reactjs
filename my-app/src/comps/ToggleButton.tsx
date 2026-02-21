import useToggle from './utils'

// Sử dụng Custom Hook trong component functional
function ToggleButton() {
  // Rất gọn gàng! Logic bật/tắt đã được tái sử dụng từ useToggle
  const [strVal, isOn, toggle] = useToggle(false);

  return (
    <button onClick={toggle}>
      Trạng thái: {isOn ? <strong>Bật</strong> : <strong>Tắt</strong>}
      <br/> strVal: {strVal}
    </button>
  );
}
export default ToggleButton;