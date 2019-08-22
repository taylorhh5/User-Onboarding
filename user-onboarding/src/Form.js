import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";


const MainForm = ({errors , touched, values}) => {

return(

    <div>

<form>
<Field name ="name" type ="text" placeholder ="name"></Field>
<Field name ="email" type ="text" placeholder ="email"></Field>
<Field name ="password" type ="password" placeholder ="password"></Field>


<label>
          Terms of Service
          <Field
            type="checkbox"
            name="terms"
            checked={values.terms}
          />
          
    </label>



<button>Submit</button>
</form>
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
    
}

})(MainForm)

export default FormikMainForm;