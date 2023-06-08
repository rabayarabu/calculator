function Calculator(property) {
  const { name, className } = property;
  return (
    <button className={className} type="submit">{name}</button>
  );
}

export default Calculator;
