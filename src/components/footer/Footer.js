import React, { Component } from 'react'
import './Footer.css'
import {BrowserRouter as Router, NavLink} from 'react-router-dom'

export default class Footer extends Component {

    /*
        props = {
            todos,
            setFilter,
            deleteCompletedTodos
        }
    */

    setFilter = (e) => {
        let filter = e.target.text.toLowerCase();
        this.props.setFilter(filter);
    }

    render() {
        let completedTodos = 0, activeTodos = 0;
        this.props.todos.forEach((item) => {
            if(item.completed) completedTodos += 1;
            else activeTodos += 1;
        });
        
        let text = activeTodos === 1 ? 'item' : 'items';

        let hidden = !(completedTodos > 0);
        
        return (
            <Router>
                <div className='footer'>
                    <span className='todos-info'>
                        <span className='number-items'>{activeTodos}</span>
                        <span className='object-items'>{text}</span>
                        <span>left</span>
                    </span>

                    <ul className='filters'>
                        <li> 
                            <NavLink to='/' exact activeClassName='selected' onClick={this.setFilter}>All</NavLink>
                        </li>

                        <li> 
                            <NavLink to='/active' exact activeClassName='selected' onClick={this.setFilter}>Active</NavLink>
                        </li>

                        <li> 
                            <NavLink to='/completed' exact activeClassName='selected' onClick={this.setFilter}>Completed</NavLink>
                        </li>
                    </ul>

                    <button className='clear-completed' onClick={this.props.deleteCompletedTodos} disabled={hidden}>Clear completed</button>
                </div>
            </Router>
        )
    }
}
