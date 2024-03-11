import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './Components/TwitterFollowCard'

function App() {

  // Esto no es un componente, ESTO ES UN ELEMENTO, lo que reenderiza React, mientras que los componentes los fabrican

  // const formattedUserName = (<span>@{userName}</span>)

  // Podemos pasar props como elementos de un objeto
  // const goku = {isFollowing: true, userName:'Goku'}
  // const vegeta = {isFollowing: true, userName:'Vegeta'}

  const users = [
    {
      userName: 'goku',
      name: 'Son Goku',
      isFollowing: false
    },

    {
      userName: 'vegeta',
      name: 'Rey Vegeta',
      isFollowing: false
    },

    {
      userName: 'Stephe',
      name: 'Stephen MaxDonald',
      isFollowing: false
    },

    {
      userName: 'Mike',
      name: 'Micheal Karrotopo',
      isFollowing: false
    }
  ]
  return (
    <section className='app'>

      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
            name={name}
          >
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}

export default App
