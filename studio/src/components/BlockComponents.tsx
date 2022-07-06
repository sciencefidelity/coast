import React, {ReactNode} from 'react'

export const CodeRender = ({children}: {children: ReactNode}) => (
  <code
    style={{
      color: '#ff79c6',
      backgroundColor: '#151719',
    }}
  >
    {children}
  </code>
)

export const InternalLink = ({children}: {children: ReactNode}) => (
  <span
    style={{
      color: '#7aa9f3',
      borderBottom: '1px solid #7aa9f3',
    }}
  >
    {children}
  </span>
)

export const EmailLink = ({children}: {children: ReactNode}) => (
  <span
    style={{
      color: '#7aa9f3',
      borderBottom: '1px solid #7aa9f3',
    }}
  >
    {children}
  </span>
)
