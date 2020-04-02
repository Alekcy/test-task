import React from 'react'
import moment from 'moment'

import 'moment/locale/ru';

import { DayName } from './styles'

export const DateCell = ({ date }) => {
  moment.locale('ru')
  console.log(moment.locale())
  return (
    <div>
      <DayName>{moment(date).format('dddd')}</DayName>
      <div>{moment(date).format('DD.MM.YYYY')}</div>
    </div>
  )
}
