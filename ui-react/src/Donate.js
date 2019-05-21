import React from 'react'
import { Jumbotron, Container} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'
import './fonts.css'

class Donate extends React.Component{
    render(){
        const path = this.props.location.pathname;
        const lan = path.slice(1,3)
        const en = ((lan === 'en') ? true: false);

        return(
            <React.Fragment>
                <Jumbotron fluid>
                    <Container>
                        {en ? (
                            <React.Fragment>
                                <h1 className='font_titillium'><b>Donate</b></h1>
                                <hr className="my-4"/>
                                <p className="lead ">
                                Servers costs almost nothing, a domain name... I can afford that.
                                The real cost of Buy VS Rent is not in dollars or euros, but in time.
                                So I would really appreciate if you could donate a few bucks!
                                </p>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <h1 dir='rtl' style={{textAlign:'right'}} className='font_arimo'><b>לתרום</b></h1>
                                <hr className="my-4"/>
                                <p dir='rtl' style={{textAlign:'right'}} className="lead font_arimo">
                                    שרתים עולים כמעט כלום, שם דומיין... אני יכול להרשות את זה לעצמי.
                                    העלות האמיתית של לקנות או לשכור היא לא בשקלים או בדולרים, אלא בזמן.
                                    אז אעריך את זה מאוד אם תוכלו לתרום כמה שקלים!
                                </p>
                            </React.Fragment>
                        )} 
                    </Container>
                </Jumbotron>
                <Container style={{textAlign:'center'}}>
                    <iframe title='donateform' src="https://donorbox.org/embed/buyvsrent-donate"
                        height="685px" width="100%" className='ml-sm-5 pl-sm-2'
                        style={{maxWidth:'500px', minWidth:'310px', maxHeight:'none!important'}}
                        name="donorbox" frameborder="0" scrolling="no" allowpaymentrequest/>
                </Container>
            </React.Fragment>
        )
    }
}
export default withRouter(Donate)