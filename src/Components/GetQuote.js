import React, { useState } from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import "../CSS/style.css";
import Home from "./Home";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function GetQuote({ closeModal, data}) {
  const [phone, setPhone] = useState();
  // const [fullName , setFullName] = useState('');
  // const [organization , setOrganization] = useState('');
  // const [email , setEmail] = useState('');
  const navigate = useNavigate();
  const newData = data;
  const stack = [];
  for (let i = 0; i < newData.length; i++) {
    stack.push(`${newData[i]}:${newData[i + 1]}`);
    i += 1;
  }
  const newText = stack.join("|");

  const handelPost = async (value,phone,newText) => {
    if (newText === "") {
      toast.error("Please Select Technologies", {
        position: "top-right",
        autoClose: 700,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Submitted Successfully", {
        position: "top-right",
        autoClose: 700,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
      const data = {
        email: value.email,
        stack: newText,
        phoneNo: phone,
        name: value.name,
        organization:value.organization
      };

      await axios
        .post(process.env.REACT_APP_BASE_URL + "/DevStack/Email", data)
        .then(() => navigate("/contactus"), localStorage.setItem("done", true))
        .catch((err) => console.log(err));
    }
    closeModal();
  };

  const initialValues = {
    number: "",
    email: "",
    name: "",
    organization:""
  };

  const validation = Yup.object({
    // number: Yup.string()
    //   .typeError("Please Enter Valid Contact Number")
    //   .matches(/^[0-9]{10}$/, "Invalid mobile number")
    //   .required("Mobile number is required"),

    email: Yup.string()
              .email("Email is invalid")
              .required("Required"),

    name: Yup.string()
      .min(2, " name is must be more then 2 characters")
      .required("Required"),

    organization: Yup.string()
      .min(2, " name is must be more then 2 characters")
      .required("Required"),
  });

  return (
    <>
      <div className="background-container">
        <div className="home">
          <Home />
        </div>
        <div className="form-container">
          <Formik
            initialValues={initialValues}
            validationSchema={validation}
            onSubmit={(value)=>{
              console.log(value);
              handelPost(value,phone,newText)
            }}
          >
            {({ errors, touched }) => (
              <Form className="form">
                <div className="form-header">
                  <h2 className="form-heading">Get Quote</h2>
                  <button className="close" onClick={closeModal}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
                
                <PhoneInput
                    id={"phoneId"}
                    style={{ width:"100%",
                      padding:"1rem",
                      borderRadius: "10px",
                      border: "1.9px solid rgba(12, 130, 240)",
                      marginTop: "1rem",
                      }}
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={setPhone}
                    rules={{ required: true }}            
                  />
                {/* {errors.number && touched.number ? (
                  <div className="error">{errors.number}</div>
                ) : null} */}
                <Field
                  className="input"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  // value={email}
                  // onChange={(e)=>setEmail((e.target.value))}
                />
                {errors.email && touched.email ? (
                  <div className="error">{errors.email}</div>
                ) : null}

                <Field
                  className="input"
                  placeholder="Enter full name  "
                  name="name"
                  type="text"
                  // value={fullName}
                  // onChange={(e)=>setFullName((e.target.value))}
                />
                {errors.name && touched.name ? (
                  <div className="error">{errors.name}</div>
                ) : null}
                <Field
                  className="input"
                  name="organization"
                  placeholder="Enter your organization name"
                  type="text"
                  // value={organization}
                  // onChange={(e)=>setOrganization((e.target.value))}
                />
                {errors.organization && touched.organization ? (
                  <div className="error">{errors.organization}</div>
                ) : null}
                <button type="submit" className="form-btn grad">
                  Done
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default GetQuote;
