import React from 'react';
import style from './style.module.css';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title: '',
            completed: false,
        };

    }


    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.title === '') {
            alert('Please add a todo !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        } else {

            this.setState({ id: this.state.id = this.state.id + 1 });
            this.props.addTodo(this.state);
            this.setState({ title: '' });
        }
    }

    render() {
        return (
            <div className={style.pill} >
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="todo" placeholder='Add todo...' value={this.state.title} onChange={(e) => { this.setState({ title: e.target.value }) }} />
                    <button type="submit">submit</button>
                </form>
            </div>
        );
    }
}

export default Input;
