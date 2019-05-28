import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import withRouter from 'react-router-dom/withRouter'

class Privacy extends React.Component{
    render(){
        return(
            <React.Fragment>
            <Jumbotron fluid className='justify-content-center' >
                <Container className='justify-content-center'>
                    <h1>Privacy Policy for Buy VS Rent</h1>
                    <hr className="my-4"/>
                    <p className='lead'>At Buy VS Rent, accessible from https://www.buyvsrent.xyz, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Buy VS Rent and how we use it.</p>
                    <p className='lead'>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at nissim.dan@gmail.com</p>
                </Container>
            </Jumbotron>
            <Container>
                <h2>Log Files</h2>

                <p>Buy VS Rent follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>

                <h2>Google DoubleClick DART Cookie</h2>

                <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></p>

                <h2>Privacy Policies</h2>

                <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Buy VS Rent. Our Privacy Policy was created with the help of the <a href="https://www.privacypolicygenerator.info">Privacy Policy Generator</a>.</p>

                <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Buy VS Rent, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>

                <p>Note that Buy VS Rent has no access to or control over these cookies that are used by third-party advertisers.</p>

                <h2>Third Party Privacy Policies</h2>

                <p>Buy VS Rent's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>

                <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?</p>

                <h2>Children's Information</h2>

                <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

                <p>Buy VS Rent does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

                <h2>Online Privacy Policy Only</h2>

                <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Buy VS Rent. This policy is not applicable to any information collected offline or via channels other than this website.</p>

                <h2>Consent</h2>

                <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
                <br/>
            </Container>
            </React.Fragment>
        )
    }
}
export default withRouter(Privacy)