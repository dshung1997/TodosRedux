import React, { Component } from 'react'
import './Item.css'
import classNames from 'classnames'

export default class Item extends Component {

    /*
        props = {
            todo,
            toggleTodo,
            deleteTodo
        }
    */

    constructor(props) {
        super(props);

        this.state = {
            id: props.todo.id
        }
    }
    
    handleToggleButton = () => {
        this.props.toggleTodo(this.state.id);
    }

    handleDeleteButton = () => {
        console.log("Detele pressed");
        this.props.deleteTodo(this.state.id);
    }

    render() {
        // console.log('item ' + this.props.itemId + ' ' + this.props.completed);
        
        return (
            <div className='item'>
                <input className="toggle" type="checkbox" onChange={this.handleToggleButton} checked={this.props.todo.completed}/>
                <label className={classNames({completed: this.props.todo.completed})}>{this.props.todo.content}</label>
                <button className="delete-item"><i className="fa fa-times" onClick={this.handleDeleteButton}></i></button>
            </div>
        );
       
    }
}
