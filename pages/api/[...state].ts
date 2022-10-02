import establishments from '../../data.json'

export default function handler(req, res) {
  const { state } = req.query

  const filterMap = {
    'hungry': e => e.lunch,
    'thirsty': e => e.drink,
    'both': e => e.lunch && e.drink,
  }

  let list = establishments.filter(filterMap[state[0]])

  if (state[1] == 'random') {
    let random = list[Math.floor(Math.random() * list.length)]
    res.status(200).json(random)
  } else {
    res.status(200).json(list)
  }
}
