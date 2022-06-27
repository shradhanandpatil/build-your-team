import React from 'react'
import { Form, Formik , Field} from 'formik'
import * as Yup from 'yup'
import "../CSS/style.css"
import Home from './Home'

function GetQuote({ closeModal}) {
  const initialValues={
    number:'',
    email:'',
    name:'',
  }

    const validation=Yup.object({
      number: Yup.string()
      .max(10, 'Mobile number should be 10 digits only')
      .matches(/^[0-9]{10}$/, 'Invalid mobile number')
      .required('Mobile number is required'), 

        email: Yup.string()
        .email('Email is invalid')
        .required('Required'),
    
        name: Yup.string()
        .min('Must be 2 characters')
        .required('Required'),
      })
    
  return (
    <>
    <div className='background-container'>
      <div className='home'>
        <Home/>
      </div>
      <div className="form-container">
      <Formik
          initialValues={initialValues}
          validationSchema={validation}
        >
        {({ errors, touched }) => (
              <Form className='form'>
                <div className="form-header">
                    <h2 className='form-heading'>Get Quote</h2>
                    <button className='close' onClick={closeModal}><i class="fa-solid fa-xmark"></i></button>
                </div>
                  <Field type='text' name='code' placeholder="+91" className="input country-code"/>
                  <Field className='input number' name="number" placeholder='Mobile Number' type='tel'/>
                  {errors.number && touched.number ? (
                    <div className='error'>{errors.number}</div>
                  ) : null}
                  
                  <Field className='input' name="email" placeholder='Enter your email' type="email" />
                  {errors.email && touched.email ? <div className='error'>{errors.email}</div> : null} 

                  <Field className='input' name="name" placeholder='Enter name ' type='text' />
                  {errors.name && touched.name ? (
                    <div className='error'>{errors.name}</div>
                  ) : null}
                  <button type="submit" className='form-btn grad'>Done</button>
            </Form>
       )}
      </Formik>
    </div>
  </div>
    </>
  )
}

export default GetQuote
