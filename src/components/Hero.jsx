import React from 'react'
import { Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-amber-50 to-white" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-amber-600 font-semibold">
              <Star className="h-5 w-5 fill-amber-400 text-amber-600" />
              I FEEL GOLD S.p.A. – Banco Metalli
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Investi in Oro Fisico con Flessibilità e Sicurezza
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Scopri la Compravendita per Conto Terzi (C.C.T.) e il Piano di Accumulo in Oro Fisico (PAOF):
              due modalità innovative per ottenere oro puro certificato 999, consegnato direttamente a casa.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#cct" className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-5 py-3 text-white font-semibold shadow hover:bg-amber-700 transition">
                Scopri la C.C.T.
              </a>
              <a href="#paof" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-amber-700 font-semibold ring-1 ring-amber-300 hover:bg-amber-50 transition">
                Esplora il PAOF
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto w-full max-w-md rounded-3xl bg-white/80 backdrop-blur shadow-xl p-6 ring-1 ring-amber-100">
              <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-amber-200 via-amber-100 to-yellow-50 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="text-6xl font-black text-amber-700">999</div>
                  <div className="mt-2 text-sm uppercase tracking-widest text-amber-800">Purezza certificata</div>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-amber-600" /> Oro fisico da investimento conforme alla Legge 7/2000</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-amber-600" /> Consegna assicurata all’indirizzo indicato, senza costi aggiuntivi</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-amber-600" /> Acquisto a partire da 5 grammi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
