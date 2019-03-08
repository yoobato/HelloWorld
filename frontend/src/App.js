import React, { Component } from 'react';

const todoItems = [
    {
        "id": 1,
        "description": "Make Dockerfile for Django and React",
        "completed": false
    },
    {
        "id": 2,
        "description": "Have a cup of tea with my teammates",
        "completed": false
    },
    {
        "id": 3,
        "description": "This is a Todo with long description which includes more than 80 characters. Let's Todo truncate with ellipsis works well. The Todo description must only contains 77 characters from start and '...' added at the end. Because I added this logic on __str__() method.",
        "completed": false
    },
    {
        "id": 4,
        "description": "Add Django REST framework (DRF)!",
        "completed": false
    },
    {
        "id": 5,
        "description": "New Todo from Django REST framework (revised)",
        "completed": false
    }
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewCompleted: false,
            todoList: todoItems
        };
    }
    displayCompleted = status => {
        if (status) {
            return this.setState({ viewCompleted: true });
        }
        return this.setState({ viewCompleted: false });
    };

    renderTabList = () => {
        return (
            <div className="my-5 tab-list">
                <span
                    onClick={() => this.displayCompleted(true)}
                    className={this.state.viewCompleted ? "active" : ""}
                >
                    complete
                </span>
                <span
                    onClick={() => this.displayCompleted(false)}
                    className={this.state.viewCompleted ? "" : "active"}
                >
                    Incomplete
                </span>
            </div>
        );
    };
    renderItems = () => {
        const { viewCompleted } = this.state;
        const newItems = this.state.todoList.filter(
            item => item.completed == viewCompleted
        );
        return newItems.map(item => (
            <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
            >
                <span
                    className={`todo-summary mr-2 ${this.state.viewCompleted ? "completed-todo" : ""}`}
                    title={item.description}
                >
                    {item.description.length > 57 ? item.description.substr(0, 57) + '...' : item.description}
                </span>
                <span>
                    <button className="btn btn-secondary mr-2"> Edit </button>
                    <button className="btn btn-danger">Delete </button>
                </span>
            </li>
        ));
    };
    render() {
        return (
            <main className="content">
                <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
                <div className="row">
                    <div className="col-md-6 col-sm-10 mx-auto p-0">
                        <div className="card p-3">
                            <div>
                                <button className="btn btn-primary">Add Todo</button>
                            </div>
                            {this.renderTabList()}
                            <ul className="list-group list-group-flush">
                                {this.renderItems()}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        );
    };
}

export default App;
