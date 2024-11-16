const validateLogin = (email, password, name) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );
  const isValidName = /^[a-zA-Z ]{2,30}$/.test(name);
  if (!isValidName) return "Invalid Name";
  if (!isEmailValid) return "The Email entered is invalid";
  if (!isPasswordValid) return "The Password is incorrect";

  return null;
};
export default validateLogin;
