import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {withRouter} from 'react-router-dom'
import './fonts.css'

class TopNavBar extends React.Component {
    render() {
        const path = this.props.location.pathname;
        var lan = path.slice(1,3)
        if (lan !== 'en' && lan !== 'he')
            lan = localStorage.getItem('lan')
        const en = (lan === 'en' ? true: false);
        return ( 
            <Navbar bg="primary" expand="lg" variant="dark" className="justify-content-center active">
                <LinkContainer to={'/'+lan}>
                    {en ?
                        <Navbar.Brand className='w-50'>Buy VS Rent</Navbar.Brand> :
                        <Navbar.Brand className='w-50 font_arimo'>לקנות או לשכור</Navbar.Brand>
                    }
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="active"/>
                <Navbar.Collapse id="basic-navbar-nav" className="w-100 active">
                    <Nav className="w-100 justify-content-center active" style={{textAlign: 'center'}}>
                        <LinkContainer to={'/'+lan}>
                            {en ?
                                <Nav.Link className='active'>Home</Nav.Link> :
                                <Nav.Link className='active font_arimo'>בית</Nav.Link>
                            }
                        </LinkContainer>
                        <LinkContainer to={'/'+lan +'/additionalinfo'}>
                            {en ?
                                <Nav.Link className='active'>Additional Info</Nav.Link> :
                                <Nav.Link className='active font_arimo'>מידע נוסף</Nav.Link>
                            }
                        </LinkContainer>
                        <LinkContainer to={'/'+lan+'/resources'}>
                            {en ?
                                <Nav.Link className='active'>Resources</Nav.Link> :
                                <Nav.Link className='active font_arimo'>משאבים</Nav.Link>
                            }
                        </LinkContainer>
                    </Nav>
                    <Nav className="ml-auto justify-content-end w-100 active" style={{textAlign: 'center'}}>
                        <LinkContainer to={'/'+lan+'/donate'}>
                            {en ?
                                <Nav.Link className='active'>Donate</Nav.Link> :
                                <Nav.Link className='active font_arimo'>לתרום</Nav.Link>
                            }
                        </LinkContainer>
                            {en ?
                                <Nav.Link className='active' href="https://github.com/dannissim/house-purchase-profitability">Open Source Project</Nav.Link> :
                                <Nav.Link className='active font_arimo' href="https://github.com/dannissim/house-purchase-profitability">פרויקט קוד פתוח</Nav.Link>
                            }
                        <LinkContainer to={'/'+lan+'/about'}>
                            {en ?
                                <Nav.Link className='active'>About</Nav.Link> :
                                <Nav.Link className='active font_arimo'>אודות</Nav.Link>
                            }
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(TopNavBar)