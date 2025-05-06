// This file contains temporary type declarations to resolve TypeScript errors
// These should be removed once proper npm packages are installed

declare module 'react' {
  export default any;
  export function useState<T>(initialState: T): [T, (newState: T | ((prevState: T) => T)) => void];
  export function useState<T>(initialState: () => T): [T, (newState: T | ((prevState: T) => T)) => void];
  export function useState<T = undefined>(): [T | undefined, (newState: T | ((prevState: T | undefined) => T)) => void];
  export const useEffect: any;
}

// Add React namespace
declare namespace React {
  interface ReactNode {}
  interface ChangeEvent<T> {
    target: T;
  }
  interface FormEvent {
    preventDefault(): void;
  }
}

declare module 'next' {
  export interface Metadata {
    title?: string;
    description?: string;
    [key: string]: any;
  }
}

declare module 'framer-motion' {
  export const motion: any;
}

declare module 'react-feather' {
  export const Calendar: any;
  export const MapPin: any;
  export const CreditCard: any;
  export const ChevronRight: any;
  export const ChevronLeft: any;
}

declare module 'next/image' {
  const Image: any;
  export default Image;
}

declare module 'next/link' {
  const Link: any;
  export default Link;
}

// Add JSX namespace to fix "JSX element implicitly has type 'any'" errors
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
