import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";


const MainForm = ({errors , touched, values, status}) => {
    const [users, setUsers] = useState ([]);
    console.log("u", users);
    useEffect(()=>{
        if (status){
            // const addNewPerson = user =>
            setUsers({ ...users, status});
        }
    }, [status]);

return(

    <div>

<Form>
<Field name ="name" type ="text" placeholder ="name"  />
{touched.name && errors.name && (
    <p>{errors.name}</p>
)}
<Field name ="email" type ="text" placeholder ="email"/>
{touched.email && errors.email &&
   ( <p>{errors.email}</p>
)}
<Field name ="password" type ="password" placeholder ="password"/>
{touched.password && errors.password && 
    (<p>{errors.password}</p>
)}

<label>
          Terms of Service
          <Field
            type="checkbox"
            name="terms"
            checked={values.terms}
          />
          
    </label>



<button type= "submit">Submit</button>

</Form>
 

 
{users.map(user => (
    <ul key={user.id}>
      <li>Name: {user.name}</li>
      <li>Email: {user.email}</li>
      <li>Password: {user.password}</li>
    </ul>
  ))}
</div>
)

};

const FormikMainForm = withFormik({
mapPropsToValues({name, email, password, terms}) {
    return {
        name: name || "",
        email: email || "",
        password: password || "",
        terms: terms || false
    };
    
},
validationSchema: Yup.object().shape({

name: Yup.string().required("Please fill out").max(6, "Must be atleast 6 characters"),
email: Yup.string().required("Please fill out"),
password: Yup.string().required("Please fill out")



}),
handleSubmit (values, {setStatus}){
    axios
    .post ('https://reqres.in/api/users', values)
    .then(res=> {
        console.log("r", res)
        setStatus(res.data);
    })
    .catch(err => console.log(err.response));
}

})(MainForm)

export default FormikMainForm;