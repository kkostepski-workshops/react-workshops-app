const validator = (value, validations) => {
  for (const validation of validations) {
    const result = validation(value);
    if (result) {
      return result;
    }
  }

  return null;
};

const required = value => {
  let errorMessage;
console.log('value', value)
  if (!value) {
    errorMessage = 'This field is required';
  }

  return errorMessage;
};

const email = value => {
  let errorMessage;

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    errorMessage = 'Invalid email address';
  }

  return errorMessage;
};

export { email, required };
export default validator;
