
import useMousePosition from './utils'

// Component sử dụng custom hook
function MouseDisplayWithHooks() {
  const { x, y } = useMousePosition(); // Sử dụng custom hook để lấy dữ liệu

  return (
    <div>
      <h3>Vị trí chuột hiện tại (với Hooks): ({x}, {y})</h3>
    </div>
  );
}

export default MouseDisplayWithHooks;
