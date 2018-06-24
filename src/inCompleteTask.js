import React from 'react';


export default class InCompelteTask extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const task = this.props.task;
        return (
            <div style={{
                fontSize: '16px',
                height: '55px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding:'15px'
            }}>
                { task}

            </div>
        )
    }
}