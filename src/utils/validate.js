export const checkValidation = (email, password, name) => {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPass =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isValidName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

  // if (!isValidName) return "Name is not Valid!";
  if (!isValidEmail) return "Email is not Valid!";
  if (!isValidPass) return "Password is not Valid!";

  return null;
};
