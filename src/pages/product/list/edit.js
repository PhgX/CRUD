import { useContext, useState } from "react";
import AppContext from "../../../context/AppContext";
import { useParams, Link } from "react-router-dom";
import { Formik, Form, ErrorMessage, Field } from "formik";

export function Edit () {
    const [list, setList] = useState(useContext(AppContext))
    const [form, setForm] = useState({
        name: "",
        price: ""
    })

    let {index}= useParams();
   

    const handleEdit = (index, values, form) => {
        list.splice(index, 1, values)
        form.resetForm();
    }
 

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

    return (
        <Formik 
          initialValues={form}
          enableReinitialize
          validate={handleValidate}
          onSubmit = {(values, form) => {
            handleEdit(index, values, form)
          }
        }
        >
        {() => (
          <Form>
            <Field name = 'name' type = 'text' ></Field>
            <ErrorMessage name='name' className='custom-input-error'></ErrorMessage>
            <br />
            <Field name = 'price' type = 'number'></Field>
            <ErrorMessage name='price' className='custom-input-error'></ErrorMessage>
            <br />
            <button type="submit">Save</button>
            <Link to={`/product`}>List</Link>
          </Form>
        )}
        </Formik>
    )
}