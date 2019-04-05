import React from 'react';


import { User, saveUser } from './logic'
//import Input from './Input'

class AddUser extends React.Component {

    state = {
        name: '',
        email: '',
        avatar: '',
    }

    inputChangeHandler = (event, statePropName) => this.setState({
        [statePropName]: event.target.value
    })
    addCLickHandler = () => {
        if (!this.state.name) return
        if (!this.state.email) return

        const user = new User(this.state.name, this.state.email, this.state.avatar)

        saveUser(user)
    }

    render() {
        return (
            <div>
                <input
                    placeholder={'Wpisz imię'}
                    value={this.state.name}
                    onChange={(event) => this.inputChangeHandler(event, 'name')}
                />
                <input
                    placeholder={'Wpisz e-mail'}
                    value={this.state.email}
                    onChange={(event) => this.inputChangeHandler(event, 'email')}
                />
                <input
                    placeholder={'Wpisz URL zdjęcia'}
                    value={this.state.avatar}
                    onChange={(event) => this.inputChangeHandler(event, 'avatar')}
                />
                <button
                    onClick={this.addCLickHandler}
                >
                    Dodaj
                </button>
            </div >
        )
    }
}

export default AddUser;
