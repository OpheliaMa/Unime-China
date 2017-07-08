import React from "react"
import TodoHeader from "./TodoHeader";
import InputField from "./InputField";
import TodoList from "./TodoList";

class TodoApp extends React.Component {
    render() {
        return (
            <div>
                <TodoHeader/>
                <InputField ph="请你mama输入" />
                <TodoList/>
            </div>
        )
    }
}

export default TodoApp;