import React from 'react';
import pageNotFoundImg from "../assets/img/page-not-found.svg";

export default function NotFound() {
  return (
    <>
      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-grey-900 text-center'>
          Page not found
      </h1>
      <img src={pageNotFoundImg} alt='pagenotfound'/>
    </>
  )
}
