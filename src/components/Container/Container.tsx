import React, { PropsWithChildren } from 'react';
import './container.css';

export default function Container({ children }: PropsWithChildren) {
  return <div className="app-container">{children}</div>;
}
