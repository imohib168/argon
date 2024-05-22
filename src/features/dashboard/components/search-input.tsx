import { IonIcon } from '@ionic/react';
import { search } from 'ionicons/icons';

const SearchInput = () => {
  return (
    <div className="flex items-center pl-4 pr-2 py-[0.6rem] bg-card rounded-lg">
      <IonIcon icon={search} />

      <input
        className="ml-4 bg-transparent text-muted placeholder-muted border-none outline-none w-full text-sm"
        placeholder="Type here..."
        type="text"
      />
    </div>
  );
};

export default SearchInput;
