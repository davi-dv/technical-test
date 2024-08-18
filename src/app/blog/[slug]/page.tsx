'use Client'

type Params = {
  params: {
    slug: string
  }
}

export default function Page({ params }: Params) {
  console.log('teste')
  return <h1 className="text-3xl font-bold underline">Slug: {params.slug}</h1>
}
