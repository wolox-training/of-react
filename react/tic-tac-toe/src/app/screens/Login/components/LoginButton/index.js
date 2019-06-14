import React from 'react';
import styles from './styles.module.scss';

function LoginButton({ hasError }) {
    return (
        <button type="submit" className={!hasError ? styles.loginButton : styles.loginError}>{!hasError ? 'Iniciar Sesión' : 'Error: Reintentar?'}</button>
    );
}

export default LoginButton;
