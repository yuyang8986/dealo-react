interface Values {
  newPassword: string;
  confirmPassword: string;
}

export const validatePasswords = ({ newPassword, confirmPassword }: Values) => {
  const e: any = {};

  if (!newPassword) {
    e.newPassword = 'Password is required!';
  }
  if (!confirmPassword) {
    e.confirmPassword = 'Confirm your password!';
  } else if (newPassword !== confirmPassword) {
    e.confirmPassword = "Password didn't matched!";
  }

  return { hasError: Object.keys(e).length > 0, errors: e };
};
