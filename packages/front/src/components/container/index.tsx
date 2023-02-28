import React from 'react';
import classes from 'classnames';

const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={classes(`mx-auto max-w-6xl ${className}`)}>{children}</div>;
};

export default Container;
