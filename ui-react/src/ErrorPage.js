import React from 'react'
import { Jumbotron, Container} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'


// Here I should print an error page, and automatically redirect to home page after 5 seconds

class ErrorPage extends React.Component{
    render(){
        setTimeout(() => {
            this.props.history.replace('/')
        }, 2500);
        return(
            <Jumbotron fluid className='justify-content-center text-center' >
                <Container className='justify-content-center'>
                    <h1 style={{fontSize: '7em'}}>oops!</h1>
                    <p style={{fontSize: '2em'}} className="lead justify-content-center text-center">
                    Something Wrong Has Happened...<br />
                    You will be redirected to the home page in a couple of seconds.
                    </p>
                </Container>
            </Jumbotron>
        )
    }
}
export default withRouter(ErrorPage)