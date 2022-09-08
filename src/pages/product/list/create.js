import {ErrorMessage, Field, Form, Formik} from "formik";
import { useState, useContext } from "react";
import AppContext from "../../../context/AppContext";
import { Link } from "react-router-dom";

export default function CreateProduct () {
    const [list, setList] = useState(useContext(AppContext))
    const [form, setForm] = useState(
        {
            name: '',
            price: ''
        }
    )
    const handleValidate = (values) => {
        let error = {}
        if(!values.name) {
            error.name = 'Name is required'
        }
        if(!values.price) {
            error.price = "Price is required"
        }
        return error
    }

    const handleSubmit = (values) => {
        list.push(values)
        console.log(list);
    }

    return (
        <Formik 
          initialValues={form}
          enableReinitialize
          validate={handleValidate}
          onSubmit = {(values) => {
            handleSubmit(values)
          }
        }
        >
        {() => (
          <Form>
            <Field name = 'name' type = 'text'></Field>
            <ErrorMessage name='name' className='custom-input-error'></ErrorMessage>
            <br />
            <Field name = 'price' type = 'number'></Field>
            <ErrorMessage name='price' className='custom-input-error'></ErrorMessage>
            <br />
            <button>Create</button>
            <Link to={`/product`}>List</Link>
          </Form>
        )}
        </Formik>
    )
}