export const site = {
  domain: 'carroattrezzireggioemiliapro.it',
  template: 'reggio-signature',
  description: 'Carroattrezzi a Reggio Emilia e soccorso stradale 24 ore: recupero auto, traino, assistenza moto e trasporto veicoli in città e provincia.',
  tel: '05221780329',
  city: 'Reggio Emilia',
  name: 'Carroattrezzi Reggio Emilia Pro',
  address: 'Via Emilia Ospizio, 91, 42122 Reggio Emilia RE',
  title: 'Carroattrezzi Reggio Emilia 24H | Soccorso stradale',
  phone: '0522 178 0329',
  email: 'assistenza@carroattrezzireggioemiliapro.it',
} as const

const serviceText = (service: string) => ({
  detail: `Quando un veicolo si ferma, ogni minuto può diventare più difficile. Per ${service.toLowerCase()} a Reggio Emilia raccogliamo prima posizione, condizioni del mezzo e destinazione desiderata, così da organizzare il recupero con indicazioni chiare e senza passaggi inutili.`,
  text: `Il servizio di ${service.toLowerCase()} a Reggio Emilia viene organizzato partendo dalla situazione reale: mezzo, posizione, accessi e punto di consegna. Le informazioni essenziali aiutano a preparare un intervento adatto.`,
})

export const services = [
  { title: 'Soccorso stradale 24 ore', slug: 'soccorso-stradale-24-ore', ...serviceText('soccorso stradale 24 ore'), text: "Un guasto non sceglie il momento. Comunica dove sei e cosa è successo per verificare la disponibilità di intervento." },
  { title: 'Traino auto', slug: 'traino-auto', ...serviceText('traino auto'), text: "Trasporto del veicolo non marciante verso l’officina o la destinazione concordata, con modalità di carico adeguate." },
  { title: 'Recupero auto incidentata', slug: 'recupero-auto-incidentata', ...serviceText('recupero auto incidentata'), text: "Valutazione di danni, ruote e accessi per organizzare con attenzione il recupero dopo un sinistro." },
  { title: 'Carroattrezzi moto', slug: 'carroattrezzi-moto', ...serviceText('carroattrezzi per moto'), text: "Recupero e trasporto di moto e scooter con fissaggi adatti alle due ruote e alle condizioni del mezzo." },
  { title: 'Assistenza batteria scarica', slug: 'assistenza-batteria-scarica', ...serviceText('assistenza per batteria scarica'), text: "Problemi di avviamento? Descrivi i segnali del veicolo per valutare l’assistenza o il trasferimento in officina." },
  { title: 'Recupero auto in panne', slug: 'recupero-auto-in-panne', ...serviceText('recupero auto in panne'), text: "Avarie, spie o un motore che non parte: organizziamo il recupero senza forzare il veicolo a proseguire." },
  { title: 'Soccorso in autostrada', slug: 'soccorso-in-autostrada', ...serviceText('soccorso in autostrada'), text: "Comunica tratta, direzione e riferimento chilometrico. Il soccorso sulla tratta è subordinato alle autorizzazioni necessarie." },
] as const

export const zones = [
  {
    "title": "Carroattrezzi a Reggio Emilia",
    "name": "Reggio Emilia",
    "slug": "reggio-emilia"
  },
  {
    "title": "Carroattrezzi a Rubiera",
    "name": "Rubiera",
    "slug": "rubiera"
  },
  {
    "title": "Carroattrezzi a Scandiano",
    "name": "Scandiano",
    "slug": "scandiano"
  },
  {
    "title": "Carroattrezzi a Correggio",
    "name": "Correggio",
    "slug": "correggio"
  },
  {
    "title": "Carroattrezzi a Montecchio Emilia",
    "name": "Montecchio Emilia",
    "slug": "montecchio-emilia"
  },
  {
    "title": "Carroattrezzi a Sant’Ilario d’Enza",
    "name": "Sant’Ilario d’Enza",
    "slug": "santilario-denza"
  },
  {
    "title": "Carroattrezzi a Cavriago",
    "name": "Cavriago",
    "slug": "cavriago"
  },
  {
    "title": "Carroattrezzi a Albinea",
    "name": "Albinea",
    "slug": "albinea"
  },
  {
    "title": "Carroattrezzi a Quattro Castella",
    "name": "Quattro Castella",
    "slug": "quattro-castella"
  },
  {
    "title": "Carroattrezzi a Bagnolo in Piano",
    "name": "Bagnolo in Piano",
    "slug": "bagnolo-in-piano"
  },
  {
    "title": "Carroattrezzi a Cadelbosco di Sopra",
    "name": "Cadelbosco di Sopra",
    "slug": "cadelbosco-di-sopra"
  },
  {
    "title": "Carroattrezzi a Casalgrande",
    "name": "Casalgrande",
    "slug": "casalgrande"
  }
] as const

export const networkSites = [
  { name: 'Carroattrezzi Reggio Emilia Pro', city: 'Reggio Emilia', url: 'https://carroattrezzireggioemiliapro.it/', description: 'Soccorso stradale e recupero veicoli a Reggio Emilia.' },
  { name: 'Carroattrezzi Ravenna 24H', city: 'Ravenna', url: 'https://carroattrezziravenna24h.it/', description: 'Assistenza stradale e traino attivo a Ravenna.' },
  { name: 'Carroattrezzi Bari', city: 'Bari', url: 'https://carroattrezzibari.it/', description: 'Recupero auto e soccorso stradale a Bari.' },
  { name: 'Carroattrezzi Pavia', city: 'Pavia', url: 'https://carroattrezziapavia.it/', description: 'Traino e assistenza veicoli a Pavia.' },
] as const

export const faqs = [
  { question: 'Quanto costa un carroattrezzi a Reggio Emilia?', answer: 'Il costo dipende da posizione, tipo di veicolo, condizioni del recupero, distanza e destinazione. Prima di organizzare l’intervento raccogliamo i dati essenziali per darti un’indicazione chiara.' },
  { question: 'Fate soccorso stradale a Reggio Emilia e provincia?', answer: 'Sì, il servizio è organizzato in città, nelle zone produttive, sulle strade provinciali e nei comuni vicini, valutando accessi e caratteristiche del mezzo.' },
  { question: 'Posso scegliere dove portare l’auto?', answer: 'Sì. Puoi indicare officina, carrozzeria, deposito, abitazione o un altro indirizzo concordato prima del recupero.' },
  { question: 'Intervenite anche per moto e furgoni?', answer: 'Sì, valutiamo auto, moto, scooter e furgoni leggeri. Durante la richiesta chiediamo peso, dimensioni e posizione per preparare il mezzo adatto.' },
  { question: 'Cosa devo comunicare durante la richiesta?', answer: 'Servono posizione, tipo di veicolo, problema riscontrato, eventuali danni e destinazione. Queste informazioni aiutano a organizzare il soccorso in modo più preciso.' },
] as const
