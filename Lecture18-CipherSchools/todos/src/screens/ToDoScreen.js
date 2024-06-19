import { Component } from "react";


class ToDoScreen extends Component{

    state = {
        taskCount : 0,
    };
    render()
    {
        
        return(
            <div className="screen">
            <h1 className="ui heading center">To Do List</h1>
            <div>
                <button onClick={(e)=>{
                    this.setState({...this.state,taskCount:this.state.taskCount+1,});
                    console.log(this.state.taskCount);
                }} className="ui secondary button">Add Task</button>
            </div>
            <p>The number of tasks are:- {this.state.taskCount}</p>
            </div>
        )
    }
}

export default ToDoScreen;