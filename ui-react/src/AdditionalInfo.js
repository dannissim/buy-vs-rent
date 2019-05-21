import React from 'react'
import { Jumbotron, Container} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'


// Here I should print an error page, and automatically redirect to home page after 5 seconds

class AdditionalInfo extends React.Component{
    render(){
        return(
            <Jumbotron fluid className='justify-content-center text-center' >
                <Container className='justify-content-center'>
                    <h3>Additional Info</h3>
                    <p className="lead">
                    bla bla
                    </p>
                    <hr className="my-4"/>
                    <p>bla bla</p>
                </Container>
            </Jumbotron>
        )
    }
}
export default withRouter(AdditionalInfo)