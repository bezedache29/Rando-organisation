import React from 'react'

export default function SubTitle({ title, subtitle }) {

  const css = subtitle ? 'text-center text-cdl-primary bg-dark rounded p-2' : 'text-center mb-4 text-cdl-primary bg-dark rounded p-2'
  return (
    <>
    <h2 className={css}>{title}</h2>
    <p className='m-0 text-center mb-3 fst-italic text-cdl-primary'><u>{subtitle}</u></p>
    </>
  )
}
