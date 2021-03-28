import React, { useState } from 'react';
import styled from 'styled-components';


// Style
const InputRange = styled.input`
  width: 50%;
`;


const test = (e: React.ChangeEvent<HTMLInputElement>) => {
  const defaultValue = e.target.value;
  console.log(defaultValue);
};

// Component
function Inner() {

  const [lineLength, setLineLength] = useState(35);
  const [lineHeight, setLineHeight] = useState(1.75);
  const [jumpRate, setJumpRate] = useState(200);

  const changelineLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changeValue: number = Number(e.target.value);
    console.log(changeValue);
    setLineLength(changeValue);
  };

  const changeLineHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changeValue: number = Number(e.target.value);
    console.log(changeValue);
    setLineHeight(changeValue);
  };

  const changeJumpRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changeValue: number = Number(e.target.value);
    console.log(changeValue);
    setJumpRate(changeValue);
  };

  return (
    <div className="inner">
        <section>
          <h2>行長</h2>
          <p>値：{lineLength}</p>
          <InputRange type="range" name="range" min="10" max="50" defaultValue={lineLength} onChange={changelineLength}></InputRange>
        </section>
        <section>
          <h2>行間</h2>
          <p>値：{lineHeight}</p>
          <InputRange type="range" name="range" min="1" max="2.5" defaultValue={lineHeight} onChange={changeLineHeight} step="0.01"></InputRange>
        </section>
        <section>
          <h2>ジャンプ率</h2>
          <p>値：{jumpRate}</p>
          <InputRange type="range" name="range" min="100" max="400" defaultValue={jumpRate} onChange={changeJumpRate}></InputRange>
        </section>
    </div>
  );
}

export default Inner;
