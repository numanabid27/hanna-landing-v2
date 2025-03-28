import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function useFooter() {
    const [isLoading, setIsLaoding] = useState(false);
    const [initalValues, setInitalValues] = useState({
        fullName: "",
        email: "",
        phoneNo: "",
        contactMethod: "email",
        message: ""
    });
    const [formErrors, setFormErrors] = useState({
        fullName: "",
        email: "",
        phoneNo: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update form values
        setInitalValues({ ...initalValues, [name]: value });

        // Validation logic
        let errors = { ...formErrors };

        if (name === "fullName") {
            if (value.length < 3 || value.length > 20) {
                errors.fullName = "Name must be between 3 and 20 characters.";
            } else {
                errors.fullName = "";
            }
        }

        if (name === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                errors.email = "Please enter a valid email address.";
            } else {
                errors.email = "";
            }
        }

        if (name === "phoneNo") {
            if (!value.trim()) {
                errors.phoneNo = "Phone number is required.";
            } else {
                errors.phoneNo = "";
            }
        }

        setFormErrors(errors);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        let errors = { ...formErrors };
        let hasError = false;
    
        // Check if fields are empty and set error messages
        if (!initalValues.fullName.trim()) {
            errors.fullName = "Name is required.";
            hasError = true;
        }
        if (!initalValues.email.trim()) {
            errors.email = "Email is required.";
            hasError = true;
        }
        if (!initalValues.phoneNo.trim()) {
            errors.phoneNo = "Phone number is required.";
            hasError = true;
        }
    
        // Update the formErrors state
        setFormErrors(errors);
        setIsLaoding(true);
        // If there are any errors, stop execution
        if (hasError) {
            setIsLaoding(false);
            return; // Do not proceed to the API call
        }
    
        // If no errors, proceed with form submission
        const payload = { ...initalValues };
    
        try {
            const response = await axios.post('https://dev-api.hannahealthhub.com/screen/contact', payload);
            if (response.status === 200) {
                setInitalValues({
                    fullName: "",
                    email: "",
                    phoneNo: "",
                    contactMethod: "email",
                    message: ""
                });
                toast.success(response.data.message);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLaoding(false);
        }
    };
    
  return {
    handleSubmit,
    setInitalValues,
    handleChange,
    formErrors,
    isLoading,
    initalValues
  }
}
