import React from 'react';
import HomePage from "./index";
import {render} from "../../utils/test-utils";

test('renders home page text', () =>{
    const {getByText} = render(<HomePage />);
    getByText("Recently accessed");
});

test('renders support page content', () =>{
    const {getByText} = render(<HomePage />);
    getByText("Download User Guide");
    getByText("Go to Support page");
});