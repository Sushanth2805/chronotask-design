declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  const src: string;
  export default src;
}

declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.webp';

// Support for import.meta.env
interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly MODE: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly SSR: boolean;
  [key: string]: any;
}

interface ImportMeta {
  readonly url: string;
  readonly env: ImportMetaEnv;
  readonly glob: any;
}

// Support for process.env as per Google GenAI SDK guidelines
declare var process: {
  env: {
    NODE_ENV: string;
    API_KEY?: string;
    [key: string]: string | undefined;
  };
};
