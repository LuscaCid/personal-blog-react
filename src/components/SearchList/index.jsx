import React from 'react'
import { Container } from './style'
import { Button } from '../Button'
import { api } from '../../service/api'
import defaultAvatar from '../../assets/defaultavatar.png'


const ListComponent = ({user}) => {
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : defaultAvatar 
  const [avatar, setAvatar] = useState(avatarURL)
  
  const connect = async () => {

  }
  
  
  return (
    <Container>
      <div>
        <img src={avatarURL} alt="user image" />
        <h3>{user.name}</h3>
      </div>
      <div className="button">
        
      </div>

    </Container>
  )
}

export  {ListComponent}