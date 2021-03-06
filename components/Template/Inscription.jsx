import React from 'react'

export default function Inscription({ title, secondTitle, badge, datas, setModal, deleteSubsciber, table, setList }) {
  return (
    <div className="row g-0 mb-5">
      <h3 className='m-0'>
        <u>{title}</u> : <span className='text-cdl-primary'>{secondTitle}</span>
      </h3>
      <p className='m-0 my-1 text-primary fw-bold'><span className="badge bg-cdl-primary">{badge}</span></p>
        <ul className="list-group list-group-numbered my-3">
        {datas && datas.length > 0 ? datas.map(data => (
          <li className="list-group-item list-group-item-secondary d-flex align-items-center" key={data.id}>
            <div className='row g-0 align-items-center'>
              <p className='m-0 ms-1'>{data.pseudo} {data.comment && <span> | {data.comment}</span>}</p>
            </div>
            <div className='ms-auto'>
              <a className='cursor-pointer' onClick={() => deleteSubsciber({data, table, setList})}>
              <svg xmlns="http://www.w3.org/2000/svg" className="cdl-icon" fill="none" viewBox="0 0 24 24" stroke="#e0552a">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              </a>
            </div>
          </li>
        )) : (
          <p>Pas encore d&lsquo;inscrits</p>
        )}
        </ul>
      <div>
        <button type="button" className="btn btn-cdl-primary" onClick={() => setModal(true)}>
          Ajouter une personne
        </button>
      </div>
    </div>
  )
}
