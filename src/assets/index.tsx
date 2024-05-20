// illustration imports
import DocumentIllustration from './illustrations/documentation-illustration.png';

// logo imports
import ArgonLogo from './logos/argon-logo.svg?react';
import ChakraLogo from './logos/chakra-logo.svg?react';

// types
type ComponentType = React.FunctionComponent;
type StaticImageType = { src: string; alt: string };

interface IllustrationTypes {
  Document: StaticImageType;
}

interface LogoTypes {
  Argon: ComponentType;
  Chakra: ComponentType;
}

export const ILLUSTRATIONS: IllustrationTypes = {
  Document: { src: DocumentIllustration, alt: 'document-illustration' },
};

export const LOGOS: LogoTypes = { Argon: ArgonLogo, Chakra: ChakraLogo };
