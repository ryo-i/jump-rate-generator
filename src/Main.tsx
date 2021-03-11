import React from 'react';
import { Helmet } from "react-helmet";
import Inner from './Inner';
import Data from './data/data.json';
import styled from 'styled-components';
import { pageSize } from './style/mixin';
import {
  Switch,
  Route
} from 'react-router-dom'; // Routing


// const title = Data.data.header.title;
// const description = Data.data.header.text;
const mainTitle = Data.data.main.title;
const mainText = Data.data.main.text;
const otherTitle = Data.data.other.title;
const otherText = Data.data.other.text;
const homeUrl = process.env.PUBLIC_URL; // Routing


// Style
const SectionTag = styled.section`
  ${pageSize}
  & h1 {
    font-size: 1.5em;
  }
`;


// Component
function Main() {
  return (
    <main>
      <SectionTag>
        <Switch>
          <Route exact path={ homeUrl + "/" }>
            <Helmet>
              <title>{ mainTitle }</title>
              <meta name="description" content={ mainText } />
            </Helmet>
            <h1>{ mainTitle }</h1>
            <p dangerouslySetInnerHTML={{ __html: mainText }}></p>
            <Inner />
          </Route>
          <Route path={ homeUrl + "/other" }>
            <Helmet>
              <title>{ otherTitle }</title>
              <meta name="description" content={ otherText } />
            </Helmet>
            <h1>{ otherTitle }</h1>
            <p dangerouslySetInnerHTML={{ __html: otherText }}></p>
          </Route>
        </Switch>
      </SectionTag>
    </main>
  );
}

export default Main;
