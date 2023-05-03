import './App.css';
import { useState, useEffect } from 'react';
import Button from './Components/Buttons/Button';
import Display from './Components/Display/Display';
import { VALUE_BUTTONS } from './constants';
import { calculate, isOperator } from './helpers';

function App() {
  const [logs, setLogs] = useState("");
  const [calculatedValue, setCalculatedValue ] = useState(0);
  const addRecordInLogs = (record) => {
    const recordIsOperator = isOperator(record)
    const lastRecordInLog = logs[logs.length - 1]
    // console.log('lasRecordinLOg', lastRecordInLog);
    const lastRecordInLogIsOperator = isOperator(lastRecordInLog)

    if (logs === "" && recordIsOperator) {
      return
    }

    // if ((logs === "" || logs === "0") && record.includes("0")) {
    //   return
    // }

    if (lastRecordInLogIsOperator && recordIsOperator) {
      setLogs(logs.slice(0, -1) + record)
      return
    }
    setLogs(logs + record)

  }

  const handleClickOnCalcButton = () => {
    setCalculatedValue(calculate(logs))
  }

  const handleClearClick = () => {
    setLogs('')
    setCalculatedValue(0)
  }

  const handleClearLastSymb = () => {
    const newStr = logs.slice(0, logs.length - 1)
    setLogs(newStr)
  }

  const handleReverseNumber = () => {
    setCalculatedValue(logs * -1);
  }


  useEffect(() => {
    const handleKeyUpClick = (event) => {

      switch (event.key) {
          case "Enter":
            handleClickOnCalcButton()
            break;
          case "*":
            addRecordInLogs("*")
            break;
          case "/":
            addRecordInLogs("/")
            break;
          case "-":
            addRecordInLogs("-")
            break;
          case "+":
            addRecordInLogs("+")
            break;
          case "Delete":
            handleClearClick()
            break;
          case "Backspace":
            handleClearClick()
            break;
          case "7":
            addRecordInLogs("7")
            break;
          case "8":
            addRecordInLogs("8")
            break;
          case "9":
            addRecordInLogs("9")
            break;
          case "4":
            addRecordInLogs("4")
            break;
          case "5":
            addRecordInLogs("5")
            break;
          case "6":
            addRecordInLogs("6")
            break;
          case "1":
            addRecordInLogs("1")
            break;
          case "2":
            addRecordInLogs("2")
            break;
          case "3":
            addRecordInLogs("3")
            break;
          case "0":
            addRecordInLogs("0")
            break;
          default:
            return;
      }
    }
    window.addEventListener("keyup", handleKeyUpClick);

    return () => window.removeEventListener("keyup", handleKeyUpClick)
  }, [logs])

  return (
    <div className="calc">
        <div className="wrapper">
          <Display logs={logs} calculatedValue={calculatedValue}/>
          <div className="buttons">
            <Button title={VALUE_BUTTONS.CLEAR} onClick={() => handleClearClick()}/>
            {/* <Button title="+/-" onClick={() => addRecordInLogs(VALUE_BUTTONS.PLUS_MINUS)}/> */}
            <Button title="+/-" onClick={() => handleReverseNumber(VALUE_BUTTONS.PLUS_MINUS)}/>
            <Button title={VALUE_BUTTONS.PERCENT} onClick={() => addRecordInLogs(VALUE_BUTTONS.PERCENT)}/>
            <Button orange= {true} title={VALUE_BUTTONS.DELETE} onClick={() => handleClearLastSymb(VALUE_BUTTONS.DELETE)}/>

            <Button title={VALUE_BUTTONS.SEVEN} onClick={() => addRecordInLogs(VALUE_BUTTONS.SEVEN)}/>
            <Button title={VALUE_BUTTONS.EIGHT} onClick={() => addRecordInLogs(VALUE_BUTTONS.EIGHT)}/>
            <Button title={VALUE_BUTTONS.NINE} onClick={() => addRecordInLogs(VALUE_BUTTONS.NINE)}/>
            <Button orange= {true} title={VALUE_BUTTONS.DIVIDE} onClick={() => addRecordInLogs(VALUE_BUTTONS.DIVIDE)}/>

            <Button title={VALUE_BUTTONS.FOUR} onClick={() => addRecordInLogs(VALUE_BUTTONS.FOUR)}/>
            <Button title={VALUE_BUTTONS.FIVE} onClick={() => addRecordInLogs(VALUE_BUTTONS.FIVE)}/>
            <Button title={VALUE_BUTTONS.SIX} onClick={() => addRecordInLogs(VALUE_BUTTONS.SIX)}/>
            <Button orange= {true} title={VALUE_BUTTONS.MULTIPLY} onClick={() => addRecordInLogs(VALUE_BUTTONS.MULTIPLY)}/>

            <Button title={VALUE_BUTTONS.ONE} onClick={() => addRecordInLogs(VALUE_BUTTONS.ONE)}/>
            <Button title={VALUE_BUTTONS.TWO} onClick={() => addRecordInLogs(VALUE_BUTTONS.TWO)}/>
            <Button title={VALUE_BUTTONS.THREE} onClick={() => addRecordInLogs(VALUE_BUTTONS.THREE)}/>
            <Button orange= {true} title={VALUE_BUTTONS.SUBTRACTION} onClick={() => addRecordInLogs(VALUE_BUTTONS.SUBTRACTION)}/>

            <Button title={VALUE_BUTTONS.POINT} onClick={() => addRecordInLogs(VALUE_BUTTONS.POINT)}/>
            <Button title={VALUE_BUTTONS.ZERO} onClick={() => addRecordInLogs(VALUE_BUTTONS.ZERO)}/>
            <Button title={VALUE_BUTTONS.EQUALS} onClick={() => handleClickOnCalcButton(VALUE_BUTTONS.EQUALS)}/>
            <Button orange= {true} title={VALUE_BUTTONS.ADD} onClick={() => addRecordInLogs(VALUE_BUTTONS.ADD)}/>
            </div>
        </div>
    </div>
  );
}

export default App;
