import React from 'react'
import Loading from '../app/components/Loading';

const withLoading = (Component) => ({ isLoading, type, ...others }) =>
    isLoading
        ? <Loading type={type} />
        : <Component { ...others } />

export default withLoading;