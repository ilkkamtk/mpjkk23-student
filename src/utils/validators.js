const registerValidators = {
  username: ['required', 'minStringLength: 3'],
  password: ['required', 'minStringLength: 5'],
  confirm: [],
  email: ['required', 'isEmail'],
  full_name: ['minStringLength: 2'],
};

const loginValidators = {
  username: ['required'],
  password: ['required'],
};

export {registerValidators, loginValidators};
