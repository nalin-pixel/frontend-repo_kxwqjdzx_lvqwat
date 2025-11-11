import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-amber-100 mt-16">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} I FEEL GOLD S.p.A. – Banco Metalli. Tutti i diritti riservati.</p>
        <nav className="flex flex-wrap items-center gap-4">
          <a href="#cct" className="hover:text-amber-700">C.C.T.</a>
          <a href="#compravendita" className="hover:text-amber-700">Compravendita Oro</a>
          <a href="#paof" className="hover:text-amber-700">PAOF</a>
        </nav>
      </div>
    </footer>
  )
}
