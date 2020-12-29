import React, {useState} from 'react';
import './App.css';

function App() {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [total, setTotal] = useState(0);
  const [table, setTable] = useState([]);
  const [selectedContent, setSelectedContent] = useState("No items selected");

  function hovered(e)
  {
     setSelectedContent(<div className="miniBox" > {e.target.textContent} </div>);
  }

  function clearClick()
  {
    setTable([]);
    setTotal(0);
    setRows(0);
    setColumns(0);
  }

  const generateClick = () =>
  {
    console.log("generate clicked: total", rows * columns );
    let total = rows * columns;
    let count = 1;
    let flag = 0;
    let temp = [];
    for(let colCount = 0; colCount < total; colCount++)
    {
        temp.push(<th key={colCount}> <div className="miniBox" onMouseEnter = {hovered} onMouseLeave = {() => setSelectedContent("No items selected")}>{count++} </div> </th>)
        flag++;
        if(flag == columns)
        {
          temp.push(<br />);
          flag = 0;
        }
    }
  
    setTable(temp);
    setTotal(rows * columns);
  }

  return (
    <div className="App">
      <div className="grid-container">
       <div className="item2" style={{width:"100%"}}>  
        <p>  Block Display </p> 
         {table}
         <p> Total blocks : {total} </p>
       </div>
       <div className="item3"> 
         Block config 

         <div> 
          <div className = "item1">
            <p> row: <input type = "number" value = {rows} pattern="[0-9]*" onChange ={ e => setRows(e.target.value) } /></p>
            <p> column: <input type = "number" value = {columns} pattern="[0-9]*" onChange ={ e => setColumns(e.target.value)} /> </p>
            <button onClick = {generateClick.bind(this)}> Generate </button>
            <button onClick ={clearClick.bind(this)}> Clear </button>
          </div>
          <hr style={{width: "70%"}}/>
          <div className = "item5">
            <p> Selected block: </p> 
             {selectedContent}
          </div>
         </div>
       </div>

      </div>
        
    </div>
  );
}

export default App;
