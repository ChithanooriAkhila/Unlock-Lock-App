import {useState} from 'react'
import {MainContainer, Image, TextContent, Button} from './styledComponents'

const Unlock = () => {
  const [isLocked, setIsLocked] = useState(true)

  const image = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  const changeLockStatus = () => {
    setIsLocked(prev => !prev)
  }

  return (
    <MainContainer>
      <Image src={image} alt={isLocked ? 'lock' : 'unlock'} />
      <TextContent>
        Your Device is {isLocked ? 'Locked' : 'Unlocked'}
      </TextContent>
      <Button type="button" onClick={changeLockStatus}>
        {isLocked ? 'Unlock' : 'Lock'}
      </Button>
    </MainContainer>
  )
}

export default Unlock
