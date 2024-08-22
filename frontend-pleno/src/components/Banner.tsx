export default function Banner() {
  return (
    <div className="flex h-auto w-full flex-col bg-primary md:h-[320px] md:flex-row">
      <div className="bg-custom-orange flex h-[160px] w-full items-center justify-center md:h-full md:w-1/2">
        <h1 className="text-center text-2xl font-bold text-white md:text-3xl">
          Estilo e conforto para os seus pés
        </h1>
      </div>

      <div className="bg-custom-orange flex w-full justify-center md:w-1/2">
        <img src="/imgs/tenis.jpg" alt="" className="max-h-full w-full" />
      </div>
    </div>
  )
}
