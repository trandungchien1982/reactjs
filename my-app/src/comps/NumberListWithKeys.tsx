const numbers = [1, 2, 3, 4, 5, 6, 7];

function NumberListWithKeys() {
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      Item with key - {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
export default NumberListWithKeys;