import React from 'react';
// used to render things
import ReactDOM from 'react-dom';
// the component we are testing
import Services from './../index';
// react testing library
import { cleanup } from '@testing-library/react';
// jest dom which has extend and expect. new version
import "@testing-library/jest-dom/extend-expect";

// second parameter is a callback function where you write the test

// Cleans up after each test
afterEach(cleanup);

// Creates a div and attatches our component to that div
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Services></Services>, div);
});