function Greetings({ receivedName, age }) {
  return (
    <div>
      <p>Name: {receivedName}</p>
      <p>Age: {age}</p>
      <p>Status: {age >= 18 ? "Adult" : "Minor"}</p>
    </div>
  );
}

export default Greetings;