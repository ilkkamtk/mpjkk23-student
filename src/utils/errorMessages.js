const registerForm = {
  username: [
    'this field is required',
    'minimum length 3',
    'username not available',
  ],
  password: ['this field is required', 'minimum length 5'],
  confirm: ['this field is required', 'passwords dont match'],
  email: ['this field is required', 'email is not valid'],
  full_name: ['minimum length 2'],
};

const loginForm = {
  username: ['this field is required'],
  password: ['this field is required'],
};

export {registerForm, loginForm};
