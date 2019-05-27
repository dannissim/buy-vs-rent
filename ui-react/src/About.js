import React from 'react'
import { Jumbotron, Container} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'
import './fonts.css'

class Contact extends React.Component{
    render(){
        const path = this.props.location.pathname;
        const lan = path.slice(1,3)
        const en = ((lan === 'en') ? true: false);
        return(
            <Jumbotron fluid style={{marginBottom: '0px'}} >
                <Container>
                    {en ? (
                        <React.Fragment>
                            <h1 style={{fontSize: '8vmin'}} className='font_titillium'><b>About Buy VS Rent</b></h1>
                            <hr className="my-4"/>
                            <p style={{fontSize: '1.3em'}} className='font_titillium'>
                                <b>Hello,</b> My name is Dan Nissim, the creator of the app. Currently, I am a senior
                                in Mathematics and Computer Science at Tel Aviv University. I am 19 years old, from
                                Petah Tikva, and am expected to enlist in February 2020.
                                <br/><br/>
                                I built the app out of curiosity about what is entailed with purchasing a home in
                                Israel, and if renting a home is a worthwhile alternative.
                            </p>
                    
                            <h1 style={{fontSize: '8vmin'}} className='font_titillium'><b>Don't be a stranger</b></h1>
                            <hr className="my-4"/>
                            <p style={{fontSize: '5vmin', textAlign:'center'}} className='font_titillium'>nissim.dan@gmail.com</p>
                            <p style={{fontSize: '1.3em'}} className='font_titillium'>
                                I am happy to receive messages relating to the app and suggestions to improve
                                the user experience. If you encounter a problem you are of course welcome to
                                tell me about it and I'll try to help out.

                            </p>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <h1 dir='rtl' style={{fontSize: '8vmin', textAlign:'right'}} className='font_arimo'><b>אודות לקנות או לשכור</b></h1>
                            <hr className="my-4"/>
                            <p dir='rtl' style={{fontSize: '1.3em', textAlign:'right'}} className='font_arimo'>
                                <b>שלום,</b> שמי דן נסים, יוצר האפליקציה. אני היום סטודנט בשנה ג' במתמטיקה ובמדעי המחשב באוניברסיטת תל אביב.
                                בן 19, מפתח תקווה, ומיועד להתגייס בפברואר 2020.
                                <br/><br/>
                                בניתי את האפליקציה הזאת מתוך סקרנות במה כרוך בקניית דירה בישראל והאם שכירת דירה מהווה
                                אלטרנטיבה משתלמת.
                            </p>
                    
                            <h1 dir='rtl' style={{fontSize: '8vmin', textAlign:'right'}} className='font_arimo'><b>אולי נדבר...</b></h1>
                            <hr className="my-4"/>
                            <p style={{fontSize: '5vmin', textAlign:'center'}} className='font_titillium'>nissim.dan@gmail.com</p>
                            <p dir='rtl' style={{fontSize: '1.3em', textAlign:'right'}} className='font_arimo'>
                            אני שמח לקבל כל פניה בנוגע לאפליקציה ובנוגע להצעות לשיפור בחווית השימוש בה. כמובן שבמידה ונתקלתם
                            בבעיה ניתן גם כן לפנות ואנסה לעזור.
                            </p>
                        </React.Fragment>
                    )}
                </Container>
            </Jumbotron>
        )
    }
}
export default withRouter(Contact)