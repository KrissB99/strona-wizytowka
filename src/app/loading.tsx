import { LoaderCircle } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center space-y-8">
        {/* Animated dots */}
        <LoaderCircle
          className="text-violet-500 animate-spin bg-gradient animate-colors"
          size={64}
        />
        {/* Loading text with fade animation */}
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold text-foreground animate-pulse">
            Loading...
          </h2>
          <p className="text-sm text-muted-foreground animate-pulse">
            Please wait while we prepare your experience
          </p>
        </div>
      </div>
    </div>
  );
}
