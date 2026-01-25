"use client";

import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

const TAILWIND_COLORS = [
  "bg-purple-dark",
  "bg-green-dark",
  "bg-orange-bright",
  "bg-cream-warm",
  "bg-pink-light",
  "bg-brown-gray",
  "bg-green-light",
  "bg-pink-coral",
  "bg-mint",
  "bg-purple-light",
  "bg-blue-medium",
  "bg-green-medium",
  "bg-yellow",
  "bg-teal",
  "bg-yellow-pale",
  "bg-brown-dark",
];

interface Cell {
  id: string;
  color: string;
}

export default function CellGrid() {
  const [hoveredId, setHoveredId] = useState("");
  const [grid, setGrid] = useState<Cell[]>([]);
  const [colWidths, setColWidths] = useState<string[]>([]);
  const [rowHeights, setRowHeights] = useState<string[]>([]);
  const [visibleCells, setVisibleCells] = useState<Set<string>>(new Set());
  const [isInitialized, setIsInitialized] = useState(false);
  const previousWidthRef = useRef<number>(0);

  const generateGrid = (numCols: number, numRows: number) => {
    const newColWidths = Array(numCols)
      .fill(null)
      .map(() => {
        const randomWidth = Math.random() * 2 + 1;
        return `${randomWidth}fr`;
      });

    const newRowHeights = Array(numRows)
      .fill(null)
      .map(() => {
        const randomHeight = Math.random() * 2 + 1;
        return `${randomHeight}fr`;
      });

    setColWidths(newColWidths);
    setRowHeights(newRowHeights);

    const newGrid: Cell[] = [];
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        newGrid.push({
          id: `cell-${row}-${col}`,
          color:
            TAILWIND_COLORS[Math.floor(Math.random() * TAILWIND_COLORS.length)],
        });
      }
    }

    setGrid(newGrid);
    setVisibleCells(new Set());
  };

  // Use useLayoutEffect to run synchronously before paint
  useLayoutEffect(() => {
    const updateGrid = () => {
      const width = window.innerWidth;

      if (width === previousWidthRef.current) {
        return;
      }

      previousWidthRef.current = width;

      let numCols = 8;
      let numRows = 10;

      if (width < 480) {
        numCols = 4;
        numRows = 8;
      } else if (width < 640) {
        numCols = 5;
        numRows = 9;
      } else if (width < 768) {
        numCols = 6;
        numRows = 9;
      } else if (width < 1024) {
        numCols = 7;
        numRows = 10;
      } else if (width < 1280) {
        numCols = 8;
        numRows = 10;
      } else {
        numCols = 10;
        numRows = 12;
      }

      generateGrid(numCols, numRows);
      setIsInitialized(true);
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, []);

  useEffect(() => {
    if (grid.length === 0) return;

    const gridSnapshot = [...grid];
    const totalCells = gridSnapshot.length;
    const shuffledIndices = Array.from(
      { length: totalCells },
      (_, i) => i,
    ).sort(() => Math.random() - 0.5);

    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout | null = null;
    let isCancelled = false;

    const revealNextCell = () => {
      if (isCancelled) return;

      if (currentIndex < totalCells) {
        const randomCellIndex = shuffledIndices[currentIndex];
        const cell = gridSnapshot[randomCellIndex];
        if (cell && cell.id) {
          setVisibleCells((prev) => new Set([...prev, cell.id]));
        }
        currentIndex++;

        const progress = currentIndex / totalCells;
        const delay = 40 - progress * 75;

        timeoutId = setTimeout(revealNextCell, Math.max(delay, 10));
      }
    };

    revealNextCell();

    return () => {
      isCancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [grid]);

  // Show skeleton while initializing
  if (!isInitialized || grid.length === 0) {
    return (
      <div className="w-full h-62.5 max-h-62.5 grid grid-cols-8 grid-rows-10 gap-0">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={`skeleton-${i}`}
            className="bg-stone-100 m-0.5 rounded-xs"
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className="group w-full h-62.5 max-h-62.5"
      style={{
        display: "grid",
        gridTemplateColumns: colWidths.join(" "),
        gridTemplateRows: rowHeights.join(" "),
        gap: "0px",
      }}
    >
      {grid.map((cell) => (
        <div
          key={cell.id}
          onMouseEnter={() => setHoveredId(cell.id)}
          onMouseLeave={() => setHoveredId("")}
          className={`${cell.color} transition-all duration-700 hover:duration-0 cursor-pointer ${
            hoveredId === cell.id
              ? "hover:scale-y-150 hover:z-20"
              : "group-hover:bg-stone-100 group-hover:m-0.5 group-hover:rounded-xs"
          } ${
            visibleCells.has(cell.id)
              ? "opacity-100 scale-100"
              : "opacity-0 scale-75"
          }`}
        />
      ))}
    </div>
  );
}
