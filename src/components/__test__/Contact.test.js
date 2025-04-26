import Contact from "../Contact";
import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

describe("contact us page test cases", () => {
    test("should load Contact us component", () => {
        // to render the UI component on js dom
        render(<Contact/>);
    
        const heading = screen.getByRole('heading');
    
        //Assertion
        expect(heading).toBeInTheDocument();
        
    });
    
    it("should load button inside Contact us component", () => {
        // to render the UI component on js dom
        render(<Contact/>);
    
        // const button = screen.getByRole('button');
        const button = screen.getByText('Submit');
    
        //Assertion
        expect(button).toBeInTheDocument();
        
    });
    // it can be used in place of test
    it("should load input name inside Contact us component", () => {
        // to render the UI component on js dom
        render(<Contact/>);
    
        // const button = screen.getByRole('button');
        const button = screen.getByPlaceholderText('name');
    
        //Assertion
        expect(button).toBeInTheDocument();
        
    });
    
    test("should load two input boxes inside Contact us component", () => {
        // to render the UI component on js dom
        render(<Contact/>);
    
        // const button = screen.getByRole('button');
        const inputBoxes = screen.getAllByRole('textbox');
    
        //Assertion
        expect(inputBoxes.length).toBe(2);
        // expect(inputBoxes.length).not.toBe(2);
        // console.log(inputBoxes);
        
    });  
})
