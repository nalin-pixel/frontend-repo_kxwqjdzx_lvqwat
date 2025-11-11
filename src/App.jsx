import React from 'react'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { Section, Stat } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-amber-100">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight">
            <span className="text-amber-700">I FEEL GOLD</span> • Banco Metalli
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#cct" className="hover:text-amber-700">C.C.T.</a>
            <a href="#compravendita" className="hover:text-amber-700">Compravendita Oro</a>
            <a href="#paof" className="hover:text-amber-700">PAOF</a>
          </nav>
          <a href="#paof" className="inline-flex items-center rounded-lg bg-amber-600 px-4 py-2 text-white text-sm font-semibold shadow hover:bg-amber-700">Inizia ora</a>
        </div>
      </header>

      {/* Hero */}
      <Hero />

      {/* C.C.T. */}
      <Section
        id="cct"
        title="Compravendita per Conto Terzi (C.C.T.)"
        subtitle="Servizio disciplinato dall’art. 1, comma 3, della Legge 7/2000: acquisto e rivendita di oro da investimento con ricavato annuale in oro fisico puro."
      >
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            La cosiddetta C.C.T. consente al Cliente di acquistare e rivendere oro da investimento tramite il Banco Metalli,
            generando un ricavato che, ogni 12 mesi, viene corrisposto sotto forma di oro fisico puro.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Il Cliente beneficia così annualmente di un bene fisico e tangibile, riconosciuto a livello internazionale come bene rifugio per eccellenza,
            al posto di meri interessi finanziari, assicurativi, azionari o obbligazionari.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Stat label="Ricavato" value="In oro fisico puro" />
            <Stat label="Frequenza" value="Ogni 12 mesi" />
            <Stat label="Normativa" value="Legge 7/2000" />
          </div>
        </div>
        <div className="rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-100">
          <h3 className="text-lg font-semibold text-amber-800">Perché scegliere la C.C.T.?</h3>
          <ul className="mt-3 space-y-2 text-amber-900">
            <li>• Bene rifugio fisico e tangibile, consegnato a casa</li>
            <li>• Gestione professionale della compravendita</li>
            <li>• Stabilità e protezione nel tempo</li>
          </ul>
        </div>
      </Section>

      {/* Compravendita Classica */}
      <Section
        id="compravendita"
        title="Compravendita di Oro"
        subtitle="Acquisto o vendita di oro fisico certificato 999, anche per quantità a partire da 5 grammi."
      >
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Trattiamo esclusivamente lingotti certificati 999. Il prezzo indicato si riferisce al valore attuale dell’oro,
            soggetto a variazioni giornaliere in base al mercato. Una volta acquistato e pagato, l’oro viene consegnato
            all’indirizzo indicato senza costi aggiuntivi.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Stat label="Quantità minima" value="5 g" />
            <Stat label="Purezza" value="999" />
            <Stat label="Consegna" value="Assicurata e inclusa" />
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-gray-100">
          <h3 className="text-lg font-semibold">Richiedi un preventivo</h3>
          <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Quantità (g)" />
            <input className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Indirizzo di consegna" />
            <button type="button" className="sm:col-span-2 rounded-lg bg-amber-600 px-4 py-2 text-white font-semibold hover:bg-amber-700">Invia richiesta</button>
          </form>
        </div>
      </Section>

      {/* PAOF */}
      <Section
        id="paof"
        title="PAOF – Piano di Accumulo in Oro Fisico"
        subtitle="Accumula oro fisico nel tempo con massima flessibilità su tempi, quantità e condizioni."
      >
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Decidi quanto oro desideri acquistare e versa importi ricorrenti quando preferisci. Al raggiungimento della
            soglia, l’oro ti verrà consegnato direttamente all’indirizzo indicato in modo semplice e sicuro.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Stat label="Durate disponibili" value="3 • 5 • 8 • 10 • 12 • 15 anni" />
            <Stat label="Flessibilità" value="Versamenti liberi o annuali" />
            <Stat label="Gestione" value="Operatore Professionale" />
          </div>
        </div>
        <div className="rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-100">
          <h3 className="text-lg font-semibold text-amber-800">Vantaggi principali</h3>
          <ul className="mt-3 space-y-2 text-amber-900">
            <li>• Adatti il piano alle tue esigenze personali</li>
            <li>• Investimento in oro fisico, bene rifugio per eccellenza</li>
            <li>• Servizio unico in Italia presentato da I FEEL GOLD S.p.A.</li>
          </ul>
        </div>
      </Section>

      {/* Disclaimer */}
      <div className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-xl bg-gray-50 p-4 text-sm text-gray-600 ring-1 ring-gray-100">
          N.B. La performance dell’investimento dipende dal periodo di sottoscrizione del contratto.
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
