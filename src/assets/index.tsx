// illustration imports
import DocumentIllustration from './illustrations/documentation-illustration.png';

// logo imports
import ArgonLogo from './logos/argon-logo.svg?react';
import ChakraLogo from './logos/chakra-logo.svg?react';

// types
type ComponentType = React.FunctionComponent;

interface IllustrationTypes {
  Document: string;
}

interface LogoTypes {
  Argon: ComponentType;
  Chakra: ComponentType;
}

export const ILLUSTRATIONS: IllustrationTypes = {
  Document: DocumentIllustration,
};

export const LOGOS: LogoTypes = { Argon: ArgonLogo, Chakra: ChakraLogo };
