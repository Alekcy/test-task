import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { useSelector, useDispatch } from 'react-redux'

import { TableBlock } from 'components/TableBlock'

import { fetchData } from 'store/data/actions'

export const Main = () => {
  const dispatch = useDispatch()
  const data = useSelector(store => store.walks)
  console.log(data)
  useEffect(() => {
    dispatch(fetchData())
  }, [])
  return (
    <Container>
      <Row>
        <Col>
          <TableBlock data={data} />
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
  )
}
