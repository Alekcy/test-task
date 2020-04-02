import * as React from 'react';

import { TableCell } from 'components/TableCell'

export const columns = [
	{
		name: 'Дата',
		selector: 'date',
		sortable: true,
		cell: row => <TableCell type="date" value={row.date} />,
	},
	{
		name: 'Дистанция',
		selector: 'distance',
		sortable: true,
		cell: row => <TableCell type="distance" value={row.distance} />,
	},
];
