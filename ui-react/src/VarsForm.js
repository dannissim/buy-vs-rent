import React from 'react'
import {Form, InputGroup, Container, Row, Col, Button, Popover, OverlayTrigger} from 'react-bootstrap'
import {object, number} from 'yup';
import {Formik} from 'formik';
// import {Persist} from 'formik-persist';
import {withRouter} from 'react-router-dom'
// import {fetchAPI} from './App.js';
import './fonts.css'

/*  Things left for me to implement: implement sumbitHandler: save to localStorage, if valid send request to server
        and redirect to /results page, if not show form, and set initial values with localstorage x
    implement resetHandler: reset form, and delete localstorage. x
    initially set form according to localstorage x
    * add information buttons on all of the inputs, explaining what each variable means - use bootstrap popover x
    * add material colors to pages: customize background, navbar, jumbotron, footer and button colors x
    * try using sliders for last 5 percentage entries - don't hink so
    * try to group related fields together x
    * don't think i want handleblur validation error, maybe add success feedback x
    * add back to top button x

    afterwards:
    - set up server api x
    - create results page, try lightbox, add social buttons x
    - Add footer and Navbar, add social buttons to footer x
    inorder:
    - add hebrew support x
    - Add static pages: setup donate page, resources, privacy policy, terms of use, about page.
    - finish translating home page, about, donate   
    - Update assets calculation algorithm, test
    - Add blog post page: explain all research, all assumptions, process of work on project
    - fix and optimize with testing tools (eg. lighthouse)
    - purchase domain name
    - deploy to pythonanywhere, add https
    - add ads
    - create pwa and add to play store
*/



// fields to be shown in form
const fields =
    // [fieldName, fieldLabel en, append en, var info for popover en, fieldLabel he, append he, infor he]
    // when adding here, must add validation requirements to schema as well
    [
    //     ["age", "Age", "",
    // "This is used for"],
        ["retirement", "Years Until Retirement", "",
            "This is used for",
            "שנים עד יציאה לפנסיה",
            "",
            "נתון זה משומש על מנת ש"],
        ["save", "Years To Save", "",
            "This is used for",
            'שנים לחסוך לפני רכישה',
            "",
            "נתון זה משומש על מנת ש"],
        ["future", "Years To Future", "",
            "This is used for",
            'שנים קדימה',
            "",
            "נתון זה משומש על מנת ש"],
        ["startamount", "Start Amount", "Thousand ₪",
            "This is used for",
            'סכום התחלתי',
            "אלף ₪",
            "נתון זה משומש על מנת ש"],
        ["salary", "Gross Salary", "Thousand ₪",
            "This is used for",
            'שכר ברוטו',
            "אלף ₪",
            "נתון זה משומש על מנת ש"],
        ["savingsrate", "Savings Rate From Net", "%",
            "This is used for",
            'שעור חסכון משכר ברוטו',
            "%",
            "נתון זה משומש על מנת ש"],
        ["houseprice", "House Price", "Million ₪",
            "This is used for",
            'מחיר דירה',
            "מיליון ₪",
            "נתון זה משומש על מנת ש"],
        ["rent", "Rent", "Thousand ₪",
            "This is used for",
            'שכירות',
            "אלף ₪",
            "נתון זה משומש על מנת ש"],
        ["housepricegrowth", "House Price Growth", "%",
            "This is used for",
            'קצב גדילת מחיר הדירה',
            "%",
            "נתון זה משומש על מנת ש"],
        ["rentgrowth", "Rent Growth", "%",
            "This is used for",
            'קצב גדילת מחיר השכירות',
            "%",
            "נתון זה משומש על מנת ש"],
        ["savingsreturn", "Long Term Savings Return", "%",
            "This is used for",
            'ריבית חסכון לתווך רחוק',
            "%",
            "נתון זה משומש על מנת ש"],
        ["mortgageinterest", "Mortgage Interest", "%",
            "This is used for",
            'ריבית משכנתא',
            "%",
            "נתון זה משומש על מנת ש"],
        ["salarygrowth", "Salary Growth", "%",
            "This is used for",
            'קצב גדילת השכר',
            "%",
            "נתון זה משומש על מנת ש"],
    ];

//  Validation Requirements for each field
const schema = object().shape({
    // age: number()
    //     .min(18, 'Must be at least 18')
    //     .max(120, 'Too High')
    //     .integer('Must be a whole number')
    //     .required('Required'),
    retirement: number()
        .min(0, 'Must be at least 0')
        .max(70, 'Too High')
        .integer('Must be a whole number')
        .required('Required'),
    save: number()
        .min(0, 'Must be at least 0')
        .max(50, 'Too High')
        .integer('Must be a whole number')
        .required('Required'),
    future: number()
        .max(100, 'Too High')
        .integer('Must be a whole number')
        .required('Required')
        .min(5, 'Too Little'),
    startamount: number()
        .min(0, 'Must be at least 0')
        .max(5000, 'If you have this much, this isn\'t for you')
        .integer('Must be a whole number')
        .required('Required'),
    salary: number()
        .min(5, 'Must be above min. wage')
        .max(70, 'If you make this much, this isn\'t for you')
        .required('Required'),
    savingsrate: number()
        .min(1, 'Too Little')
        .max(95, 'Invalid Percentage')
        .integer('Must be a whole number')
        .required('Required'),
    houseprice: number()
        .min(0.4, 'Too Little')
        .max(7, 'Too High')
        .required('Required'),
    rent: number()
        .min(1.5, 'Too Little')
        .max(10, 'Too High')
        .required('Required'),
    housepricegrowth: number()
        .min(-10, 'Too Little')
        .max(10, 'Too High')
        .required('Required'),
    rentgrowth: number()
        .min(-1, 'Too Little')
        .max(10, 'Too High')
        .required('Required'),
    savingsreturn: number()
        .min(1, 'Too Little')
        .max(16, 'Too High')
        .required('Required'),
    mortgageinterest: number()
        .min(1, 'Too Little')
        .max(9, 'Too High')
        .required('Required'),
    salarygrowth: number()
        .min(-1, 'Too Little')
        .max(10, 'Too High')
        .required('Required')
});

const he_schema = object().shape({
    // age: number()
    //     .min(18, 'Must be at least 18')
    //     .max(120, 'Too High')
    //     .integer('Must be a whole number')
    //     .required('Required'),
    retirement: number()
        .min(0, 'חייב להיות לפחות 0')
        .max(70, 'גבוה מדי')
        .integer('חייב להיות מספר שלם')
        .required('שדה נדרש'),
    save: number()
        .min(0, 'חייב להיות לפחות 0')
        .max(50, 'גבוה מדי')
        .integer('חייב להיות מספר שלם')
        .required('שדה נדרש'),
    future: number()
        .max(100, 'גבוה מדי')
        .integer('חייב להיות מספר שלם')
        .required('שדה נדרש')
        .min(5, 'קטן מדי'),
    startamount: number()
        .min(0, 'חייב להיות לפחות 0')
        .max(5000, 'אם יש לך סכום כזה, זה לא בשבילך')
        .integer('חייב להיות מספר שלם')
        .required('שדה נדרש'),
    salary: number()
        .min(5, 'חייב להיות מעל שכר מינ\'')
        .max(70, 'אם אתם מרוויחים סכום כזה, זה לא בשבילכם')
        .required('שדה נדרש'),
    savingsrate: number()
        .min(1, 'קטן מדי')
        .max(95, 'גבוה מדי')
        .integer('חייב להיות מספר שלם')
        .required('שדה נדרש'),
    houseprice: number()
        .min(0.4, 'קטן מדי')
        .max(7, 'גבוה מדי')
        .required('שדה נדרש'),
    rent: number()
        .min(1.5, 'קטן מדי')
        .max(10, 'גבוה מדי')
        .required('שדה נדרש'),
    housepricegrowth: number()
        .min(-10, 'קטן מדי')
        .max(10, 'גבוה מדי')
        .required('שדה נדרש'),
    rentgrowth: number()
        .min(-1, 'קטן מדי')
        .max(10, 'גבוה מדי')
        .required('שדה נדרש'),
    savingsreturn: number()
        .min(1, 'קטן מדי')
        .max(16, 'גבוה מדי')
        .required('שדה נדרש'),
    mortgageinterest: number()
        .min(1, 'קטן מדי')
        .max(9, 'גבוה מדי')
        .required('שדה נדרש'),
    salarygrowth: number()
        .min(-1, 'קטן מדי')
        .max(10, 'גבוה מדי')
        .required('שדה נדרש')
});



// Field Boilerplate code
class VarsField extends React.Component{
    render(){
        const {fieldName, fieldLabel, handleBlur, handleChange, append, touched, errors, values, popover}
         = this.props;
        return(
            <Col xs={8} sm={6} md={4} lg={3} xl={3} className="text-center"> {/*here I choose field size*/}
                <Form.Group controlId={"form"+ fieldName}>
                    <Form.Label>{fieldLabel}</Form.Label>
                    <InputGroup>
                        <Form.Control className="text-center" type="number" name={fieldName}
                            onChange={handleChange} onBlur={handleBlur}
                            isInvalid={!!errors[fieldName] && touched[fieldName]}
                            isValid = {!errors[fieldName] && touched[fieldName]}
                            value={values[fieldName]}
                        />
                        {append &&
                            <InputGroup.Append>
                                <InputGroup.Text id={"inputAppend"+fieldName}>{append}</InputGroup.Text>
                            </InputGroup.Append>
                        }
                        <OverlayTrigger trigger="focus" overlay={
                            <Popover id={"popover"+fieldName}>{popover}</Popover>
                        }>
                            <Button variant="secondary"><i>i</i></Button>
                        </OverlayTrigger>
                        <Form.Control.Feedback type="invalid">
                            {errors[fieldName]}
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Col>
        )
    }
}

//  Overall Form
class VarsForm extends React.Component{

    constructor(props){
        super(props)
        // CRUCIAL- in order for handleSubmit function to have access to props, state
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleReset= this.handleReset.bind(this)
    }

    async handleSubmit(values, {setSubmitting}){
        const path = this.props.location.pathname;
        const lan = path.slice(1,3)
        var valuesUpdatedKeys = {};
        for (var i = 0; i < fields.length; ++i)
            valuesUpdatedKeys[fields[i][1]] = values[fields[i][0]];
        localStorage.setItem('vars', JSON.stringify(valuesUpdatedKeys));
        var url = new URL('http://192.168.1.127:5000/api/getimages/')   // 'buyvsrent.xyz/api/getimages/'
        Object.keys(valuesUpdatedKeys).forEach(key => url.searchParams.append(key, valuesUpdatedKeys[key]))
        url.searchParams.append('lan', lan)
        try{
            let result = await fetch(url); //wait until request is finished
            console.log('igethere')
            let responseOK = result && result.ok;
            if (responseOK){
                let data = await result.json();
                await localStorage.setItem('pics', JSON.stringify(data)); // may need to add await before
                console.log(Object.keys(data))
                await localStorage.setItem('pics_lan', lan)
                this.props.history.push('/'+lan+'/results');
                setSubmitting(false);
            }
        }
        catch(err){
            alert(err.toString());
            this.props.history.push('/error');
            setSubmitting(false);
        }
    }

    render(){
        const path = this.props.location.pathname;
        const lan = path.slice(1,3)
        const en = ((lan === 'en') ? true: false);
        // const lan = this.props.lan;
        var vars = JSON.parse(localStorage.getItem('vars'));
        var initial = {};
        if (vars != null){
            for (var i = 0; i < fields.length; ++i){
                let fieldName = fields[i][0];
                let fieldLabel = fields[i][1];
                initial[fieldName] = vars[fieldLabel];
            }
        }
        else{
            var empty = {};
            for (i = 0; i < fields.length; ++i){
                let fieldName = fields[i][0];
                empty[fieldName] = "";
            }
            initial = empty;
        }
        return(
            <Formik
                enableReinitialize={true}
                initialValues={initial}
                onSubmit={this.handleSubmit}
                validationSchema={en ? schema : he_schema}
            >
                {({
                    handleChange,
                    touched,
                    errors,
                    handleBlur,
                    values,
                    handleSubmit,
                    isSubmitting,
                    setSubmitting
                    //handleReset,
                    //isValid,
                }) => (
                    <Container>
                        <Form onSubmit={handleSubmit}  /*onReset={handleReset}*/>
                            <Row className="justify-content-center">
                                {fields.map((field, i) =>
                                    <React.Fragment key={"fragment" + field[0]}>
                                        { i === 0 &&
                                            <React.Fragment>
                                                {en ?                                                    
                                                    <h5 className='font_titillium'><b>Personal Variables</b></h5> :
                                                    <h5 className='font_arimo'><b>נתונים אישיים</b></h5>
                                                }
                                                <hr className='myhr'/>
                                                <div className='w-100'/>
                                            </React.Fragment>
                                        }
                                        { [3, 6, 11].includes(i) && <div className='w-100'/>}

                                        { i === 8 &&
                                            <React.Fragment>
                                                <div className='w-100'/>
                                                {en ?                                                    
                                                    (<h5 className='font_titillium'><b>Economic Variables</b></h5>) :
                                                    (<h5 className='font_arimo'><b>נתונים כלכליים</b></h5>)
                                                }
                                                <hr className='myhr'/>
                                                <div className='w-100'/>
                                            </React.Fragment>
                                        }
                                        <VarsField fieldName={field[0]} fieldLabel={en ? field[1] : field[4]}
                                            append={en ? field[2] : field[5]} touched={touched}
                                            handleBlur={handleBlur} handleChange={handleChange}
                                            errors={errors} values={values} popover={en ? field[3] : field[6]}
                                        />
                                        {/* in desktop view, we want a new line every 3 fields, i starts from 0 */}
                                        {/* { i % 3 === 2 && <div className="w-100 d-none d-md-block"/>} */}
                                        {/* { i % 2 === 1 && <div className="w-100 d-none d-block d-lg-none"/>} */}
                                    </React.Fragment>
                                )}
                            </Row>

                            {/* Buttons */}
                            <div className="text-center">
                                {/* may want to add: disabled={!!errors} */}
                                <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
                                {lan === 'en' ? 'Go To Results' : 'לתוצאות'}
                                </Button>
                            </div>

                            {/*optional reset button */}
                            {/* <div className="text-center mt-3">
                                <Button type="reset" onClick={handleReset} variant="secondary" size="sm">
                                    Reset Variables</Button>
                            </div> */}

                             {/*makes form persistent, uses browser local storage - currently not working with isSubmitting*/}
                            {/* <Persist name="varsform"/> */}
                            {/* newline for looks */}
                            <br />
                        </Form>
                    </Container>
                )}
            </Formik>
        )
    }
}
export default withRouter(VarsForm);    //withRouter automatically passes VarsForm history prop
