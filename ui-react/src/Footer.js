import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import {LinkContainer} from 'react-router-bootstrap'
import withRouter from 'react-router-dom/withRouter'
import './social_buttons.css'


class Footer extends React.Component{
    render(){
        function changeToEn(e){
            localStorage.setItem('lan', 'en')
        }
        function changeToHe(e){
            localStorage.setItem('lan', 'he')
        }
        // where language should come from in order: 1. localstorage if exists 2. If no localstorage, default he,
        // save to localstorage on first load. 3. update localstorage on each language change
        const path = this.props.location.pathname;
        const pathNoLan = path.slice(3)
        var lan = path.slice(1,3)
        if (lan !== 'en' && lan !== 'he')
            lan = localStorage.getItem('lan')
        const en = (lan === 'en' ? true: false);
        return(
            <Navbar bg="primary" expand="lg" variant="dark" className="w-100 " id="basic-navbar-nav" >
                <Nav className="w-100 justify-content-center" >
                    <Container>
                        <Row className="justify-content-center">
                            <Col xl={2} xs={6} className='text-center'>
                                <LinkContainer to={'/en' + pathNoLan} className='active' onClick={changeToEn}>
                                    <Nav.Link>English</Nav.Link>
                                </LinkContainer>
                            </Col>
                            <Col xl={2} xs={6} className='text-center'>
                                <LinkContainer to={'/he' + pathNoLan} className='active' onClick={changeToHe}>
                                    <Nav.Link className='font_arimo'>עברית</Nav.Link>
                                </LinkContainer>
                            </Col>
                            <Col xl={2} xs={6} className='text-center'>
                                <LinkContainer to={'/'+lan+'/privacy'} className='active' >
                                    {en ?
                                        <Nav.Link>Privacy Policy</Nav.Link> :
                                        <Nav.Link className='active font_arimo'>מדיניות פרטיות</Nav.Link>
                                    }
                                </LinkContainer>
                            </Col>
                            <Col xl={2} xs={6} className='text-center'>
                                <LinkContainer to={'/'+lan+'/termsofuse'} className='active'>
                                    {en ?
                                        <Nav.Link>Terms of Use</Nav.Link> :
                                        <Nav.Link className='active font_arimo'>תנאי שימוש</Nav.Link>
                                    }
                                </LinkContainer>
                            </Col>

                            <div className="w-100 d-none d-sm-block"/>
                            {en ?
                                <p style={{textAlign:'center', color:'white'}} className='pt-3'>Spread the Word</p> :
                                <p style={{textAlign:'center', color:'white'}} className='pt-3 font_arimo'>ספרו עלינו לחבריכם</p>
                            }
                            {/* // <!-- Sharingbutton Facebook --> */}
                            <a className="resp-sharing-button__link" href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.buyvsrent.xyz" target="_blank" rel="noopener noreferrer" aria-label="Facebook Share Button">
                            <div className="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small"><div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solid">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                                </div>
                            </div>
                            </a>

                            {/* // <!-- Sharingbutton WhatsApp --> */}
                            <a className="resp-sharing-button__link" href="whatsapp://send?text=%20https%3A%2F%2Fwww.buyvsrent.xyz" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Share Button">
                            <div className="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--small"><div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solid">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"/></svg>
                                </div>
                            </div>
                            </a>

                            {/* // <!-- Sharingbutton Telegram --> */}
                            <a className="resp-sharing-button__link" href="https://telegram.me/share/url?text=&amp;url=https%3A%2F%2Fwww.buyvsrent.xyz" target="_blank" rel="noopener noreferrer" aria-label="Telegram Share Button">
                            <div className="resp-sharing-button resp-sharing-button--telegram resp-sharing-button--small"><div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solid">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M.707 8.475C.275 8.64 0 9.508 0 9.508s.284.867.718 1.03l5.09 1.897 1.986 6.38a1.102 1.102 0 0 0 1.75.527l2.96-2.41a.405.405 0 0 1 .494-.013l5.34 3.87a1.1 1.1 0 0 0 1.046.135 1.1 1.1 0 0 0 .682-.803l3.91-18.795A1.102 1.102 0 0 0 22.5.075L.706 8.475z"/></svg>
                                </div>
                            </div>
                            </a>
                            <a style={{textAlign:'center', color:'white'}} className='pt-3' href='https://www.buyvsrent.xyz'>
                            buyvsrent.xyz</a>
                            {en ? 
                            <a href='https://play.google.com/store/apps/details?id=xyz.buyvsrent.app1&referrer=utm_source%3DBuyVSRent-website&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                            <img style={{height:'60px'}} alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>:
                            /* HEBREW */
                            <a href='https://play.google.com/store/apps/details?id=xyz.buyvsrent.app1&referrer=utm_source%3DBuyVSRent-website&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                            <img style={{height:'60px'}} alt=' Google Play כעת ב-' src='https://play.google.com/intl/en_us/badges/images/generic/iw_badge_web_generic.png'/></a>
                            }
                        </Row>
                    </Container>
                </Nav>
            </Navbar>
        )
    }
}
export default withRouter(Footer)