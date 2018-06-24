import React from 'react';

const StrikeThrough = require('strikethrough');
export default class Task extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            task: this.props
        }
    }

    render() {
        //  console.log('hello mike check');
        // console.log(this.props);
        const task = this.props.task;
        return (
            <div style={{
                backgroundColor: '#00CEE9',
                color: '#ffffff',
                fontSize: '16px',
                height: '55px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding:'15px'
            }}>
                {StrikeThrough(task)}

            </div>
        )
    }
}