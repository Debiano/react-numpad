import React from 'react'
import moment from 'moment'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Button, Welcome } from '@storybook/react/demo'

import NumPad from '../lib'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)

storiesOf('Components', module)
  .add('Number', () => 
    <NumPad.Number key='number-1' onChange={(value) => { console.log('value', value)}} label={'Totale'} />)    
  .add('Time', () => ([
    <NumPad.Time key='time-1' label={'Sveglia'} onChange={(value) => console.log('changed', value)}/>,
    <NumPad.Time key='time-2' onChange={(value) => console.log('changed', value)}/>
  ]))
  .add('Date', () => <NumPad.Date onChange={(value) => console.log('changed', value)} label={'Data di nascita'} />)
  
storiesOf('Elements', module)
  .add('Calendar', () => <NumPad.Calendar onChangeMonth={date => console.log(date)}
        date={moment()}
        onPickDate={date => console.log(date)}
        renderDay={date => (
          <span
            style={{
              fontWeight: date.isSame(moment(), 'day') ? 700 : 400
            }}
          >
            {date.format('D')}
          </span>
        )} />
  )


