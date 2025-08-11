import React from "react";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    password: "",
  });

  
  return <div>SignUpPage</div>;
};

export default SignUpPage;
