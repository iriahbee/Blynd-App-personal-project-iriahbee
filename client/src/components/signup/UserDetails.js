import { React, useRef } from "react";
import styled from "styled-components";
import ThemeButton from "../theme/button";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StyledContainer = styled.div``;

const StyledForm = styled.form``;

const StyledInput = styled.input`
  background-color: pink;
  border: none;
  padding: 10px;
  border-bottom: 3px solid white;
  font-size: 2em;
  color: white;
  outline: none;
`;

const StyleDatePicker = styled(DatePicker)`
  background-color: pink;
  border: none;
  padding: 10px;
  border-bottom: 3px solid white;
  font-size: 2em;
  color: white;
  outline: none;

`;

const UserDetails = (props) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: {
    full_name: '',
    phoneNo: '',
    dateInput:'',
    birth_date: '',
    password: '',
    confpassword: ''
  }
});

const password = useRef({});
password.current = watch("password", "");

const onSubmit = (data) => {
    console.log(data);
    //props.history.push('./PersonalDetails');
  };






  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <motion.div
          className="col-md-6 offset-md-3"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ stiffness: 150 }}
        >
          <label>Full Name:</label>
          <StyledInput
            type="text"
            name= "full_name"
            placeholder="Full Name"
            {...register("full_name", {
              required: true,
              pattern: {
                value: /^[a-z A-Z]+$/,
                message: "Name should contain only characters.",
              },
            })}
          />
          {errors.full_name && <p>{errors.full_name.message}</p>}

          <label>Mobile Number:</label>

          <StyledInput
            type="tel"
            name= "phoneNo"
            placeholder="Mobile number"
            {...register("phoneNo", {
              required: true,
              minLength: 6,
              maxLength: 12,
              message:"Mobile Number is required.",
            })}
          />
          {errors.phoneNo && <p>{errors.phoneNo.message}</p>}

          <label>Birth Date:</label>
        
          <Controller
            control={control}
            name="dateInput"
            render={({ field }) => (
              <StyleDatePicker
                placeholderText="Select date"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
                dateFormat="dd/MM/yyyy"
              />
            )}
          />
          {errors.dateInput && <span>This field is required</span>}
        

          <label>Email:</label>
          <StyledInput
            type="text"
            name= "email"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i,message:"Input a valid email" })}
          />
          {errors.email && <p>{errors.email.message}</p>}

          <label>Password:</label>
          <StyledInput
            type="password"
            name="password"
            placeholder="Password"
            autoComplete = "on"
            {...register("password",{ required: true, 
              minLength: {
              value: 8,
              message: "Password must have at least 8 characters" }})}
          />
          {errors.password && <p>{errors.password.message}</p>}

          <label>Confirm Password:</label>
          <StyledInput
            type="password"
            name='confpassword'
            placeholder="Confirm Password"
            autoComplete = "on"
            {...register("confpassword", { required: true,  
              validate: value =>
              value === password.current || "The passwords do not match"
               })}
          />
           {errors.confpassword && <p>{errors.confpassword.message}</p>}

          <ThemeButton type="submit">Next</ThemeButton>
        </motion.div>
      </StyledForm>
    </StyledContainer>
  );
};

export default UserDetails;
