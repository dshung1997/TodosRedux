import React, { Component } from 'react'
import './Todo.css'

import CItem from '../../containers/CItem'
// import getNextId from '../../HandleId.js'

export default class Todo extends Component {

    /*
        props = {
            todos,
            addTodo
        }
    */

    componentDidMount(){
        this.props.addTodo({
            content: '1'
        });

        this.props.addTodo({
            content: '2'
        });

        this.props.addTodo({
            content: '3'
        });

        this.props.addTodo({
            content: '4'
        });

        console.log("added...");
    }

    handleKeyDown = (e) => {
        if(e.keyCode === 13) {

            if(e.target.value === "") return false;

            let newItem = {
                content: e.target.value,
                completed: false
            }

            this.props.addTodo(newItem);
            e.target.value = '';
        }   
        console.log("onKeyDown " + e.target.value);
    }

    handleToggleAllButton = (e) => {
        let status = e.target.checked;
        this.props.toggleAllTodos(status);
    }


    render() {
        console.log('render todo.js');
        console.log(this.props.todos);

        let allFinished = this.props.todos.map((item) => item.completed).reduce((a, b) => a & b, true);
        console.log('allFinished ', allFinished);

        let listTodos = this.props.todos.map((todo, index) => {
             return <CItem todo={todo} key={todo.id}/>
        });
   
        return (
            <div className='bound-input'>
                <div className='new-todo'>
                    <input className='new-todo-input' placeholder='What needs to be done ?' onKeyDown={this.handleKeyDown}/>
                </div>

                <input className="toggle-all" type="checkbox" checked={allFinished} onChange={this.handleToggleAllButton} />

                <div>
                    <ul className='todo-list'>
                        {listTodos}
                    </ul>   
                </div>
            </div>
        )
    }
}
