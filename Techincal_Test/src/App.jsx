import React, { useState } from "react";
import Table from "./components/Table";
import Filter from "./components/Filter";
import AddForm from "./components/AddForm";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState("");

  
  const addData = (newRow) => {
    setData((prevData) => [...prevData, newRow]);
  };


  const filteredData = data.filter((item) => {
    const values = `${item.id} ${item.name} ${item.age} ${item.city}`.toLowerCase();
    return values.includes(filterText.toLowerCase());
  });

  return (
    
    <div className="container"  style={{background:"lightyellow"}}>
      <div style={{background:"",padding:"40px"}}>
        <h1 style={{textAlign:"center"}}>Dynamic React Table</h1>
      <hr />
      <h3>Task Compeleted By : Name : Vishal Raj , Email Id : Vishalraj.118919@marwadiuniversity.ac.in</h3>
      <p>Feature 1): Searchinng Data on the basis of Any Fields</p>
      <p>Feature 2): Sort Data on Clicking The Any Fileds</p>
      <p>Feature 3): Unique Id on the Basis of Date For All Rows in A Table For Uniquely Identify them</p>
      </div>
      
      
      <hr style={{margin:"20px",height:"5px",background:"black",boxShadow:"0px 0px 3px grey" ,marginBottom:"50px"}} />
      

      <AddForm addData={addData} />

      <Filter filterText={filterText} setFilterText={setFilterText} />

      <Table data={filteredData} />
    </div>
  );
}

export default App;