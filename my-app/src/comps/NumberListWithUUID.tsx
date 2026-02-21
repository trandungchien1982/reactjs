const numbers = [1, 2, 3, 4, 5, 6, 7];

function getUUID() {
    // Get the timestamp and convert
    // it into alphanumeric input
    return Date.now().toString(36);
}

function NumberListWithUUID() {
  const listItems = numbers.map((number) =>
    <li key={getUUID()}>
      Item with UUID key - {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
export default NumberListWithUUID;