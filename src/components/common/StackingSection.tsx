import { ReactNode } from "react";

interface StackingSectionProps {
  children: ReactNode;
  className?: string;
  zIndex?: number;
}

/**
 * A wrapper component that creates a stacking scroll effect.
 * The child component will stick to the top when scrolled into view,
 * and subsequent sections will slide over it.
 *
 * Usage:
 * <StackingSection zIndex={10}>
 *   <ComponentA />
 * </StackingSection>
 * <StackingSection zIndex={20}>
 *   <ComponentB /> <!-- Will slide over ComponentA -->
 * </StackingSection>
 */
export function StackingSection({
  children,
  className = "",
  zIndex = 10,
}: StackingSectionProps) {
  return (
    <div
      className={`sticky top-0 min-h-screen ${className}`}
      style={{ zIndex }}
    >
      {children}
    </div>
  );
}

/**
 * Container for stacking sections.
 * Provides a relative positioning context for the sticky children.
 */
export function StackingContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
}
