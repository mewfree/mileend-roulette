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
    <div className="flex h-screen flex-col justify-center items-center p-4">
      <Head>
        <title>Mile End Roulette</title>
      </Head>
      <h1 className="text-4xl text-bold">Mile End Roulette</h1>
      <h2 className="text-xl text-center mb-8">Don&apos;t know what to eat? Roll the Mile End Roulette! 🎲</h2>
      <div className="text-center mb-8 min-h-[20%]">
        <div className="text-3xl">{establishment ? establishment.name : ' '}</div>
        <div className="text-xl italic">{establishment ? establishment.comment : ' '}</div>
        <div className="text-xl">{establishment ? establishment.address : ' '}</div>
      </div>
      <div className="flex flex-col space-y-2">
        <button className="text-xl border-2 rounded-md border-red-400 p-2" onClick={() => filterRandom(e => e.lunch)}>I&apos;m hungry</button>
        <button className="text-xl border-2 rounded-md border-red-400 p-2" onClick={() => filterRandom(e => e.drink)}>I&apos;m thirsty</button>
        <button className="text-xl border-2 rounded-md border-red-400 p-2" onClick={() => filterRandom(e => e.lunch && e.drink)}>I&apos;m both</button>
      </div>
    </div>
  )
}

export default HomePage
