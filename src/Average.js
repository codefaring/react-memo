import React, { useState } from 'react';

export default function Average() {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  return (
    <div>
      <input
        value={number}
        onChange={onChange}
      />
      <button onClick={onInsert}>등록</button>
      <p>등록된 값</p>
      <ol>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ol>
      <div>
        <p>
          <strong>평균값: {getAverage(list)}</strong>
        </p>
      </div>
    </div>
  );
}

const getAverage = (numbers) => {
  console.log('reload...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};
