export const required = value =>
  value ? undefined : 'Campo obligatorio';

export const minLength = value =>
  value.length < 8
    ? 'Constraseña debe tener al menos 8 caracteres'
    : undefined;

export const matchesPassword = (value, allValues) =>
  value === allValues.password ? undefined : 'Constraseñas no coinciden';

export const correctEmail = value => value.includes('@') ? undefined : 'Email incorrecto';
