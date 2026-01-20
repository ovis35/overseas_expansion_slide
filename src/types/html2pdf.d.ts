declare global {
  interface Window {
    html2pdf?: () => {
      from: (element: HTMLElement) => {
        set: (options: Record<string, unknown>) => {
          save: () => Promise<void>;
        };
      };
    };
  }
}

export {};
