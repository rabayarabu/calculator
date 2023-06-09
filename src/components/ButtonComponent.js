function Calculator(property) {
  const { name, className, onClick } = property;
  return (
    <button onClick={(e) => onClick(e, name)} className={className} type="submit">{name}</button>
  );
}

export default Calculator;
