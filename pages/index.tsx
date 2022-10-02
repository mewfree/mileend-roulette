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
    <>
      <Head>
        <title>Mile End Roulette</title>
      </Head>
      <h1>Mile End Roulette</h1>
      <div>Welcome to Mile End Roulette</div>
      <div>{establishment ? establishment.name : ''}</div>
      <button onClick={() => filterRandom(e => e.lunch)}>I&apos;m hungry</button>
      <button onClick={() => filterRandom(e => e.drink)}>I&apos;m thirsty</button>
      <button onClick={() => filterRandom(e => e.lunch && e.drink)}>I&apos;m both</button>
    </>
  )
}

export default HomePage
