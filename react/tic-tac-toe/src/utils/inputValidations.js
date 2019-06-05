export const required = value =>
  value ? undefined : 'Value is required';

export const minLength = value =>
  value.length < 8
    ? 'Password must be at least 8 characters'
    : undefined;

export const matchesPassword = (value, allValues) =>
  value === allValues.password ? undefined : 'Passwords must match';

export const correctEmail = value => value.includes('@') ? undefined : 'Email incorrect';
