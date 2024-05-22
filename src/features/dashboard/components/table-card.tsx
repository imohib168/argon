// component imports
import { GCBaseButton } from '@/shared/components';

// component types
type IProps = {
  label: string;
  children: React.ReactNode;
  button?: {
    text: string;
    action: () => void;
  };
};

const TableCard: React.FC<IProps> = ({
  label,
  children,
  button = { text: 'SEE ALL', action: () => {} },
}) => {
  return (
    <div className="bg-card rounded-xl">
      <div className="flex-between px-4 pt-4">
        <p className="font-bold text-lg">{label}</p>
        <GCBaseButton
          className="bg-primary p-0 px-4 h-8 text-xs font-bold"
          label={button.text}
          onClick={button.action}
        />
      </div>

      <div>{children}</div>
    </div>
  );
};

export default TableCard;
