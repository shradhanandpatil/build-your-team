import React from 'react'
import { Form, Formik , Field} from 'formik'
import * as Yup from 'yup'
import "../CSS/style.css"
import Home from './Home'
import axios from 'axios'
import { BaseUrl } from '../BaseUrl'
import { useNavigate } from 'react-router-dom'
import { toast , ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function GetQuote({ closeModal ,data}) {

  const navigate= useNavigate();
  const newData=data
  const stack=[];
  for(let i=0; i< newData.length;i++){
    stack.push(`${newData[i]}:${newData[i+1]}`);
    i+=1;
  }
  const newText=stack.join('|');

    const handelPost= async(value,newText)=>{
      try{
        if(newText===""){
          toast.error('Please Select Technologies', {
            position: "top-right",
            autoClose: 700,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            });
        }else{
          toast.success('Submitted Successfully', {
            position: "top-right",
            autoClose: 700,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            });
       const data={
        "email": `${value.email}`,
        "stack": `${newText}`,
        "phoneNo":`${value.number}`,
        "name":`${value.name}`
        }
      await axios.post(`${BaseUrl}`,data);
      localStorage.setItem('done',true);
      navigate('/contactus');
    }}catch(err){
      console.log(err);
    }
}
  const initialValues={
    number:'',
    email:'',
    name:'',
  }

    const validation=Yup.object({
      number: Yup.string()
      .typeError("Please Enter Valid Contact Number")
      .matches(/^[0-9]{10}$/, 'Invalid mobile number')
      .required('Mobile number is required'), 

        email: Yup.string()
        .email('Email is invalid')
        .required('Required'),
    
        name: Yup.string()
        .min(2,' name is must be more then 2 characters')
        .required('Required'),
      })
    
  return (
    <>
    <div className='background-container' >
      <div className='home'>
        <Home/>
      </div>
      <div className="form-container">
      <Formik
          initialValues={initialValues}
          validationSchema={validation}

          onSubmit={
            value => handelPost( value,newText)
          }
        >
        {({ errors, touched }) => (
              <Form className='form'>
                <div className="form-header">
                    <h2 className='form-heading'>Get Quote</h2>
                    <button className='close' onClick={closeModal}><i className="fa-solid fa-xmark"></i></button>
                </div>
                  <Field type='text' name='code' placeholder="+91" value="+91" className="input country-code"/>
                  <Field className='input number' name="number" maxLength={10} placeholder='Mobile Number' type='text'/>
                  {errors.number && touched.number ? (
                    <div className='error'>{errors.number}</div>
                  ) : null}
                  <Field className='input' name="email" placeholder='Enter your email' type="email" />
                  {errors.email && touched.email ? <div className='error'>{errors.email}</div> : null} 

                  <Field className='input' name="name" placeholder='Enter full name  ' type='text' />
                  {errors.name && touched.name ? (
                    <div className='error'>{errors.name}</div>
                  ) : null}
                  <button type="submit" className='form-btn grad'>Done</button>
            </Form>
       )}
      </Formik>
    </div>
  </div>
  <ToastContainer/>
    </>
  )
}

export default GetQuote
