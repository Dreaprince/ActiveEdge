import React, {useState} from 'react'
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';



const Container = styled.div`
    width: 100%;
   max-width: 720px;
   border: solid 1px #ebebeb;
   box-sizing: border-box;
   padding: 20px 55px;
  font-family: Arial, Helvetica, sans-serif;

    h3 {
       text-align: center;
       color: 302b28;
     margin-bottom: 20px;
      font-weight: 400;
    }
`;
 
const FormContainer = styled.form`
   width: 100%;
   display: flex;
   flex-direction: column;
   box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19)
`;

const Input = styled.input`

`;

const Textarea = styled.textarea`

`;

const SubmitButton = styled.button`


   &:disabled {
      filter: contrast(0.7);
   }
`;

const FieldContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
`;

const FieldError = styled.span`
   color: #b32e2e;
   font-size: 11px;
   min-height: 18px;
`;

const FormSuccess = styled.span`
  color: #28a828;
  font-size: 12px;
  min-height: 20px;
`;

const FormError = styled.span`
  color: #b32e2e;
  font-size: 12px;
  min-height: 20px;
`;


const validationSchema = yup.object({
    name: yup.string().min(4, "Please enter your real name").required("Name is required!"),
    email: yup.string().email("Please enter a valid email address").required("Email is required!"),
    body: yup.string().min(4, "Please tweet your post").required("Tweet is required")
})

function PostTweet() {
    
   const [success, setSuccess] = useState(null); 
   const [error, setError] = useState(null);
   
  
   const onSubmit = async(values) => {
      const  {...data} = values;
      const res = await axios.post("https://jsonplaceholder.typicode.com/comments", data)
            .catch((err) => {
             if(err && err.res) setError(err.res.data.message);
             setSuccess(null);
         })

         if(res && res.data) {
           setError(null);
           setSuccess(res.data.message);
           formik.resetForm();
         }
     }; 

   const formik = useFormik({initialValues: {name: '', email: '', body: ''},
     validateOnBlur: true,
     onSubmit,
     validationSchema: validationSchema
   });
  



    return (
        <Container>
           <h3>Post Tweet</h3>
            {!error && <FormSuccess>{success ? success : "" }</FormSuccess>}
            {!success && <FormError>{error ? error : ""}</FormError>}
            <FormContainer onSubmit={formik.handleSubmit}>
               <FieldContainer>
                <Input
                    name="name" 
                    placeholder="Enter name" 
                    value={formik.values.name} 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                 <FieldError>
                    {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
                 </FieldError>   
                </FieldContainer>  
                <FieldContainer>
                    <Input 
                        name="email" 
                        placeholder="Enter email" 
                        value={formik.values.email} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FieldError>
                      {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
                    </FieldError> 
                </FieldContainer> 
                <FieldContainer>  
                    <Textarea 
                        name="body" 
                        placeholder="post tweet" 
                        value={formik.values.body} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FieldError>
                      {formik.touched.body && formik.errors.body ? formik.errors.body : ""}
                    </FieldError> 
                </FieldContainer>   
               <SubmitButton type='submit' disabled={!formik.isValid}> Submit </SubmitButton>
            </FormContainer>
            
        </Container>
    )
}

export default PostTweet
