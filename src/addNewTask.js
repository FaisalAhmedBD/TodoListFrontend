import React from 'react';
import {Container, Row, Col, Form} from 'reactstrap';

const style =
    {
        header:
            {
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                margin: '0px',
                padding: '0px'
            }
    };
export default class AddNewTask extends React.Component {

    render() {

        return (
            <  Container fluid style={{marginBottom: '20px'}}>
                <Row>
                    <Col xl={{size: 12}} lg={{size: 12}} style={style.header}
                    >
                        <Form action="http://localhost:3001/additem2" method="post">
                            <input
                                type="text"
                                placeholder='Add a task...'
                                name='task'
                                style={{
                                    height: 45,
                                    width: '100%',
                                    paddingLeft: '15px',
                                    borderTop: 'transparent ',
                                    borderLeft: 'transparent ',
                                    borderRight: 'transparent ',
                                    borderBottom: 'transparent ',
                                    backgroundColor:'#F8F8F8',
                                    color:'#AAABB4',

                                }}
                            />
                        </Form>
                    </Col>
                </Row>

            </Container>
        )
    }

}