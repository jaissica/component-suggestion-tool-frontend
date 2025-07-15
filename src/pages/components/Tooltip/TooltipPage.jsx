import React, { useState, useEffect } from "react";
import { Button, Tooltip, Typography, Utility } from "@visa/nova-react";
import {
  offset,
  safePolygon,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import ComponentDocLayout from "../../../components/ComponentDocLayout/ComponentDocLayout";
import HomeButton from "../../../components/HomeButton/HomeButton";

function PositionedTooltip({ placement, label }) {
  const [isOpen, setIsOpen] = useState(false);

  const { x, y, strategy, refs, context } = useFloating({
    middleware: [offset(8)],
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
  });

  const dismiss = useDismiss(context);
  const focus = useFocus(context);
  const hover = useHover(context, {
    handleClose: safePolygon(),
    move: false,
  });
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    dismiss,
    focus,
    hover,
    role,
  ]);

  return (
    <div style={{ margin: "1rem" }}>
      <Button
        ref={refs.setReference}
        {...getReferenceProps()}
        aria-describedby={`tooltip-${label}`}
      >
        {label}
      </Button>
      {isOpen && (
        <Tooltip
          ref={refs.setFloating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            width: "fit-content",
            zIndex: 100,
          }}
          id={`tooltip-${label}`}
          role="tooltip"
          aria-live="polite"
          {...getFloatingProps()}
        >
          This is a {placement} tooltip
        </Tooltip>
      )}
    </div>
  );
}

const TooltipExamples = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Utility
      vFlex
      vAlignItems="center"
      vJustifyContent="center"
      style={{
        minHeight: "60vh",
        position: "relative",
        textAlign: "center",
      }}
    >
      {/* Centered title + subtitle */}
      <Utility vFlex vFlexCol vAlignItems="center" style={{ zIndex: 1 }}>
        {!isSmallScreen && (
          <Typography variant="headline-4">Tooltip Compass Layout</Typography>
        )}
        {/* Only show subheading on larger screens */}
        {!isSmallScreen && (
          <Typography variant="body-2" style={{ marginTop: "0.5rem" }}>
            Hover around the compass
          </Typography>
        )}
      </Utility>

      {/* Render Tooltips */}
      {isSmallScreen ? (
        <Utility
          vFlex
          vAlignItems="center"
          vGap={8}
          style={{ textAlign: "center" }}
        >
          <PositionedTooltip placement="top" label="Top" />
          <PositionedTooltip placement="left" label="Left" />
          <PositionedTooltip placement="bottom" label="Bottom" />
          <PositionedTooltip placement="right" label="Right" />
        </Utility>
      ) : (
        <>
          <div style={{ position: "absolute", top: "0", marginBottom: "1rem" }}>
            <PositionedTooltip placement="top" label="Top" />
          </div>

          <div
            style={{
              position: "absolute",
              right: "0",
              top: "50%",
              transform: "translateY(-50%)",
              marginBottom: "1rem",
            }}
          >
            <PositionedTooltip placement="right" label="Right" />
          </div>

          <div style={{ position: "absolute", bottom: "0", marginTop: "1rem" }}>
            <PositionedTooltip placement="bottom" label="Bottom" />
          </div>

          <div
            style={{
              position: "absolute",
              left: "0",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <PositionedTooltip placement="left" label="Left" />
          </div>
        </>
      )}
    </Utility>
  );
};

const fullCode = `// Tooltip compass layout
<PositionedTooltip placement="top" label="Top" />
<PositionedTooltip placement="bottom" label="Bottom" />
<PositionedTooltip placement="left" label="Left" />
<PositionedTooltip placement="right" label="Right" />`;

export default function TooltipPage() {
  return (
    <ComponentDocLayout
      title={
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Tooltip</span>
          <Utility
            vFlex
            vFlexRow
            vGap={16}
            vAlignItems="center"
            style={{ marginBottom: "1.5rem" }}
          >
            <HomeButton />
          </Utility>
        </div>
      }
      description="Tooltips provide contextual hints or supplemental information when users hover or focus on UI elements. This example demonstrates tooltips in all four cardinal directions using a compass-style layout."
      preview={<TooltipExamples />}
      code={fullCode}
      props={[
        {
          name: "placement",
          type: '"top" | "bottom" | "left" | "right"',
          required: true,
          description:
            "Position of the tooltip relative to the reference element",
        },
        {
          name: "label",
          type: "string",
          required: true,
          description: "Text shown inside the reference button",
        },
      ]}
    />
  );
}
