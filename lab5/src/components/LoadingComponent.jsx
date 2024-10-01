import React from 'react'

const LoadingComponent = (props) => {
    return <p><ClipLoader
    color={color}
    loading={props.loading}
    cssOverride={override}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
  {props.children}
  </p>;
}

export default LoadingComponent