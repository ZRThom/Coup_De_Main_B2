import type { Mission } from '../types'

type MissionCardProps = {
  mission: Mission
  epingle: boolean
  onBasculerEpingle: () => void
}

function formaterDate(date: string) {
  return new Date(date).toLocaleString('fr-FR')
}

function MissionCard({ mission, epingle, onBasculerEpingle }: MissionCardProps) {
  return (
    <article className={`relative rounded-2xl border border-secondary bg-surface p-6 ${epingle ? 'ring-2 ring-primary' : ''}`}>
      <span className="absolute top-4 right-4 rotate-6 rounded border-2 border-primary px-2 py-0.5 font-titre text-xs font-bold text-primary uppercase">
        {mission.statut}
      </span>

      <h3 className="pr-24 font-titre text-2xl font-bold">{mission.titre}</h3>
      <p className="mt-1 text-muted">{mission.lieu}</p>

      <div className="mt-4 border-t-2 border-border pt-4">
        <p>Du {formaterDate(mission.debut)}</p>
        <p>au {formaterDate(mission.fin)}</p>
        <p className="mt-2 font-semibold">Capacité totale : {mission.capacite}</p>
      </div>

      <p className="mt-4 text-sm text-muted">Pas encore visible par les bénévoles</p>
      <button
        type="button"
        aria-pressed={epingle}
        aria-label={`${epingle ? 'Désépingler' : 'Épingler'} le brouillon ${mission.titre}`}
        onClick={onBasculerEpingle}
        className="mt-4 cursor-pointer rounded-lg border border-primary px-3 py-2 font-semibold text-primary transition hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {epingle ? 'Désépingler' : 'Épingler'}
      </button>
    </article>
  )
}

export default MissionCard
