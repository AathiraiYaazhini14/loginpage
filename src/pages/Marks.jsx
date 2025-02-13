import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Marks = () => {
  const [mark1, setMark1] = useState("");
  const [mark2, setMark2] = useState("");
  const [mark3, setMark3] = useState("");
  const [mark4, setMark4] = useState("");
  const [mark5, setMark5] = useState("");
  const [total, setTotal] = useState(null);

  const calcTotal = (e) => {
    e.preventDefault();
    const sum =
      (Number(mark1) || 0) +
      (Number(mark2) || 0) +
      (Number(mark3) || 0) +
      (Number(mark4) || 0) +
      (Number(mark5) || 0);
    setTotal(sum);
  };

  return (
    <div>
      <h1>Enter Marks</h1>
      <form onSubmit={calcTotal}>
        <label>Mark1:</label>
        <input type="number" value={mark1} onChange={(e) => setMark1(e.target.value)} />
        
        <label>Mark2:</label>
        <input type="number" value={mark2} onChange={(e) => setMark2(e.target.value)} />
        
        <label>Mark3:</label>
        <input type="number" value={mark3} onChange={(e) => setMark3(e.target.value)} />
        
        <label>Mark4:</label>
        <input type="number" value={mark4} onChange={(e) => setMark4(e.target.value)} />
        
        <label>Mark5:</label>
        <input type="number" value={mark5} onChange={(e) => setMark5(e.target.value)} />
        
        <button type="submit">Total</button>
      </form>

      {total !== null && <h2>Total Marks: {total}</h2>}

      <Link to="/"><button>Back</button></Link>
    </div>
  );
};

export default Marks;
