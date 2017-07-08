import React from "react"
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    <TodoItem
                        title="Item 5"
                        completed={true}
                    />
                </li>
                <li>
                    <TodoItem
                        title="Item 2"
                        completed={false}
                    />
                </li>
                <li>
                    <TodoItem
                        title="Item 3"
                        completed={false}
                    />
                </li>
            </ul>
        )
    }
}

export default TodoList;