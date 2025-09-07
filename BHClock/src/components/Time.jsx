function Time() {
  const currentDate = new Date();

  return (
    <p>
      This is the current time: {currentDate.toLocaleTimeString()}, Date -{" "}
      {currentDate.toLocaleDateString()}
    </p>
  );
}

export default Time;
