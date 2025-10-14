import { Navigation } from '../Navigation';
import { ThemeProvider } from '../ThemeProvider';

export default function NavigationExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-20 px-6">
          <p className="text-center text-muted-foreground">Scroll to test navigation behavior</p>
        </div>
      </div>
    </ThemeProvider>
  );
}
