import React, {useState} from 'react'
import { useFormik } from "formik"
import * as Yup from 'yup'

const ContactForm = () => {
    const emailRegex = new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )

    const [errorMessage, setErrorMessage] = useState('')
    const [validMessage, setValidMessage] = useState('')
    const form = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },

        validationSchema: Yup.object( {
            name: Yup.string()
                .required("First name is required")
                .min(2, "Your first name has to consist of at least 2 characters"),

            email: Yup.string()
                .required("Email is required")
                .matches(emailRegex, "Your e-mail adress must be valid"),


            message: Yup.string()
                .required("A message is required")
                .min(3, "The message must consist of at least 3 characters")
        }),

        onSubmit: async (values,  { resetForm }) => {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(values)

            })



            switch (result.status) {
                case 200:
                    setValidMessage('Meddelandet har skickats')
                    console.log('Meddelandet har skickats')
                    resetForm();
                    break;
                case 400:
                    setErrorMessage('Något gick fel')
                    console.log('något gick fel')
                    break;
                default:
                    console.log('Ohanterat felmeddelande')
            }
            
        }
    })

    return (
        <section className="message-form">
                <div className="container">
                    <div className="section-title">
                        <h2>Leave us a message for any information.</h2>
                    </div>
                    <div className="form">
                        <form onSubmit={form.handleSubmit} noValidate>
                            <p className="errorMessage">{errorMessage}</p>
                            <div>
                                <label className={(form.touched.name && form.errors.name) ? 'error': ''}>{form.touched.name && form.errors.name  ? form.errors.name : ''}</label>
                                <input type="text" tabIndex="1" placeholder="First name*" name="name" value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur} />
                            </div>
                            <div>
                                <label className={(form.touched.email && form.errors.email) ? 'error': ''}>{form.touched.email && form.errors.email  ? form.errors.email : ''}</label>
                                <input type="email" tabIndex="2" placeholder="email*" name="email" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} />
                            </div>
                            <div>
                                <label className={(form.touched.message && form.errors.message) ? 'error': ''}>{form.touched.message && form.errors.message  ? form.errors.message : ''}</label>
                                <textarea className="message" name="message" cols="30" rows="10" placeholder="Your message*"  tabIndex="3" value={form.values.message} onChange={form.handleChange} onBlur={form.handleBlur} ></textarea>
                            </div>
                            <button type="submit" tabIndex="4">Send Message <i className="fa-regular fa-arrow-up-right"></i></button>
                            <p className="validMessage">{validMessage}</p>
                        </form>
                         
                    </div>
                </div>
            </section>
    )
    
}

export default ContactForm