import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error =useRouteError();
  return (
   <>
    <h1>Oops !!!</h1>
    <h2>Something got wrong</h2>
    <h3> {error.status + " " + error.statusText}</h3>
   </>
  )
}

export default Error;