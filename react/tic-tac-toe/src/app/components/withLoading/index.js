import React from 'react'
import Loading from '../Loading';

const withLoading = (Component) => ({ isLoading, ...others }) =>
    isLoading
        ? <Loading type="text" />
        : <Component { ...others } />

export default withLoading;