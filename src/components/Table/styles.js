import styled from 'styled-components'

import Sort from 'assets/icons/sortIcon.svg'

export const SortIcon = styled.img.attrs({
  src: Sort,
  alt: 'sort',
})`
  width: 1rem;
  margin-left: 10px;
`

export const tableStyles = {
	table: {
		style: {
			background: '#f2f2f2',
			overflowX: 'auto',
		},
	},
	tableWrapper: {
		style: {
			display: 'block',
		},
	},
	cells: {
		style: {
			display: 'flex',
			justifyContent: 'left'
		},
	},
	headRow: {
		style: {
			minHeight: 32,
			padding: 10,
			background: '#1C2025',
		},
	},
	headCells: {
		style: {
			fontSize: '1.2rem',
			padding: 5,
			background: '#1C2025',
			color: '#ffffff!important',
		},
		activeSortStyle: {
			 color: '#ffffff',
			 '&:hover:not(:focus)': {
        color: '#ffffff'	,
      },
	  },
		inactiveSortStyle: {
		 '&:focus': {
			 outline: 'none',
			 color: '#ffffff',
		 },
		 '&:hover': {
			 color: '#ffffff',
		 },
	 },
	},
	rows: {
		style: {
			fontSize: '1rem',
			padding: '15px 0',
			minHeight: 60,
			'&:not(:last-of-type)': {
				borderBottomWidth: '0',
			},
		},
		stripedStyle: {
			 '&:nth-child(odd)': {
				 backgroundColor: '#EFEFF0',
			 },
		},
	},
	pagination: {
		style: {
			paddingRight: 0,
			paddingLeft: 0,
		},
	}
};
