import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import ModalCdl from '../components/Modal/ModalCdl';
import SubTitle from '../components/SubTitle/SubTitle';
import Inscription from '../components/Template/Inscription';
import styles from '../styles/Home.module.css'

export default function Home() {

  const [vendredi10, setVendredi10] = useState(false);
  const [samedi11, setSamedi11] = useState(false);
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

        <div className='shadow p-3 mt-4 bg-cdl-secondary rounded text-center'>
          <h2 className='my-0'>LESNEVEN le dimanche 12 JUIN 2022</h2>
          <p className='my-0'>Le Côte Des Légendes VTT organise sa 20ème rando</p>
          <p className='my-0'>Pour la réussite d'une belle journée, la mobilisation de tous est indispensable.</p>
        </div>

        <div className='shadow p-3 my-5 bg-white rounded'>

          <SubTitle title={'Traçage'} />

          <Inscription title={'Vendredi 10 juin'} secondTitle={'Tracage (jusqu\'à 16h00 repas midi fourni par le club)'} badge={'RDV 8h30'} setModal={setVendredi10} />

          <hr className='divider' />

          <Inscription title={'Samedi 11 juin'} secondTitle={'Tracage matinée + sortie sur circuit arpès-midi'} badge={'RDV 8h30'} setModal={setSamedi11} />


          <SubTitle title={'Liste des postes le dimanche'} subtitle={'Rendez vous à partir de 6h30'} />


          <Inscription title={'Ouverture des circuits'} secondTitle={'4 vététistes'} badge={'RDV 7h15'} setModal={setOuverture} />

          <hr className='divider' />

          <Inscription title={'Parking'} secondTitle={'2 ou 3 personnes'} badge={'RDV 7h00 impérativement'} setModal={setParking} />

          <hr className='divider' />

          <Inscription title={'Inscriptions'} secondTitle={'4 personnes'} badge={'RDV 7h15'} setModal={setOuverture} />

          <hr className='divider' />

          <Inscription title={'Sécurité'} secondTitle={'Sur site'} setModal={setSecurity1} />

          <hr className='divider' />

          <Inscription title={'Sécurité'} secondTitle={'Sur les circuits'} setModal={setSecurity2} />

          <hr className='divider' />

          <Inscription title={'Sécurité'} secondTitle={'Sur les passages sécurisé'} setModal={setSecurity3} />

          <hr className='divider' />

          <Inscription title={'Sation de lavage'} setModal={setLavage} />

          <hr className='divider' />

          <Inscription title={'Confection des casse-croutes'} secondTitle={'6 personnes'} badge={'RDV 8h00 / 8h30'} setModal={setSandwich} />

          <hr className='divider' />


          <SubTitle title={'Les ravitos'} subtitle={'Prévoir : portable, couteaux, plats, poubelles, boite à outils ...'} />


          <Inscription title={'Ravito n°1'} secondTitle={'5 personnes'} setModal={setRavito1} />

          <hr className='divider' />

          <Inscription title={'Ravito n°2'} secondTitle={'5 personnes'} setModal={setRavito2} />

          <hr className='divider' />

          <Inscription title={'Ravito n°3'} secondTitle={'5 personnes'} setModal={setRavito3} />

          <hr className='divider' />

          <Inscription title={'Cochon grillé'} setModal={setCochon} />

          <p className='fw-bold m-0'>Veuillez répondre RAPIDEMENT pour faciliter l'organisation ...</p>
          <p className='fw-bold m-0'>A tous encore une fois MERCI !!!</p>

          <p className='fw-bold mt-4'>Jean-Noël</p>
        </div>

      </div>

      {/* Modal vendredi10 */}
      <ModalCdl modalName={vendredi10} setModalName={setVendredi10} title={'Vendredi 10 juin'} />
      <ModalCdl modalName={samedi11} setModalName={setSamedi11} title={'Samedi 11 juin'} />
      <ModalCdl modalName={ouverture} setModalName={setOuverture} title={'Ouverture des circuits'} />
      <ModalCdl modalName={parking} setModalName={setParking} title={'Parking'} />
      <ModalCdl modalName={inscriptions} setModalName={setInscriptions} title={'Inscriptions'} />
      <ModalCdl modalName={security1} setModalName={setSecurity1} title={'Sécurité sur site'} />
      <ModalCdl modalName={security2} setModalName={setSecurity2} title={'Sécurité sur les circuits'} />
      <ModalCdl modalName={security3} setModalName={setSecurity3} title={'Sécurité les passages sécurisé'} />
      <ModalCdl modalName={lavage} setModalName={setLavage} title={'Station de lavage'} />
      <ModalCdl modalName={sandwich} setModalName={setSandwich} title={'Confection des casse-croutes'} />
    </>
  )
}
