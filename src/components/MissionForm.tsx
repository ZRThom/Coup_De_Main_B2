import { useState } from 'react'
import type { SubmitEvent } from 'react'
import Champ from './Champ'
import type { Mission } from '../types'

type Erreurs = {
  titre?: string
  lieu?: string
  debut?: string
  fin?: string
  capacite?: string
}

type MissionFormProps = {
  onCreer: (mission: Mission) => void
}

function MissionForm({ onCreer }: MissionFormProps) {
  const [titre, setTitre] = useState('')
  const [lieu, setLieu] = useState('')
  const [debut, setDebut] = useState('')
  const [fin, setFin] = useState('')
  const [capacite, setCapacite] = useState('')
  const [erreurs, setErreurs] = useState<Erreurs>({})

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()

    const nouvellesErreurs: Erreurs = {}

    if (titre.trim() === '') {
      nouvellesErreurs.titre = 'Le titre est obligatoire.'
    }

    if (lieu.trim() === '') {
      nouvellesErreurs.lieu = 'Le lieu est obligatoire.'
    }

    if (debut === '') {
      nouvellesErreurs.debut = 'Le début est obligatoire.'
    }

    if (fin === '') {
      nouvellesErreurs.fin = 'La fin est obligatoire.'
    } else if (debut !== '' && new Date(fin) <= new Date(debut)) {
      nouvellesErreurs.fin = 'La fin doit être après le début.'
    }

    const nombre = Number(capacite)
    if (capacite.trim() === '') {
      nouvellesErreurs.capacite = 'La capacité est obligatoire.'
    } else if (!Number.isInteger(nombre) || nombre <= 0) {
      nouvellesErreurs.capacite = 'La capacité doit être un entier positif.'
    }

    setErreurs(nouvellesErreurs)

    if (Object.keys(nouvellesErreurs).length > 0) {
      return
    }

    onCreer({
      titre: titre.trim(),
      lieu: lieu.trim(),
      debut: debut,
      fin: fin,
      capacite: nombre,
      statut: 'brouillon',
    })

    setTitre('')
    setLieu('')
    setDebut('')
    setFin('')
    setCapacite('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-2xl bg-papier p-6 shadow-[6px_6px_0_var(--color-foret)] ring-2 ring-foret sm:p-8"
    >
      <h2 className="font-titre text-2xl font-bold">Nouvelle mission</h2>

      <Champ label="Titre" type="text" placeholder="Ex : Collecte au parc" valeur={titre} erreur={erreurs.titre} onChange={setTitre} />
      <Champ label="Lieu" type="text" placeholder="Ex : Parc de la Tête d'Or" valeur={lieu} erreur={erreurs.lieu} onChange={setLieu} />

      <div className="grid gap-5 sm:grid-cols-2">
        <Champ label="Début" type="datetime-local" valeur={debut} erreur={erreurs.debut} onChange={setDebut} />
        <Champ label="Fin" type="datetime-local" valeur={fin} erreur={erreurs.fin} onChange={setFin} />
      </div>

      <Champ label="Capacité" type="text" placeholder="Ex : 3" valeur={capacite} erreur={erreurs.capacite} onChange={setCapacite} />

      <button
        type="submit"
        className="w-full cursor-pointer rounded-lg bg-terracotta px-4 py-3 font-titre text-lg font-bold text-white transition hover:bg-foret"
      >
        Créer le brouillon
      </button>
    </form>
  )
}

export default MissionForm
