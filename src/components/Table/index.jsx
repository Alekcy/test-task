import React from 'react'
import DataTable from 'react-data-table-component';

import { columns } from './columns'
import { tableStyles, SortIcon } from './styles'
import './styles.css'

export const Table = ({data}) => {
  return (
    <DataTable
			noHeader
      striped
			columns={columns}
			data={data}
      sortIcon={<SortIcon />}
			customStyles={tableStyles}
			defaultSortField="date"
      defaultSortAsc={false}
		/>
  )
}
