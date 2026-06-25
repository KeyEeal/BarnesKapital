import * as bootstrap from 'bootstrap'; // Import for type reference (no runtime impact)

declare global {
  interface Window {
    bootstrap: typeof bootstrap;
  }
}