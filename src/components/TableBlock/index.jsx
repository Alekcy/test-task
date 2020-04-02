import React from 'react'

import { Table } from 'components/Table'
import { Button } from 'components/Button'

import { TableBlockContainer } from './styles'

export const TableBlock = ({data}) => {
  return (
    <TableBlockContainer>
      <Table data={data} />
      <Button fullWidth padding="20px">Добавить запись</Button>
    </TableBlockContainer>
  )
}
