import '../index.css';
import Calculator from './ButtonComponent';

function CalculatorDesign() {
  return (
    <div className="calculator">
      <div className="result">100</div>
      <div className="keyboard">
        <Calculator name="AC" className="nosign" />
        <Calculator name="+/-" className="nosign" />
        <Calculator name="%" className="nosign" />
        <Calculator name="÷" className="side" />
        <Calculator name="7" className="nosign" />
        <Calculator name="8" className="nosign" />
        <Calculator name="9" className="nosign" />
        <Calculator name="*" className="side" />
        <Calculator name="4" className="nosign" />
        <Calculator name="5" className="nosign" />
        <Calculator name="6" className="nosign" />
        <Calculator name="-" className="side" />
        <Calculator name="1" className="nosign" />
        <Calculator name="2" className="nosign" />
        <Calculator name="3" className="nosign" />
        <Calculator name="+" className="side" />
        <Calculator name="0" className="span" />
        <Calculator name="." className="nosign" />
        <Calculator name="=" className="side" />

      </div>
    </div>
  );
}

export default CalculatorDesign;
