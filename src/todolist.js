import React from 'react';
import AddNewTask from './addNewTask';
import Task from './task';
import InCompleteTask from './inCompleteTask';
import {Container, Row, Col} from 'reactstrap';

const API = 'http://localhost:3001/todos';
const Axios = require('axios');
const style =
    {
        header:
            {
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',

            }
    };
export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            completed: false,
            totalTasks: 0,
            completedTasks: 0
        };

    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({tasks: data});
                let finishedTasks = 0;

                this.state.tasks.forEach((item) => {
                    if (item['completed'] === true)
                        finishedTasks = finishedTasks + 1;
                });
                this.setState({completedTasks: finishedTasks, totalTasks: data.length})
            });


    }


    render() {

        return (
            <Container style={{marginTop: '70px'}}>
                <Row>
                    <Col xl={{size: 6, offset: 3}} lg={{size: 6, offset: 3}} style={style.header}
                    >
                        <h1>Todo List</h1>
                        <div style={{marginBottom:'5px',marginTop:'5px'}}>

                            <p><span style={{color: '#00CEE9', fontWeight: 'bold'}}> {this.state.totalTasks} </span>Total
                                Tasks <span
                                    style={{
                                        color: '#00CEE9',
                                        fontWeight: 'bold',
                                        paddingLeft: '15px'
                                    }}>{this.state.completedTasks}</span> Finished Tasks</p>
                        </div>
                        <AddNewTask/>
                        <ul style={{listStyle: 'none', margin: '0px', padding: '0px'}}>

                            {this.state.tasks.map((item) => {
                                let boundItemClick = this.onItemClick.bind(this, item);
                                if (item['completed'] === true) {
                                    return (
                                        <div>
                                            <Task task={item['task']}/>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <li key={item['taskId']}
                                            onClick={boundItemClick} style={{listStyle: 'none'}}>{
                                            <InCompleteTask task={item['task']}/>

                                        }
                                        </li>
                                    )
                                }

                            })}
                        </ul>
                    </Col>
                </Row>


            </Container>
        )
    }

    onItemClick(item) {
        console.log(item);

        Axios.post("http://localhost:3001/changeStatus",

            {
                itemId: item['_id'],
                taskId: item['taskId'],
                task: item['task']


            })
            .then((response) => {

                    fetch(API)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            this.setState({tasks: data});
                            let finishedTasks = 0;

                            this.state.tasks.forEach((item) => {
                                if (item['completed'] === true)
                                    finishedTasks = finishedTasks + 1;
                            });
                            this.setState({completedTasks: finishedTasks, totalTasks: data.length})
                        });


                }
            )
            .catch((error) => {
                console.log(error)
            })

    }
}