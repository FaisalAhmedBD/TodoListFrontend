import React from 'react'

const API = 'http://localhost:3001/todos';
export default class TaskCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tasks: []};
    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({tasks: data})
            });
    }

    render() {
        let finishedTasks = 0;

            this.state.tasks.forEach((item) => {
                if (item['completed'] === true)
                    finishedTasks = finishedTasks + 1;
            });

        return (
            <div>
                <h5>  {this.state.tasks.length} Total Tasks,  {finishedTasks} Finished Tasks</h5>
            </div>
        )
    }

}