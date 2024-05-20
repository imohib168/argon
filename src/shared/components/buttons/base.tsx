// package imports
import React from 'react';

// component imports
import { Button } from '@/shared/components/ui/button';

// util imports
import { cn } from '@/shared/utils';

type IProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  className?: string;
};

const BaseButton: React.FC<IProps> = ({ label, className, ...rest }) => {
  return (
    <Button
      className={cn(
        'rounded-lg bg-secondary py-6 transition-all duration-200 hover:bg-card/70',
        className
      )}
      {...rest}
    >
      {label}
    </Button>
  );
};

export default BaseButton;
