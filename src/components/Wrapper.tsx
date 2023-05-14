import React, { Children } from 'react'

interface WrapperProps {
  children: any
  className?: string
}

export const Wrapper: React.FC<WrapperProps> = ({children, className}) => {
    return (
      <div className={`w-10/12 mx-auto max-w-5xl ${className}`}>
        {children}
      </div>
    );
}