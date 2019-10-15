// Test away!
import React from "react";
import Display from "./Display";
import { render } from "@testing-library/react";


test("defaults to unlocked and open", () => {

    let display = render(<Display />)

    expect(display.getByText("Unlocked"));
    expect(display.getByText("Open"));

})

test("displays if gate is open/closed and locked/unlocked", () => {
    const displayComponent = render(<Display />);
    expect(displayComponent).toMatchSnapshot();
})

test("displays closed if closed prop is true and open otherwise", () =>{
    let displayClosed = render(<Display closed={true}/>);
    let displayOpen = render(<Display closed={false}/>);
    expect(displayClosed.getByText("Closed"));
    expect(displayOpen.getByText("Open"));
    

})

test("displays locked if locked prop is true and unlocked otherwise", () => {
    let displayLocked = render(<Display locked={true}/>);
    let displayOpen = render(<Display locked={false}/>);

    expect(displayLocked.getByText("Locked"));
    expect(displayOpen.getByText("Unlocked"));

})

test("when locked or closed, use red-led class", () => {
    let displayLocked = render(<Display locked={true} closed={true}/>);
//    let displayClosed = render(<Display closed={true}/>);
    let locked = displayLocked.getByTestId(/random/i);
    let closed = displayLocked.getByTestId(/closedy/i);

    expect(locked.classList).toContain("red-led");
    expect(closed.classList).toContain("red-led");

})

test("when unlocked or open, use green-led class", () => {
    let displayOpen = render(<Display locked={false} closed={false}/>);
    let opened = displayOpen.getByTestId(/random/i);
    let unlocked = displayOpen.getByTestId(/closedy/i);

    expect(opened.classList).toContain("green-led");
    expect(unlocked.classList).toContain("green-led");
})