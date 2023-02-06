const FORMAT_DATE = (date: string) =>
  new Intl.DateTimeFormat('fr-FR', { dateStyle: 'medium' }).format(
    new Date(date),
  )

export default FORMAT_DATE
