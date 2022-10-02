// @ts-nocheck
import Head from 'next/head'
import { useState } from 'react'
import establishments from '../data.json'

function HomePage() {
  const [establishment, setEstablishment] = useState()

  function filterRandom(filter) {
    const list = establishments.filter(filter)
    const random = list[Math.floor(Math.random() * list.length)]
    setEstablishment(random)
  }

  return (
    <div className="bg-lime-200 flex h-screen flex-col justify-center items-center p-4">
      <Head>
        <title>Mile End Roulette</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎰</text></svg>" />
      </Head>
      <h1 className="text-4xl font-bold text-lime-800">Mile End Roulette</h1>
      <h2 className="text-xl text-center mb-8">Don&apos;t know what to eat? Roll the Mile End Roulette! 🎲</h2>
      <div className="text-center flex flex-col justify-center mb-8 min-h-[15%] min-w-[80%] rounded-md bg-lime-100 p-2">
        <div className="text-3xl font-bold">{establishment ? establishment.name : ' '}</div>
        <div className="text-xl italic">{establishment ? establishment.comment : ' '}</div>
        <div className="text-xl">{establishment ? establishment.address : ' '}</div>
      </div>
      <div className="flex flex-col space-y-2">
        <button className="text-xl rounded-md bg-lime-800 text-white p-4" onClick={() => filterRandom(e => e.lunch)}>I&apos;m hungry</button>
        <button className="text-xl rounded-md bg-lime-800 text-white p-4" onClick={() => filterRandom(e => e.drink)}>I&apos;m thirsty</button>
        <button className="text-xl rounded-md bg-lime-800 text-white p-4" onClick={() => filterRandom(e => e.lunch && e.drink)}>I&apos;m both</button>
      </div>
    </div>
  )
}

export default HomePage
