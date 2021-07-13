import { Plugin } from 'vite';

declare const adorableCSS: (config?: {
    ext: string[];
}) => Plugin;

export { adorableCSS };
