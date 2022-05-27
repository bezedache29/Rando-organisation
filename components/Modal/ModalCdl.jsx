import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useApi from '../../hooks/useApi';

export default function ModalCdl({ modalName, setModalName, title, setSub, table, setList }) {

  const [pseudoError, setPseudoError] = useState(false);

  const { addSubscribers } = useApi();

  const formik = useFormik({
    initialValues: {
      pseudo: '',
      comment: '',
    },
    onSubmit: async (values, { resetForm }) => {
      const data = {
        pseudo: values.pseudo,
        comment: values.comment,
        table
      }
      try {
        const response = await addSubscribers(data)
        // console.log(response)

        setPseudoError(false)
        
        if (response.message) {
          if (response.message === "Cette personne est déjà inscrite") {
            setPseudoError(response.message)
          }
        } else {
          setModalName(false)
          setSub({ user: values.pseudo, title, poste: table, setPosteList: setList });
          resetForm()
        }
      } catch(err) {
        console.log(err)
      }
    },
    validationSchema: yup.object({
      pseudo: yup.string().min(2, "trop petit").max(30, "trop long!").required("Ce champ doit être rempli"),
      comment: yup.string().min(5, "trop petit").max(100, "trop long!"),
    })
  })

  return (
    <Modal show={modalName} onHide={() => setModalName(false)}>
      <form onSubmit={formik.handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="pseudo" className={(formik.touched.pseudo && formik.errors.pseudo) || pseudoError ? 'form-label text-danger fw-bold' : 'form-label'}>Prénom - Nom</label>
            <input type="text" value={formik.values.pseudo} onChange={formik.handleChange} placeholder='Émile Sabord' className={(formik.touched.pseudo && formik.errors.pseudo) || pseudoError ? 'form-control border-danger' : 'form-control'} id="pseudo" />
            {(formik.touched.pseudo && formik.errors.pseudo) && <p className='text-danger m-0'>{formik.errors.pseudo}</p>}
            {pseudoError && <p className='text-danger m-0'>{pseudoError}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="comment" className="form-label">Commentaire (facultatif)</label>
            <input type="text" value={formik.values.comment} placeholder='2 couteaux + 1 plat' onChange={formik.handleChange} className="form-control" id="comment" />
            {(formik.touched.comment && formik.errors.comment) && <p className='text-danger m-0'>{formik.errors.comment}</p>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalName(false)}>
            Cancel
          </Button>
          <button type="submit" className='btn btn-cdl-primary'>S'inscrire</button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}
