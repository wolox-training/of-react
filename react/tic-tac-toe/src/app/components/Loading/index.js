import React from 'react';
import Spinner from 'react-spinkit';

import styles from './styles.module.scss';

function Loading({ type }) {
    return (
        <div type="submit" className={type==='button'? styles.loadingButton : styles.loadingText}>
          <Spinner name='circle' className={type==='button'? styles.loadingButtonSpinner : styles.loadingTextSpinner} />
          <p className={type==='button'? styles.loadingButtonText : null}>Cargando</p>
        </div>
    );
}

export default Loading;
