import React from 'react'
import { Jumbotron, Container} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'
import './fonts.css'

class Resources extends React.Component{
    render(){
        return(
            <Jumbotron fluid style={{marginBottom: '0px'}}>
                <Container className=''>
                    <h1 className='font_titillium'><b>Resources</b></h1>
                    <p className="lead">
                    Below are some recommended tools and sites that I have found useful while building this app. 
                    </p>
                    <hr className="my-4"/>
                    <h3 className='font_titillium'><b>Web Development Tools</b></h3>
                    <p>
                        This site is being hosted with <a style={{color:'white'}} href='https://www.pythonanywhere.com'>Python Anywhere</a> which has
                        proven to be quick to set up, and seems like a great option for small apps.<br/><br/>
                        The User Interface of the app was bulid with the <a style={{color:'white'}} href='https://github.com/facebook/react'>React JS</a> framework. Here are a couple
                        of resources that helped me get started:<br/>
                        Of course the <a href='reactjs.org' style={{color:'white'}}>ReactJS docs</a>, as well as several Medium articles such as:&nbsp; 
                        <a style={{color:'white'}} href='https://towardsdatascience.com/create-a-complete-machine-learning-web-application-using-react-and-flask-859340bddb33'>ML web app with React and Flask</a>,&nbsp;
                        <a style={{color:'white'}} href='https://medium.freecodecamp.org/lessons-learned-from-deploying-my-first-full-stack-web-application-34f94ec0a286'>Deploying a full-stack web app</a>,&nbsp;
                        <a style={{color:'white'}} href='https://medium.com/proximistyle/building-your-startup-with-python-react-react-native-and-aws-286afd94a29c'>Building your startup with Python, React, React Native, and AWS</a>, and&nbsp;
                        <a style={{color:'white'}} href='https://medium.com/@timmykko/django-flask-with-react-js-3c6da2d47b52'>Django/Flask with React.js</a>.<br/><br/>

                        I used several React libraries that simplified the development process. The main ones are: <a style={{color:'white'}} href='https://github.com/jaredpalmer/formik'>Formik</a>
                        &nbsp;and <a style={{color:'white'}} href='https://github.com/jquense/yup'>Yup</a> for forms and form validation,&nbsp;
                        <a style={{color:'white'}} href='https://github.com/ReactTraining/react-router'>React Router</a> for website navigation,&nbsp;
                        <a style={{color:'white'}} href='https://github.com/react-bootstrap/react-bootstrap'>React Bootstrap</a> which integrates the&nbsp;
                        <a style={{color:'white'}} href='https://github.com/twbs/bootstrap'>Bootstrap</a> CSS framework into React, and&nbsp;
                        <a style={{color:'white'}} href='https://github.com/facebook/create-react-app'>Create React App</a> to speed the development and deployment process.<br/><br/>
                        
                        Here are some tools that helped with the style and design of the app: <a style={{color:'white'}} href='https://fonts.google.com/'>Google Fonts</a>,&nbsp;
                        <a style={{color:'white'}} href='https://material.io/tools/color/'>Material Design Color Tool</a>,&nbsp;
                        <a style={{color:'white'}} href='https://designapp.io/'>Designapp.io</a>,and&nbsp;
                        <a style={{color:'white'}} href='https://realfavicongenerator.net/'>Favicon Generator</a>.<br/><br/>

                        For the back-end I am using <a style={{color:'white'}} href='https://github.com/pallets/flask'>Flask</a>, a web framework for Python.
                        Here are a couple of resources that helped me get started with Flask:<br/>
                        The <a style={{color:'white'}} href='http://flask.pocoo.org/docs/1.0/'>Flask docs</a> - which also has a getting-started tutorial, 
                        Miguel Grinberg's <a style={{color:'white'}} href='https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world'>Flask Mega-Tutorial</a>,
                        and this <a style={{color:'white'}} href='https://www.udemy.com/the-build-a-saas-app-with-flask-course/'> Udemy Course</a>.
                        {/* I also used the <a style={{color:'white'}} href='https://github.com/alisaifee/flask-limiter'>Flask-Limiter</a> extension.<br/><br/>

                        Additional services the app uses are <a style={{color:'white'}} href='https://www.google.com/adsense/start/'>Google AdSense</a>, and&nbsp;
                        <a style={{color:'white'}} href='https://analytics.google.com/analytics/web/provision/?authuser=0#/provision'>Google Analytics</a>. */}
                    </p>

                    <h3 className='font_titillium'><b>Deployment</b></h3>
                    <p>
                        Some good reads I found useful are: Google's <a style={{color:'white'}} href='https://support.google.com/webmasters/answer/7451184?hl=en'>Search Engine Optimization Sarter Guide</a>, as well as
                        Google's <a style={{color:'white'}} href='https://developers.google.com/web/progressive-web-apps/checklist'>Progressive Web App Checklist</a>,
                        Google's <a style={{color:'white'}} href='https://developers.google.com/web/fundamentals/primers/service-workers/'>Introduction to Service Workers</a>,
                        and this Medium article on <a style={{color:'white'}} href='https://medium.com/@firt/google-play-store-now-open-for-progressive-web-apps-ec6f3c6ff3cc'>Progressive Web Apps</a>.
                    </p>

                    <h3 className='font_titillium'><b>Logic and Algorithms</b></h3>
                    <p>
                        In the salary taxes & savings calculator part of the app, <a dir='rtl' style={{color:'white'}} href='https://www.kolzchut.org.il/he'>כל זכות</a>&nbsp;
                        was a very useful resource to understand the process.
                    </p>

                    <p>
                        &emsp;<a style={{color:'white'}} href='https://stackoverflow.com'>Stack Overflow</a> is of course a great resource as well.
                    </p>
                </Container>
            </Jumbotron>
        )
    }
}
export default withRouter(Resources)