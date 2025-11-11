import React from 'react'

export function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {children}
        </div>
      </div>
    </section>
  )
}

export function Stat({ label, value }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-gray-100">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-gray-900">{value}</div>
    </div>
  )
}
