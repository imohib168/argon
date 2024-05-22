// package imports
import clsx from 'clsx';
import React from 'react';

// component types
type IProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  description: React.ReactNode;
};

const GraphCard: React.FC<IProps> = ({
  label,
  children,
  className,
  description,
}) => {
  return (
    <div className={clsx('bg-card rounded-xl p-4', className)}>
      <p className="text-white text-lg font-bold">{label}</p>
      <p className="text-sm">{description}</p>

      <div className="h-[300px] 2xl:h-[350px]">{children}</div>
    </div>
  );
};

export default GraphCard;
