import React from 'react'
import {Jumbotron, Container} from 'react-bootstrap'
import VarsForm from './VarsForm';
import {withRouter} from 'react-router-dom'
import './fonts.css'

class Home extends React.Component{
    componentDidMount(){
        var path =  this.props.location.pathname
        // var lan = 'he' // if no lan specified, default is he
        if (path === '/'){
            const lan = localStorage.getItem('lan')
            if (lan != null)
                this.props.history.replace('/'+lan)
            else
                this.props.history.replace('/he')
        }
    }
    render(){
        const path = this.props.location.pathname;
        const lan = path.slice(1,3)
        const en = ((lan === 'en') ? true: false);

        return(
            <React.Fragment>
                <Jumbotron fluid>
                    <Container >
                        {en ? (
                            <React.Fragment>
                                <h1 className='font_titillium'><b>Should I Buy or Rent?</b></h1>
                                <p className="lead">
                                    Purchasing a home is the biggest financial decision a person makes in a lifetime.
                                    It is expected to take a loan of hundreds of thousands of shekels which we pay off throughout
                                    tens of years. We do all of this without enough knowledge of the implications and the potential
                                    risks that are implied.
                                </p>
                                <hr className="my-4"/>
                                <p>
                                    Simply put in the information that is as true for you as possible. You then will receive
                                    several conclusions, and other info. which can help with understanding how each variable
                                    affects your decision.
                                </p>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <h1 dir='rtl' className='font_arimo' style={{textAlign:'right'}}><b>האם כדאי לקנות או לשכור?</b></h1>
                                <p dir='rtl' className="lead font_arimo" style={{textAlign:'right'}}>
                                    קניית בית הוא ההחלטה הכספית הגדול ביותר שאדם מחליט בחייו.
                                    מצופה מאיתנו לקחת משכנתא של מאות אלפי שקלים שעליו אני משלמים במשך עשרות שנים.
                                    אנו עושים את כל זה ללא מספיק ידע בהשלכות.
                                </p>
                                <hr className="my-4"/>
                                <p dir='rtl' style={{textAlign:'right'}} className='font_arimo'>
                                    פשוט הכניסו את הנתונים שנכונים עבורכם ככל הניתן. מיד תקבלו כמה מסקנות ומידע נוסף
                                    שיכול לעזור בלהבין כיצד כל נתון משפיע על ההחלטה שלכם.
                                </p>
                            </React.Fragment>
                        )}
                    </Container>
                </Jumbotron>
                <VarsForm/>
            </React.Fragment>
        )
    }
}

export default withRouter(Home)