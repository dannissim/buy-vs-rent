// onSubmit (values){
        // const form = event.currentTarget;
        // console.log(values)
        // if (form.checkValidity() === false){
        //     event.preventDefault();
        //     event.stopPropagation();
        // }

        // can make async request to server here, maybe wait for response, and on response redirect to results page
        // should save input to cookies
        // event.prevetDefault();
        // event.stopPropagation();
        // var target = event.target;
        // for (var i = 0; i < fields.length; ++i){
        //     var fieldName = fields[i][0];
        //     console.log(event.target);
            // console.log(fieldName);
            // console.log(target.fieldName.value);
            // localStorage.setItem(fieldName, target.fieldName.value);

        // }
        // var values = {};
        // for (var i = 0; i < fields.length; ++i){
        //     var fieldName = fields[i][0];
        //     var fieldVal = document.getElementById("form"+fieldName).value;
        //     // values[fieldName] = fieldVal;
        //     // localStorage.setItem('values', JSON.stringify(values));
        //     localStorage.setItem(fieldName, fieldVal);
        // }

            //    localStorage.setItem(value, values[value]);
        // }
        // console.log('hello1');
        // console.log(JSON.stringify(event.target));

        // console.log(JSON.stringify(values));
        // console.log(JSON.stringify(localStorage));
        // console.log(JSON.stringify(values));
    // }

    // handleReset(){
        // for (var value in values){
        //     values[value] = null;
        // }
        // localStorage.clear();
        // document.getElementById("formikform").reset();
        // resetForm({});
        // console.log(JSON.stringify(localStorage));
        // console.log('hello');
        // for (var i = 0; i < fields.length; ++i){
        //     var fieldName = fields[i][0];
        //     document.getElementById("form"+fieldName).clear();
        // }
    // }
    



            // var initialValues = cookie || {}
        // localStorage.
        // localStorage.clear();
        // var values = {}
        // for (var i =
        // initialValues
        // for (var i = 0; i < fields.length; ++i){
            // let fieldName = fields[i][0];
            // values[fieldName] = localStorage.getItem(fieldName);
            // console.log(values[fieldName]);
            // values[fieldName] = "";
        // }
        // console.log(JSON.stringify(localStorage));
        // console.log(JSON.stringify(initialValues));
        // console.log(values);

                        // enableReinitialize={true}   //this allows update after submit updates cookie, then initialvalues=cookie
                // onSubmit={({values}) => {
                //     console.log(JSON.stringify(values));
                // }}



        // render={({handleSubmit, touched, errors, handleBlur, values, handleReset,
                //     handleChange, isValid, isInvalid}) => (
                    // render={formProps => {
                    //     return(

            /* <input type="number" name="age" onChange={handleChange} onBlur={handleBlur}
                isInvalid={!!errors["age"] && touched["age"]}
                isValid = {!errors["age"] && touched["age"]}
            /> */


            // var empty = {};
// for (var i = 0; i < fields.length; ++i){
//     let fieldName = fields[i][0];
//     empty[fieldName] = "";
// }
// const EnhancedVarsForm = withFormik({
//     redirect: false,
//     response: null,

//     mapPropsToValues: () => (empty),

//     validationSchema: schema,

//     handleSubmit: (values, {redirect, response}) => {
//         var valuesUpdatedKeys = {}
//         for (var i = 0; i < fields.length; ++i)
//             valuesUpdatedKeys[fields[i][1]] = values[fields[i][0]];
//         redirect = true;
//         response = null;    //response
//         // send to server api JSON.stringify(valuesUpdatedKeys)
//         // upon response redirect to /results page
//         // check that results do not indicate error, if they do show form and error alert
//         console.log(JSON.stringify(valuesUpdatedKeys));
//     },

//     handleReset: ({resetForm}) => {
//         localStorage.clear();
//         resetForm({});
//     }
// });



// style={{
//     textDecoration:'underline', textDecorationColor:'rgba(0,0,0, 0.2)'
//     }}

/* <Jumbotron fluid style={{paddingTop: '3%', paddingBottom: '1%'}}> */

// fetch(url)
// .then(res => res.json())
// .then(res => localStorage.setItem('pics', JSON.stringify(res)))
// .catch(err => alert(err.toString()),
//         this.props.history.push('/'));



        // fetch(url)
        // .then(res => res.json())
        // .then(res=> localStorage.setItem('pics', JSON.stringify(res)))
        // .then(function(res){
        //     this.props.history.push('/results');
        //     setSubmitting(false);
        // })
        // .catch(function(err){
        //     alert(err.toString());
        //     this.props.history.push('/error');
        // })

        // try{
        //     let result = await fetch(url); //wait until request is finished
        //     let responseOK = result && result.ok;
        //     if (responseOK){
        //         let data = await result.json();
        //         await localStorage.setItem('pics', JSON.stringify(data)); // may need to add await before
        //         await this.props.history.push('/results')
        //         setSubmitting(false);
        //     }
        // }
        // catch(err){
        //     alert(err.toString());
        //     setSubmitting(false);
        //     this.props.history.push('/error');
        // }
    //     try{
    //         let result = await fetch(url)/*, {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}}*/ //wait until request is finished
    //         let responseOK = result && result.ok;
    //         if (responseOK){
    //             let data = await result.json();
    //             localStorage.setItem('pics', JSON.stringify(data));
    //             setSubmitting(false);

    //         }
    //     }
    //     catch(err){
    //         alert(err.toString());
    //         this.props.history.push('/error');
    //     }

    //     fetch(url)
    //         .then(res => res.json())
    //         .then(function(res){
    //             localStorage.setItem('pics', JSON.stringify(res));
    //             setSubmitting(false);
    //             console.log(JSON.stringify(localStorage.getItem('pics')));
    //         })
    //         .catch(function(err){
    //             alert(err.toString());
    //             this.props.history.push('/error');
    //         })
    //     this.props.history.push('/results')
    // }

        // handleReset(values, {resetForm}){
    //     console.log('hi');
    //     // localStorage.clear();
    //     resetForm({}});
    // }

                // onSubmit={async function(values, {setSubmitting}){
                //     var valuesUpdatedKeys = {};
                //     for (var i = 0; i < fields.length; ++i)
                //     valuesUpdatedKeys[fields[i][1]] = values[fields[i][0]];
                //     localStorage.setItem('vars', JSON.stringify(valuesUpdatedKeys));
                //     var url = new URL('http://192.168.1.127:5000/api/getimages/')
                //     Object.keys(valuesUpdatedKeys).forEach(key => url.searchParams.append(key, valuesUpdatedKeys[key]))
                //     await fetchAPI(url);
                //     setSubmitting(false);
                //     this.props.history.push('/results');
                // }}

                // onSubmit={(values, {setSubmitting}) => console.log(values)}
                // onReset={this.handleReset}

                            // if (!pics){
            //     console.log('igethere');
            //     var vars = JSON.parse(localStorage.getItem('vars'));
            //     if (!vars)
            //         return (<ErrorPage />)
            //         var url = new URL('http://192.168.1.127:5000/api/getimages/')
            //         Object.keys(vars).forEach(key => url.searchParams.append(key, vars[key]))
            //         fetch(url)
            //         .then(res => res.json())
            //         .then(res=> localStorage.setItem('pics', JSON.stringify(res)),
            //         // .then(res=> pics = JSON.parse(localStorage.getItem('pics')))
            //             function(err){
            //                 alert(err.toString());
            //                 this.props.history.push('/error');
            //         })
            //     }                
        
            /* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="TN4RGSARJVC9J" />
            <input type="image" src="https://www.paypalobjects.com/he_IL/IL/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="תרומה באמצעות לחצן PayPal" />
            <img alt="" border="0" src="https://www.paypal.com/he_IL/i/scr/pixel.gif" width="1" height="1" />
            </form> */

                /* <Row style={{position:'relative', overflow:'hidden'}} className='justify-content-center'> */

                                    /* <iframe title='donateform' src="https://donorbox.org/embed/buyvsrent-donate"
                        //style={{maxWidth:'680px', minWidth:'310px', maxHeight:'none!important'}}
                        style={{position:'absolute', border:'0', height:'100%', left: '0', top:'0', width:'100%'}}
                        name="donorbox" frameborder="0" scrolling="no" allowpaymentrequest></iframe> */
                /* </Row> */


// class PageLayout extends React.Component{
//   render(){
//     const match = this.props.match
//     var lan = 'he'  //if lan not specified, default is he
//     if (match.path === '/')
//       this.props.history.replace('/he')
//     if (match.path.length > 1) 
//       lan = match.path.slice(1);
//     const en = (lan === 'en' ? true: false);
//     return(
//       <div  id='page-container' style={{flexDirection: 'column', display: 'flex', minHeight: '100vh'}}>
//         <div id='content-container' style={{flex: '1'}}>
//           <TopNavBar/>
//           {en ? (
//             <Switch>
//               <Route exact path='/en' component={Home} />
//               <Route exact path='/en/results' component={Results} />
//               <Route exact path='/en/contact' component={Contact} />
//               <Route exact path='/en/resources' component={Resources} />
//               <Route exact path='/en/about' component={About} />
//               <Route exact path='/en/donate' component={Donate} />
//               <Route exact path='/en/additionalinfo' component={AdditionalInfo} />
//               <Route exact path='/en/privacy' component={Privacy} />
//               <Route exact path='/en/termsofuse' component={TermsOfUse} />
//               <Route path='/' render={(props) => <ErrorPage {...props} lan='en'/>} />
//             </Switch>

//           ) : (
//             <Switch>
//               <Route exact path='/he' component={Home} />
//               <Route exact path='/he/results' component={Results} />
//               <Route exact path='/he/contact' component={Contact} />
//               <Route exact path='/he/resources' component={Resources} />
//               <Route exact path='/he/about' component={About} />
//               <Route exact path='/he/donate' component={Donate} />
//               <Route exact path='/he/additionalinfo' component={AdditionalInfo} />
//               <Route exact path='/he/privacy' component={Privacy} />
//               <Route exact path='/he/termsofuse' component={TermsOfUse} />
//               <Route path='/' render={(props) => <ErrorPage {...props} lan='he' />} />
//             </Switch>
//           )}
//         </div>
//         <Footer/>
//       </div>
//     )
//   }
// }
  
  // class EnLayout extends React.component{
  //   match = this.props.match
  //   render(){
  //     return(
  //     <></>
  //     )
  //   }
  // }
// async function fetchAPI(url){
//   try{
//     let result = await fetch(url); //wait until request is finished
//     let responseOK = result && result.ok;
//     if (responseOK){
//         let data = await result.json();
//         await localStorage.setItem('pics', JSON.stringify(data)); // may need to add await before
//     }
//   }
//   catch(err){
//       alert(err.toString());
//       this.props.history.push('/error');
//   }
// }



// {/* <LinkContainer to={'/'+lan+'/contact'}>
//     <Nav.Link className="active">
//     {en ? ('Contact') : ('צרו קשר')}
//     </Nav.Link>
// </LinkContainer> */}

