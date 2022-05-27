import React from 'react'

export default function Inscription({ title, secondTitle, badge, list, setModal }) {
  return (
    <div className="row g-0 mb-5">
      <h3 className='m-0'>
        <u>{title}</u> : <span className='text-cdl-primary'>{secondTitle}</span>
      </h3>
      <p className='m-0 my-1 text-primary fw-bold'><span class="badge bg-cdl-primary">{badge}</span></p>
      <ul class="list-group list-group-numbered my-3">
        <li class="list-group-item list-group-item-secondary d-flex align-items-center w-100">
          <div className='row g-0 align-items-center'>
            <p className='m-0 ms-1'>Christophe Salou <span>| 1 couteau</span></p>
          </div>
          <div className='ms-auto'>
            <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" className="cdl-icon" fill="none" viewBox="0 0 24 24" stroke="#e0552a">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            </a>
          </div>
        </li>
        <li class="list-group-item list-group-item-secondary d-flex align-items-center w-100">
          <div className='row g-0 align-items-center'>
            <p className='m-0 ms-1'>Christophe Salou <span>| 1 couteau</span></p>
          </div>
          <div className='ms-auto'>
            <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" className="cdl-icon" fill="none" viewBox="0 0 24 24" stroke="#e0552a">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            </a>
          </div>
        </li>
        <li class="list-group-item list-group-item-secondary d-flex align-items-center w-100">
          <div className='row g-0 align-items-center'>
            <p className='m-0 ms-1'>Christophe Salou <span>| 1 couteau</span></p>
          </div>
          <div className='ms-auto'>
            <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" className="cdl-icon" fill="none" viewBox="0 0 24 24" stroke="#e0552a">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            </a>
          </div>
        </li>
      </ul>
      <div>
        <button type="button" class="btn btn-cdl-primary" onClick={() => setModal(true)}>
          Ajouter une personne
        </button>
      </div>
    </div>
  )
}
