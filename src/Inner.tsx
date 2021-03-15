import React  from 'react';
import styled from 'styled-components';


// Style
const InputRange = styled.input`
  width: 50%;
`;


// Component
function Inner() {

  return (
    <div className="inner">
        <section>
          <h2>行長</h2>
          <InputRange type="range" name="range" min="10" max="50" value="35"></InputRange>
        </section>
        <section>
          <h2>行間</h2>
          <InputRange type="range" name="range" min="1" max="2.5" value="1.75" step="0.01"></InputRange>
        </section>
        <section>
          <h2>ジャンプ率</h2>
          <InputRange type="range" name="range" min="100" max="400" value="200"></InputRange>
        </section>
    </div>
  );
}

export default Inner;
