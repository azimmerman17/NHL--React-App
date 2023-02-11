import { useEffect } from "react"  
import { useParams } from "react-router-dom"
import Stack from "react-bootstrap/Stack"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import GamesPreview from "./GamesPreview"
import GamesFinal from "./GamesFinal"

import { GamesDataPreview } from "../../Models/GamesPreview"
import { GamesDataLive } from "../../Models/GamesLive"
import { GamesDataFinal } from "../../Models/GamesFinal"


const Games = ({ data, setPath, setTitle }) => {
  let { gameId } = useParams()
  const link = `/api/v1/game/${gameId}/feed/live`
  data = GamesDataFinal

  //  // API CONNECTION
  useEffect(() => {
    const { gameData } = data
    const { teams } = gameData
    const { home, away } = teams

    const code = (team) => {
      const { triCode } = team 
      return triCode
    }
    setTitle(`Game - ${code(away)} @ ${code(home)}`)
    if (data === {}) {
      setPath(link)
    }
    
  },[data])

  try {
    const { teams } = data.gameData 
  } catch (error){
    console.log(error)
    setPath(link)
  }

  console.log(data)
  
  const render = () => {
    if (data.gameData) {
      const { gamePk, gameData, liveData } = data
      const { boxscore } = liveData
      const { status } = gameData
      const { abstractGameState } = status

      switch (abstractGameState) {
        case 'Preview':
          return (
            <GamesPreview />
          )
          case 'Final':
            return (
              <GamesFinal liveData={liveData} />
            )
            default:
            return (
              <Stack gap={3} className='mt-3'>
                <Container>
                  <Row>
                    <Col md={3}>
                      <h2>TEAMS</h2>
                    </Col>
                    <Col>
                      <h2>GAME</h2>
                    </Col>
                    <Col md={3}>
                      <h2>PLAYERS</h2>
                    </Col>
                  </Row>
                </Container>
              </Stack>
            )

      }
  
    }
  }
  
  return (
    <div>
      {render()}
    </div>
  )
  
  
}

export default Games