import React from 'react';
import {Jumbotron, Container, Row, Image, Col, Button} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'
import './social_buttons.css'
import './fonts.css'
// import {WhatsappShareButton, WhatsappIcon} from 'react-share'



class Results extends React.Component{
    
    constructor(props){
        super(props)
        this.fetchAPI = this.fetchAPI.bind(this)
    }

    async fetchAPI(vars){
        const path = this.props.location.pathname;
        const lan = path.slice(1,3)
        
        var url = new URL('https://www.buyvsrent.xyz/api/getimages/')
        Object.keys(vars).forEach(key => url.searchParams.append(key, vars[key])) 
        url.searchParams.append('lan', lan)
        try{
            let result = await fetch(url); //wait until request is finished
            let responseOK = result && result.ok;
            if (responseOK){
                let data = await result.json();
                await localStorage.setItem('pics', JSON.stringify(data));
                await localStorage.setItem('pics_lan', lan)

            }
          }
        catch(err){
            alert(err.toString());
            this.props.history.push('/error');
        }
    }

    async componentDidMount(){
        var pics = JSON.parse(localStorage.getItem('pics'));
        if (!pics){
            var vars = JSON.parse(localStorage.getItem('vars'));
            if (!vars){
                this.props.history.push('/error');
                return;
            }
            await this.fetchAPI(vars)
        }
    }

    async componentDidUpdate(){
        const path = this.props.location.pathname;
        const lan = path.slice(1,3)
        const pics_lan = await localStorage.getItem('pics_lan')
        if (lan !== pics_lan){
            var vars = await JSON.parse(localStorage.getItem('vars'));
            await this.fetchAPI(vars)
             // may want to find an alternative to the use of this function. might use setstate for pics
            this.forceUpdate()
        }
    
    }
    
    render(){
        const path = this.props.location.pathname;
        const lan = path.slice(1,3)
        const en = ((lan === 'en') ? true: false);
        var pics = JSON.parse(localStorage.getItem('pics'));
        return(
                <React.Fragment>
                <Jumbotron fluid>
                    <Container>
                        {en ? (
                            <React.Fragment>
                                <h3 className='font_titillium'><b>Results</b></h3>
                                <p className="lead">
                                    Here you are given custom made graphs personalized to your profile. Each graph has
                                    a different meaning. Each one helps towards getting a better understanding of what
                                    it means to purchase a home. If you want to learn more about the methodology check
                                    out the additional info page. 
                                </p>
                                <hr className="my-4"/>
                                <p>Feel free to browse through the images and save or share the most interesting ones.</p>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <h3 dir='rtl' style={{textAlign:'right'}} className='font_arimo'><b>תוצאות</b></h3>
                                <p dir='rtl' className="lead font_arimo" style={{textAlign:'right'}}>
                                    כאן מוצגים גרפים שנוצרו על סמך הנתונים שהזנת. לכל גרף משמעות שונה וניתן להסיק ממנו
                                    משהו אחר. כל אחד מהם נותן הסתכלות אחרת על מנת לעזור להבין מה ההשלכות של קניית דירה
                                    לעומת לשכור דירה. אם תרצו ללמוד עוד על המתדולוגיה ניתן לבקר בעמוד מידע נוסף.
                                </p>
                                <hr className="my-4"/>
                                <p dir='rtl' className="font_arimo" style={{textAlign:'right'}}>
                                    אתם מוזמנים לדפדף בין התמונות ולשמור או לשתף את אלו שמצאתם כמעניינים ביותר.</p>
                            </React.Fragment>
                        )}
                    </Container>
                </Jumbotron>

                {!!pics &&  /* renders only if pics were found in local storage*/
                    <Container fluid className='pl-lg-5 ml-lg-5 pr-lg-5 mr-lg-5 mx-0'>  
                        <Row className="justify-content-center">
                            {Object.keys(pics).map((key, i) =>
                                <React.Fragment key={key}>
                                    <Col xl={5} xs={12} style={{textAlign:'center'}}>
                                        <Image src={"data:image/png;base64,"+pics[key]} fluid alt={key} />
                                        <br/>
                                        <a  href={"data:image/png;base64,"+pics[key]} download={key}>
                                            <Button size='sm'>
                                            {en ? 'Save' : 'שמור'}
                                            </Button></a>

                                        {/* <!-- Sharingbutton E-Mail -->
                                        <a class="resp-sharing-button__link" href="mailto:?subject=&amp;body=http%3A%2F%2Fsharingbuttons.io" target="_self" rel="noopener" aria-label="">
                                        <div class="resp-sharing-button resp-sharing-button--email resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z"/></svg>
                                            </div>
                                        </div>
                                        </a> */}

                                        {/* <!-- Sharingbutton WhatsApp --> */}
                                        {/* <a class="resp-sharing-button__link" href={"https://profitquery.com/add-to/whatsapp/?title=[title]&url=[url]&img=[img]&image_sharer=1" + "data:image/png;base64,"+pics[key]} target="_blank" rel="noopener noreferrer" aria-label="">
                                        <div class="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"/></svg>
                                            </div>
                                        </div>
                                        </a> */}

                                        {/* <!-- Sharingbutton Telegram --> */}
                                        {/* <a class="resp-sharing-button__link" href={"https://telegram.me/share/url?text=&amp;url="+"data:image/png;base64,"+pics[key]} target="_blank" rel="noopener noreferrer" aria-label="">
                                        <div class="resp-sharing-button resp-sharing-button--telegram resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M.707 8.475C.275 8.64 0 9.508 0 9.508s.284.867.718 1.03l5.09 1.897 1.986 6.38a1.102 1.102 0 0 0 1.75.527l2.96-2.41a.405.405 0 0 1 .494-.013l5.34 3.87a1.1 1.1 0 0 0 1.046.135 1.1 1.1 0 0 0 .682-.803l3.91-18.795A1.102 1.102 0 0 0 22.5.075L.706 8.475z"/></svg>
                                            </div>
                                        </div>
                                        </a> */}

                                        {/* <WhatsappShareButton url={"data:image/png;base64,"+pics[key]}
                                            children={<WhatsappIcon size={32} />}
                                        /> */}


                                    </Col>
                                    {i % 2 === 1 &&
                                        <div className="w-100 d-none d-sm-block"/>}
                                </React.Fragment>
                            )}
                        </Row>
                    </Container>
                }
                <br />
            </React.Fragment>
        )
    }
}
export default withRouter(Results);