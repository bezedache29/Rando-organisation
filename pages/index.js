import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Alert, Button, Modal, Spinner } from 'react-bootstrap';
import ModalCdl from '../components/Modal/ModalCdl';
import SubTitle from '../components/SubTitle/SubTitle';
import Inscription from '../components/Template/Inscription';
import hookApi from '../hooks/hookApi';

export default function Home() {

  // States Modal
  const [vendredi, setVendredi] = useState(false);
  const [samedi, setSamedi] = useState(false);
  const [ouverture, setOuverture] = useState(false);
  const [parking, setParking] = useState(false);
  const [inscriptions, setInscriptions] = useState(false);
  const [security1, setSecurity1] = useState(false);
  const [security2, setSecurity2] = useState(false);
  const [security3, setSecurity3] = useState(false);
  const [lavage, setLavage] = useState(false);
  const [sandwich, setSandwich] = useState(false);
  const [ravito1, setRavito1] = useState(false);
  const [ravito2, setRavito2] = useState(false);
  const [ravito3, setRavito3] = useState(false);
  const [cochon, setCochon] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  // S'il y a eu un ajout ou suppression d'un user
  const [sub, setSub] = useState(false);

  const [loading, setLoading] = useState(true);

  // List des tables
  const [vendrediList, setVendrediList] = useState([]);
  const [samediList, setSamediList] = useState([]);
  const [ouvertureList, setOuvertureList] = useState([]);
  const [inscriptionsList, setInscriptionsList] = useState([]);
  const [cochonList, setCochonList] = useState([]);
  const [lavageList, setLavageList] = useState([]);
  const [parkingList, setParkingList] = useState([]);
  const [ravito1List, setRavito1List] = useState([]);
  const [ravito2List, setRavito2List] = useState([]);
  const [ravito3List, setRavito3List] = useState([]);
  const [sandwichList, setSandwichList] = useState([]);
  const [security1List, setSecurity1List] = useState([]);
  const [security2List, setSecurity2List] = useState([]);
  const [security3List, setSecurity3List] = useState([]);

  const { LoadSubscribers, DeleteSubscriberFromTable } = hookApi();

  const [showAlert, setShowAlert] = useState(false);

  const loadAllSubscribers = async () => {
    await LoadSubscribers('vendredi', setVendrediList);
    await LoadSubscribers('samedi', setSamediList);
    await LoadSubscribers('ouverture', setOuvertureList);
    await LoadSubscribers('cochon', setCochonList);
    await LoadSubscribers('inscriptions', setInscriptionsList);
    await LoadSubscribers('lavage', setLavageList);
    await LoadSubscribers('parking', setParkingList);
    await LoadSubscribers('ravito1', setRavito1List);
    await LoadSubscribers('ravito2', setRavito2List);
    await LoadSubscribers('ravito3', setRavito3List);
    await LoadSubscribers('sandwich', setSandwichList);
    await LoadSubscribers('securitysite', setSecurity1List);
    await LoadSubscribers('securitycircuits', setSecurity2List);
    await LoadSubscribers('securitypassages', setSecurity3List);
    setLoading(false);
  }

  const loadAllSubscibersPoste = async (poste, setPosteList) => {
    await LoadSubscribers(poste, setPosteList);
    // setLoading(false);
  }

  useEffect(() => {
    setShowAlert(false);
    loadAllSubscribers();
  }, []);

  useEffect(() => {
    if (sub) {
      // setLoading(true);
      loadAllSubscibersPoste(sub.poste, sub.setPosteList);
      setSub(false);
      setShowAlert(`${sub.user} a bien ajouté à ${sub.title} ! Merci !`);
    }
  }, [sub])

  const deleteSubscriber = async (data) => {
    await DeleteSubscriberFromTable(data)
    await loadAllSubscibersPoste(data.table, data.setList);
    setShowAlert('La personne a bien été supprimée');
    setModalDelete(false);
  }

  if (loading) {
    return (
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Chargement...</span>
        </Spinner>
      </div>
    )
  }

  return (
    <>
      <Head>
        <meta name="description" content="CDL VTT - Organisation Rando" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>CDL VTT - Organisation Rando</title>
      </Head>

      <div className="container mt-2">
        <h1 className='fw-bold border border-2 border-dark text-center text-white border bg-cdl-primary p-2 rounded'>RANDO Côte Des Légendes VTT</h1>

        <div className='shadow p-3 mt-4 mb-5 bg-cdl-secondary rounded text-center'>
          <h2 className='my-0'>LESNEVEN le dimanche 12 JUIN 2022</h2>
          <p className='my-0'>Le Côte Des Légendes VTT organise sa 20ème rando</p>
          <p className='my-0'>Pour la réussite d&apos;une belle journée, la mobilisation de tous est indispensable.</p>
        </div>

        {showAlert && (
          <Alert className='sticky-top' variant="success" onClose={() => setShowAlert(false)} dismissible>
            {showAlert}
          </Alert>
        )}

        <div className='shadow p-3 mb-5 bg-white rounded'>

          <SubTitle title={'Traçage'} />

          <Inscription title={'Vendredi 10 juin'} secondTitle={'Tracage (jusqu\'à 16h00 repas midi fourni par le club)'} badge={'RDV 8h30'} setModal={setVendredi} datas={vendrediList} deleteSubsciber={setModalDelete} table='vendredi' setList={setVendrediList} />

          <hr className='divider' />

          <Inscription title={'Samedi 11 juin'} secondTitle={'Tracage matinée + sortie sur circuit arpès-midi'} badge={'RDV 8h30'} setModal={setSamedi} datas={samediList} deleteSubsciber={setModalDelete} table='samedi' setList={setSamediList} />


          <SubTitle title={'Liste des postes le dimanche'} subtitle={'Rendez vous à partir de 6h30'} />


          <Inscription title={'Ouverture des circuits'} secondTitle={'4 vététistes'} badge={'RDV 7h15'} setModal={setOuverture} datas={ouvertureList} deleteSubsciber={setModalDelete} table='ouverture' setList={setOuvertureList} />

          <hr className='divider' />

          <Inscription title={'Parking'} secondTitle={'2 ou 3 personnes'} badge={'RDV 7h00 impérativement'} setModal={setParking} datas={parkingList} deleteSubsciber={setModalDelete} table='parking' setList={setParkingList} />

          <hr className='divider' />

          <Inscription title={'Inscriptions'} secondTitle={'4 personnes'} badge={'RDV 7h15'} setModal={setInscriptions} datas={inscriptionsList} deleteSubsciber={setModalDelete} table='inscriptions' setList={setInscriptionsList} />

          <hr className='divider' />

          <Inscription title={'Sécurité'} secondTitle={'Sur site'} setModal={setSecurity1} datas={security1List} deleteSubsciber={setModalDelete} table='securitysite' setList={setSecurity1List} />

          <hr className='divider' />

          <Inscription title={'Sécurité'} secondTitle={'Sur les circuits'} setModal={setSecurity2} datas={security2List} deleteSubsciber={setModalDelete} table='securitycircuits' setList={setSecurity2List} />

          <hr className='divider' />

          <Inscription title={'Sécurité'} secondTitle={'Sur les passages sécurisé'} setModal={setSecurity3} datas={security3List} deleteSubsciber={setModalDelete} table='securitypassages' setList={setSecurity3List} />

          <hr className='divider' />

          <Inscription title={'Sation de lavage'} setModal={setLavage} datas={lavageList} deleteSubsciber={setModalDelete} table='lavage' setList={setLavageList} />

          <hr className='divider' />

          <Inscription title={'Confection des casse-croutes'} secondTitle={'6 personnes'} badge={'RDV 8h00 / 8h30'} setModal={setSandwich} datas={sandwichList} deleteSubsciber={setModalDelete} table='sandwich' setList={setSandwichList} />

          <hr className='divider' />


          <SubTitle title={'Les ravitos'} subtitle={'Prévoir : portable, couteaux, plats, poubelles, boite à outils ...'} />


          <Inscription title={'Ravito n°1'} secondTitle={'5 personnes'} setModal={setRavito1} datas={ravito1List} deleteSubsciber={setModalDelete} table='ravito1' setList={setRavito1List} />

          <hr className='divider' />

          <Inscription title={'Ravito n°2'} secondTitle={'5 personnes'} setModal={setRavito2} datas={ravito2List} deleteSubsciber={setModalDelete} table='ravito2' setList={setRavito2List} />

          <hr className='divider' />

          <Inscription title={'Ravito n°3'} secondTitle={'5 personnes'} setModal={setRavito3} datas={ravito3List} deleteSubsciber={setModalDelete} table='ravito3' setList={setRavito3List} />

          <hr className='divider' />

          <Inscription title={'Cochon grillé'} setModal={setCochon} datas={cochonList} deleteSubsciber={setModalDelete} table='cochon' setList={setCochonList} />

          <p className='fw-bold m-0'>Veuillez répondre RAPIDEMENT pour faciliter l&apos;organisation ...</p>
          <p className='fw-bold m-0'>A tous encore une fois MERCI !!!</p>

          <p className='fw-bold mt-4'>Jean-Noël</p>
        </div>

      </div>

      {/* Modals */}
      <ModalCdl 
        modalName={vendredi}
        setModalName={setVendredi}
        title={'Vendredi 10 juin'}
        setSub={setSub}
        table={'vendredi'}
        setList={setVendrediList}
      />

      <ModalCdl
        modalName={samedi}
        setModalName={setSamedi}
        title={'Samedi 11 juin'}
        setSub={setSub}
        table={'samedi'}
        setList={setSamediList}
      />

      <ModalCdl 
        modalName={ouverture}
        setModalName={setOuverture}
        title={'Ouverture des circuits'}
        setSub={setSub}
        table={'ouverture'}
        setList={setOuvertureList}
      />

      <ModalCdl 
        modalName={parking} 
        setModalName={setParking} 
        title={'Parking'} 
        setSub={setSub}
        table={'parking'}
        setList={setParkingList}
      />

      <ModalCdl 
        modalName={inscriptions} 
        setModalName={setInscriptions} 
        title={'Inscriptions'} 
        setSub={setSub}
        table={'inscriptions'}
        setList={setInscriptionsList}
      />

      <ModalCdl 
        modalName={security1} 
        setModalName={setSecurity1} 
        title={'Sécurité sur site'} 
        setSub={setSub}
        table={'securitysite'}
        setList={setSecurity1List}
      />

      <ModalCdl 
        modalName={security2} 
        setModalName={setSecurity2} 
        title={'Sécurité sur les circuits'} 
        setSub={setSub}
        table={'securitycircuits'}
        setList={setSecurity2List}
      />

      <ModalCdl 
        modalName={security3} 
        setModalName={setSecurity3} 
        title={'Sécurité les passages sécurisé'} 
        setSub={setSub}
        table={'securitypassages'}
        setList={setSecurity2List}
      />

      <ModalCdl 
        modalName={lavage} 
        setModalName={setLavage} 
        title={'Station de lavage'} 
        setSub={setSub}
        table={'lavage'}
        setList={setLavageList}
      />

      <ModalCdl 
        modalName={sandwich} 
        setModalName={setSandwich} 
        title={'Confection des casse-croutes'} 
        setSub={setSub}
        table={'sandwich'}
        setList={setSandwichList}
      />

      <ModalCdl 
        modalName={ravito1} 
        setModalName={setRavito1} 
        title={'Ravito n°1'} 
        setSub={setSub}
        table={'ravito1'}
        setList={setRavito1List}
      />

      <ModalCdl 
        modalName={ravito2} 
        setModalName={setRavito2} 
        title={'Ravito n°2'} 
        setSub={setSub}
        table={'ravito2'}
        setList={setRavito2List}
      />

      <ModalCdl 
        modalName={ravito3} 
        setModalName={setRavito3} 
        title={'Ravito n°3'} 
        setSub={setSub}
        table={'ravito3'}
        setList={setRavito3List}
      />

      <ModalCdl 
        modalName={cochon} 
        setModalName={setCochon} 
        title={'Cochon grillé'} 
        setSub={setSub}
        table={'cochon'}
        setList={setCochonList}
      />

      <Modal show={modalDelete} onHide={() => setModalDelete(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Attention suppression !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalDelete && <p>Etes vous sur de vouloir supprimer {modalDelete.data.pseudo} de {modalDelete.table} ?</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalDelete(false)}>
            Cancel
          </Button>
          <button type="button" className='btn btn-cdl-primary' onClick={() => deleteSubscriber(modalDelete)}>Supprimer</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
