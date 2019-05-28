import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import withRouter from 'react-router-dom/withRouter'
import './fonts.css'
import salary_graph from './salary_graph.png'

class AdditionalInfo extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Jumbotron fluid className='' >
                    <Container className=''>
                        <h1 className='font_titillium'><b>Additional Info</b></h1>
                        <hr className="my-4"/>
                        <p className="lead">
                        Here you can read about the app's methodology and it's various assumptions.
                        </p>
                        {/* <p>bla bla</p> */}
                    </Container>
                </Jumbotron>
                <Container>
                    <h2 className='font_titillium'>Methodology</h2>
                    <p className='font_titillium'>
                    The app takes user's variables and does two things. First it simulates 'Years To Future' years in
                    which the person purchases a home. Then, it does the same except instead of simulating a purchase
                    it simulates renting for the same time period.<br/>
                    I will explain each simulation separatly:</p>
                    <p className='font_titillium'>When simulating purchasing a home the algorithm is basically the following:</p>
                    <p className='font_titillium' style={{paddingLeft:'10px'}}>
                    We save money until we have enough money for the minimum down payment for the home which
                    today in Israel is 25% of the home's price. During this time we rent a home. The
                    'Years to Save' input depicts if we want to wait a minimum amount of years before purchasing
                    a home, for example to check if given the economic variables entered, it is more profitable
                    to wait a couple of years before purchasing a home.
                    </p>
                    <p className='font_titillium' style={{paddingLeft:'10px'}}>
                    Now we simulate the purchase. We pay all of the current available savings to the down
                    payment. We calculate the mortgage, and the number of years it will take for us to pay it
                    off.
                    </p>
                    <p className='font_titillium' style={{paddingLeft:'10px'}}>
                    We have paid off the mortgage, so now all of our savings from net are invested in a
                    savings account. We now save until the time period in to the future we are interested in is
                    over. We save our assets value at the end of the time period, which consists of the
                    estimated house value and the savings account content.
                    </p>

                    <p className='font_titillium'>Simulating renting a home is more simple.</p>
                    <p className='font_titillium' style={{paddingLeft:'10px'}}>
                    Each month, we calculate the amount of money from the net salary is available for rent expenses +
                    as well as for investments. We then invest the money throughout the whole time period, if we
                    are good investors, than our assets value will be higher. We calculate the assets value with a
                    compound interest algorithm, and compare with the parallel option in which we bought a house
                    instead of renting one.
                    </p>

                    <h2 className='font_titillium'>Assumptions</h2>
                    <p className='font_titillium'>The following assumptions are made:</p>
                    <p className='font_titillium' style={{paddingLeft:'10px'}}>
                    First of all, owning a home has sentimental and emotional value which is most likely not received
                    when renting a home. This sentimental value is not taken in to account throughout the calculations,
                    and each person must consider for themselves it's significance.<br/>
                    While paying off the mortgage: We do not invest or save any money, all available money is used to
                    pay off mortgage, in order to pay off as quickly as possible.<br/>
                    It is assumed that you are a salaried employee and not self-employed (self-employed people have
                    different tax brackets, employer severence and pension amounts are different too).<br/>
                    It is also assumed that you are offered and save in a Keren Hishtalmut, and while paying off
                        mortgage you pay its entirety every 6 years towards the mortgage.<br/>
                    You set aside 6% of your gross salary for a pension fund (Israeli law).
                    </p>

                    <h2 className='font_titillium'>Other Stuff</h2>
                    <p className='font_titillium'>
                    Here is a graph which shows gross salary vs net salary (after income tax deductions,
                    health & social insurance, pension & keren hishtalmut deductions) and savings (pension,
                    employer pension additions, keren hishtalmut, employer keren hishtalmut additions, and employer
                    severance fees additions), and the sum of the net and the savings.
                    </p>
                    <div className='text-center'>
                        <Image src={salary_graph} fluid alt='salary graph'/>
                        <br/>
                        <a href={salary_graph} download='salary graph'><Button size='sm'>Save</Button></a>
                    </div>

                    <h2 className='font_titillium'>Logistic Regression, PCA, and more</h2>
                    <p className='font_titillium'>
                    To Be Continued
                    </p>
                    <br/>
                </Container>
            </React.Fragment>
        )
    }
}
export default withRouter(AdditionalInfo)