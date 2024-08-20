import Image from 'next/image'
import Catalog from './catalog/page'
import { AppContext } from '@/context/index'

export default function HomePage() {
  return (
      <section className="p-12">
        <Catalog />
      </section>
  )
}
