interface WaveDividerProps {
  lightFill?: string;
  darkFill?: string;
  flip?: boolean;
}

export function WaveDivider({ lightFill = 'fill-white', darkFill = 'dark:fill-teal-950', flip = false }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? '-scale-y-100' : ''}`} aria-hidden>
      <svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={`block w-full h-[50px] ${lightFill} ${darkFill}`}
      >
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
      </svg>
    </div>
  );
}
