// component imports
import { Button, buttonVariants } from '@/shared/components/ui/button';

// util imports
import { cn } from '@/shared/utils';
import { VariantProps } from 'class-variance-authority';

// coomponent types
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label: string;
  icon: JSX.Element;
  className?: string;
  iconPosition?: 'START' | 'END';
}

const IconButton: React.FC<ButtonProps> = ({
  className,
  label,
  iconPosition = 'START',
  icon,
  ...rest
}) => {
  return (
    <Button
      className={cn(
        'rounded-lg bg-secondary py-6 transition-all duration-200 hover:bg-card/70',
        className
      )}
      {...rest}
    >
      {iconPosition == 'START' ? (
        <>
          <span className="mr-2">{icon}</span>
          {label}
        </>
      ) : (
        iconPosition == 'END' && (
          <>
            {label}
            <span className="ml-2">{icon}</span>
          </>
        )
      )}
    </Button>
  );
};

export default IconButton;
