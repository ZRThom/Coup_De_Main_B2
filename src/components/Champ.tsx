type ChampProps = {
  label: string
  type: string
  valeur: string
  placeholder?: string
  erreur?: string
  onChange: (valeur: string) => void
}

function Champ({ label, type, valeur, placeholder, erreur, onChange }: ChampProps) {
 
  const couleurBordure = erreur ? 'border-terracotta' : 'border-sable'

  return (
    <label className="block">
      <span className="text-sm font-semibold">{label}</span>
      <input
        type={type}
        value={valeur}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-1 block w-full rounded-lg border-2 bg-white px-3 py-2.5 outline-none focus:border-foret ${couleurBordure}`}
      />
      {erreur && <span className="mt-1 block text-sm font-medium text-terracotta">{erreur}</span>}
    </label>
  )
}

export default Champ
