import Header from "../Header";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

it("should load Header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
        );
    // const loginButton = screen.getByRole("button");
    // const loginButton = screen.getByText("Login");
    // for multiple buttons
    // const loginButton = screen.getByRole("button", { name: "Login"});
    // expect(loginButton).toBeInTheDocument();

    const loginButton = screen.getByText("Cart(0)")
    expect(loginButton).toBeInTheDocument();
})

it("should have cart option", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
        );
    // const loginButton = screen.getByRole("button");
    // const loginButton = screen.getByText("Login");
    // for multiple buttons
    // const loginButton = screen.getByRole("button", { name: "Login"});
    // expect(loginButton).toBeInTheDocument();

    const loginButton = screen.getByText(/Cart/)
    expect(loginButton).toBeInTheDocument();
})

it("should change login button to logout", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
        );
        const loginButton = screen.getByRole("button", {name: "Login"});

        fireEvent.click(loginButton);
        const logoutButton = screen.getByRole("button", {name: "Logout"});
        expect(logoutButton).toBeInTheDocument();
})
