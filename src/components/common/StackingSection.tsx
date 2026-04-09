import { type CSSProperties, type ReactNode } from "react";

type EdgeFadeMode = "none" | "top" | "bottom" | "both";

interface StackingSectionProps {
  children: ReactNode;
  className?: string;
  zIndex?: number;
  edgeFade?: EdgeFadeMode;
  fadeSize?: string;
  edgeGradientColor?: string;
}

function getMaskImage(edgeFade: EdgeFadeMode, fadeSize: string) {
  if (edgeFade === "top") {
    return `linear-gradient(to bottom, transparent 0, black ${fadeSize}, black 100%)`;
  }

  if (edgeFade === "bottom") {
    return `linear-gradient(to bottom, black 0, black calc(100% - ${fadeSize}), transparent 100%)`;
  }

  if (edgeFade === "both") {
    return `linear-gradient(to bottom, transparent 0, black ${fadeSize}, black calc(100% - ${fadeSize}), transparent 100%)`;
  }

  return undefined;
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
  edgeFade = "none",
  fadeSize = "72px",
  edgeGradientColor,
}: StackingSectionProps) {
  const maskImage = getMaskImage(edgeFade, fadeSize);
  const containerStyle: CSSProperties = { zIndex };
  const contentStyle: CSSProperties = {};
  const showTopEdge = edgeFade === "top" || edgeFade === "both";
  const showBottomEdge = edgeFade === "bottom" || edgeFade === "both";
  const shouldApplyMask = Boolean(maskImage) && !edgeGradientColor;

  if (shouldApplyMask) {
    contentStyle.maskImage = maskImage;
    contentStyle.WebkitMaskImage = maskImage;
    contentStyle.maskRepeat = "no-repeat";
    contentStyle.WebkitMaskRepeat = "no-repeat";
    contentStyle.maskSize = "100% 100%";
    contentStyle.WebkitMaskSize = "100% 100%";
  }

  return (
    <div className={`sticky top-0 relative min-h-screen ${className}`} style={containerStyle}>
      <div className="relative min-h-screen" style={contentStyle}>
        {children}
      </div>
      {edgeGradientColor && showTopEdge ? (
        <div
          className="pointer-events-none absolute inset-x-0 z-20"
          style={{
            top: `calc(-1 * ${fadeSize})`,
            height: fadeSize,
            backgroundImage: `linear-gradient(to bottom, transparent 0%, ${edgeGradientColor} 100%)`,
          }}
        />
      ) : null}
      {edgeGradientColor && showBottomEdge ? (
        <div
          className="pointer-events-none absolute inset-x-0 z-20"
          style={{
            bottom: `calc(-1 * ${fadeSize})`,
            height: fadeSize,
            backgroundImage: `linear-gradient(to top, transparent 0%, ${edgeGradientColor} 100%)`,
          }}
        />
      ) : null}
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
