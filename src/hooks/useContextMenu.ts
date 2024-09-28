import { useState, useRef, useEffect } from "react";

type ContextMenuState<TData> = {
  data: TData | null;
  position: { x: number; y: number } | null;
};

export const useContextMenu = <TData,>() => {
  const [contextMenu, setContextMenu] = useState<ContextMenuState<TData>>({
    data: null,
    position: null,
  });

  const menuRef = useRef<HTMLDivElement | null>(null);

  const openContextMenu = (e: React.MouseEvent, rowData: TData) => {
    e.preventDefault();

    const clickX = e.clientX;
    const clickY = e.clientY;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Prvo postavimo meni na inicijalnu poziciju
    setContextMenu({
      data: rowData,
      position: { x: clickX, y: clickY },
    });

    // Kada se meni renderuje, izračunaj tačnu poziciju
    setTimeout(() => {
      if (menuRef.current) {
        const menuWidth = menuRef.current.offsetWidth;
        const menuHeight = menuRef.current.offsetHeight;

        // Ako nema dovoljno prostora desno, pomeri meni levo
        const positionX =
          clickX + menuWidth > screenWidth
            ? clickX - menuWidth
            : clickX;

        // Ako nema dovoljno prostora dole, pomeri meni gore
        const positionY =
          clickY + menuHeight > screenHeight
            ? clickY - menuHeight
            : clickY;

        // Ažuriraj poziciju menija sa tačnim koordinatama
        setContextMenu({
          data: rowData,
          position: { x: positionX, y: positionY },
        });
      }
    }, 0); // Ovo osigurava da ref postane dostupan pre kalkulacija
  };

  const closeContextMenu = () => {
    setContextMenu({ data: null, position: null });
  };

  // Zatvaranje menija kada se klikne van njega
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeContextMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    contextMenu,
    openContextMenu,
    closeContextMenu,
    menuRef, // Ref za kontekst meni
  };
};
