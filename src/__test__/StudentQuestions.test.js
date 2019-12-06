import React from "react";
import ReactDOM from "react-dom";
import {act, Simulate} from "react-dom/text-utils"
import StudentQuestions from "../components/StudentQuestions"
import App from "../App"

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container)
})

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container)
    container = null;
})

function addQuestion(){
    const input = container.querySelector("input");
    input.value = "Question 1";
    Simulate.change(input);
    Simulate.click(container.querySelector("button.ask-button"));
}

test(`"StudentQuestions" should render if props correctly`, () => {
    act(() => {
            ReactDOM.render(<StudentQuestions questions={["How did spongebobs pineapple get to the ocean floor?", "What drugs occifer", "Henlo mayte"]}/>, container);
    })

    const h1 = container.querySelector("h1");
    expect(h1.textContent).toBe("1: How did spongebobs pineapple get to the ocean floor? ")
    const h1Two = container.querySelector("h1:nth-child(2)") //grabs 2nd H1
    expect(h1Two.textContent).toBe("2: What drugs occifer")
    const h1Three = container.querySelector("h1:nth-child(3)")
    expect(h1Three).toBe("3: Henlo mayte")
})


test("Updates when a new question is asked", () => {
    act(() => {
        ReactDOM.render(<App />, container)
    })
    addQuestion();
    const h1 = container.querySelector("hi");
    expect(h1.textContent).toBe("1: Question 1")
})


test("Removed a question when answered button is clicked", () => {
    act(() => {
        ReactDOM.render(<App />, container)
    })

    addQuestion();
    const answerButton = container.querySelector("#answerButton");
    Simulate.click(answerButton);
    expect(container.querySelectorAll("h1").length).toBe(0);
})