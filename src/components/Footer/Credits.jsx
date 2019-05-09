import React from 'react'
import { Container } from '../layout'

const Credits = ({ name }) => (
  <Container>
    <p>
      done with{' '}
      <span role='img' aria-label='green heart'>
        💚
      </span>{' '}
      by{' '}
      <a
        href='https://about.me/gutofoletto'
        title='gutofoletto'
        target='_blank'
        rel='noopener noreferrer'
      >
        gutofoletto
      </a>
    </p>
  </Container>
)

export default Credits
