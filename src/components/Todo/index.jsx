import React from 'react';
import style from './style.module.css';


class Todo extends React.Component {

    render() {
        return (
            <div className={style.list}>
                <div className='form-check d-flex justify-content-between container'>
                    <label className="form-check-label" htmlFor="defaultCheck1">
                        <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" readOnly checked={this.props.todo.completed} onClick={() => this.props.handleCheck(this.props.todo.id)} />
                        {this.props.todo.completed ? <del className={style.fontChecked}>{this.props.todo.title}</del> : <span className={style.font}>{this.props.todo.title}</span>}
                    </label>
                    <button onClick={() => this.props.handleDelete(this.props.todo.id)} className="btn btn-danger">Delete</button>
                </div>
            </div>
        );
    }
}

export default Todo;
