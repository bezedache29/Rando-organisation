import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

export default function ModalCdl({ modalName, setModalName, title }) {

  const [pseudo, setPseudo] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState(false);
  const [errorInvalid, setErrorInvalid] = useState(false);

  return (
    <Modal show={modalName} onHide={() => setModalName(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <label htmlFor="pseudo" className="form-label">Prénom - Nom</label>
          <input type="text" value={pseudo} placeholder='Émile Sabord' onChange={(e) => setPseudo(e.target.value)} className="form-control" id="pseudo" />
          {error ? (<p className='text-danger m-0'>{error}</p>) : errorInvalid && (<p className='text-danger m-0'>{errorInvalid}</p>)}
        </div>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">Commentaire (facultatif)</label>
          <input type="text" value={comment} placeholder='2 couteaux + 1 plat' onChange={(e) => setComment(e.target.value)} className="form-control" id="comment" />
          {error ? (<p className='text-danger m-0'>{error}</p>) : errorInvalid && (<p className='text-danger m-0'>{errorInvalid}</p>)}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModalName(false)}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => console.log(`Valid ${title}`)}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
