"use client"
import Image from 'next/image'

export default function productDetails({ params }: { params: { id: string } }) {
  return (
    <main className="">
      <h1>teste {params.id} </h1>
    </main>
  )
}