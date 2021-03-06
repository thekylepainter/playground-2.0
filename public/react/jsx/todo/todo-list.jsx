import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';

/**
 * Render a list of todo messages.
 */
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.todos = props.todos;
        this.save = props.save;
        this.remove = props.remove;
    }

    /**
     * We need to listen for whenever the props change, so we can redefine the list of todos.
     *
     * @param {Object} props - The new props that are coming into this component
     */
    componentWillReceiveProps(props) {
        this.todos = props.todos;
    }

    render() {
        // Map through the todos
        const todoNode = this.todos.map(todo =>
            (<Todo todo={todo} key={todo.id} save={this.save} remove={this.remove}/>)
        );

        return (
            <ul className="todo-list">{todoNode}</ul>
        );
    }
}

// Define property data types for TodoList
//noinspection JSUnresolvedFunction,JSUnresolvedVariable
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    save: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

export default TodoList;