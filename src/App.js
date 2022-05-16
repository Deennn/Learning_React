import React, {Component} from "react";
import Navbar from "./components/layouts/Navbar";
import UserItem from "./components/users/UserItem";

import './App.css'

class App extends Component {

    constructor () {
        super();
        this.state =  {
            id: "1",
            login: "mojombo",
            avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
            html_url: 'https://github.com/mojombo'
        }
    }
    render () {

        return (
            <div className="App">
                <Navbar/>
                <UserItem/>
            </div>
        );
    }
}
export default App; 