import * as React from 'react';

export interface IWrapperProps {
}

export const Wrapper: React.FC<IWrapperProps> = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
}
