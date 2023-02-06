import Stack from "react-bootstrap/Stack"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const GamesPreview = () => {
  return (
    <Stack gap={3} className='mt-3'>
    <Container>
      <Row>
        <Col md={2}>
          <h2>TEAMS</h2>
        </Col>
        <Col md={8}>
          <h2>GAME</h2>
        </Col>
        <Col md={2}>
          <h2>PLAYERS</h2>
        </Col>
      </Row>
    </Container>
  </Stack>
  )
}

export default GamesPreview