import type { Mission } from '../types'

type MissionCardProps = {
  mission: Mission
}

function formaterDate(date: string) {
  return new Date(date).toLocaleString('fr-FR')
}

function MissionCard({ mission }: MissionCardProps) {
  return (
    <article className="relative rounded-2xl border-2 border-dashed border-foret bg-papier p-6">
      <span className="absolute top-4 right-4 rotate-6 rounded border-2 border-terracotta px-2 py-0.5 font-titre text-xs font-bold text-terracotta uppercase">
        {mission.statut}
      </span>

      <h3 className="pr-24 font-titre text-2xl font-bold">{mission.titre}</h3>
      <p className="mt-1 text-gris-vert">{mission.lieu}</p>

      <div className="mt-4 border-t-2 border-sable pt-4">
        <p>Du {formaterDate(mission.debut)}</p>
        <p>au {formaterDate(mission.fin)}</p>
        <p className="mt-2 font-semibold">Capacité totale : {mission.capacite}</p>
      </div>

      <p className="mt-4 text-sm text-gris-vert">Pas encore visible par les bénévoles</p>
    </article>
  )
}

export default MissionCard
