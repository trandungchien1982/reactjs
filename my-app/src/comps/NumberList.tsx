const numbers = [1, 2, 3, 4, 5];

function NumberList() {
  const listItems = numbers.map((number) =>
    <li>
      Item - {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
export default NumberList;