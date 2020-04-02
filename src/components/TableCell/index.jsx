import * as React from 'react'

import { DateCell } from './DateCell'


export const TableCell = ({ value, type }) => {
	if (value === undefined) return null;

	const formatDistance = distance => {
		if (distance >= 1000) {
			const km = Math.round(distance / 1000)
			const m = distance % 1000
			if (distance % 1000 !== 0) {
				return `${km} km ${m} m`
			}
			return `${km} km`
		} else {
			return `${distance} m`
		}
	}

	const getValueForCell = value => {
		switch (type) {
			case 'date': return <DateCell date={value} />;
			case 'distance': return formatDistance(value);
			default: return value;
		}
	};

	return (
		<div>
			{ getValueForCell(value) }
		</div>
	)
};
