import { ThemeToggle } from '../ThemeToggle';
import { ThemeProvider } from '../ThemeProvider';

export default function ThemeToggleExample() {
  return (
    <ThemeProvider>
      <div className="flex items-center justify-center min-h-[200px] gap-4">
        <p className="text-muted-foreground">Theme Toggle:</p>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}
