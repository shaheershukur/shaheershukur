import { EvervaultCard } from './components/ui/evervault-card';

export default function Home() {
  return (
    <div className="flex h-dvh w-dvw flex-col items-center p-4 md:justify-center">
      <EvervaultCard>
        <div className="flex w-full flex-col">
          <span>Hi, I am Shaheer.</span>
          <span>An enthusiastic engineer 🚀</span>
        </div>
      </EvervaultCard>
    </div>
  );
}
