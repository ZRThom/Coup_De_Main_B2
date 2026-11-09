import { useState } from 'react'
import MissionForm from './components/MissionForm'
import MissionCard from './components/MissionCard'
import type { Mission } from './types'

function App() {
  const [missions, setMissions] = useState<Mission[]>([])

  function ajouterMission(mission: Mission) {
    setMissions([...missions, mission])
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8 lg:py-16">
      <header className="mb-10 lg:mb-14">
        <p className="font-semibold text-primary">coup2main · espace organisateur</p>
        <h1 className="mt-2 font-titre text-5xl font-extrabold tracking-tight sm:text-7xl">
          Préparer une mission
        </h1>
      </header>

      <main className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <MissionForm onCreer={ajouterMission} />

        <section>
          <h2 className="mb-4 font-titre text-2xl font-bold">
            Mes brouillons ({missions.length})
          </h2>

          {missions.length === 0 && (
            <p className="rounded-2xl border-2 border-dashed border-border p-8 text-center text-muted">
              Aucun brouillon pour le moment. Ta première mission apparaîtra ici.
            </p>
          )}

          <div className="space-y-4">
            {missions.map((mission, index) => (
              <MissionCard key={index} mission={mission} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
