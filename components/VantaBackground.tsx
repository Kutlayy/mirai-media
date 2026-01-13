"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
// @ts-ignore
import FOG from "vanta/dist/vanta.fog.min";

export default function VantaBackground({ children }: { children: React.ReactNode }) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      try {
        const effect = FOG({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          
          // CANLANDIRILMIŞ RENKLER (O Anki Ayarlar):
          highlightColor: 0x8a1c3d, // Canlı Bordo
          midtoneColor: 0xcf6b6b,   // Canlı Kiremit
          lowlightColor: 0xffffff,  // Beyaz
          baseColor: 0xfff8f5,      // Açık Krem
          
          blurFactor: 0.81,
          speed: 0.90,
          zoom: 1.40,
          scale: 2.00,
          scaleMobile: 4.00
        });
        setVantaEffect(effect);
      } catch (error) {
        console.error("Vanta effect error:", error);
      }
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="relative min-h-[calc(100vh-7rem)] w-full overflow-hidden">
      {/* İçerik (Children) */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
