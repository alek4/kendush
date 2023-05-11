import React, { Children } from 'react'

interface WrapperProps {
  children: any
}

export const Wrapper: React.FC<WrapperProps> = ({children}) => {
    return (
      <div>
        {children}
      </div>
    );
}