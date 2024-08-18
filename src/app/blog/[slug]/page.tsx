type Params = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` }
}

export default function Page({ params }: Params) {
  const t = {
    tt: '',
    d: ''
  }
  return <h1 className="text-3xl font-bold underline">Slug: {params.slug}</h1>
}
