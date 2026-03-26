"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

interface Neighborhood {
  slug: string;
  name: string;
  center: [number, number];
  zoom: number;
  medianPrice: string;
  vibe: string;
}

const NEIGHBORHOODS: Neighborhood[] = [
  {
    slug: "upper-east-side",
    name: "Upper East Side",
    center: [-73.9596, 40.7736],
    zoom: 14,
    medianPrice: "$3.2M",
    vibe: "Timeless elegance meets cultural grandeur along Museum Mile",
  },
  {
    slug: "upper-west-side",
    name: "Upper West Side",
    center: [-73.9754, 40.7870],
    zoom: 14,
    medianPrice: "$2.8M",
    vibe: "Intellectual charm, pre-war architecture, and Central Park at your doorstep",
  },
  {
    slug: "tribeca",
    name: "Tribeca",
    center: [-74.0084, 40.7163],
    zoom: 14.5,
    medianPrice: "$5.1M",
    vibe: "Cobblestone streets, soaring lofts, and Manhattan's most coveted zip code",
  },
  {
    slug: "soho",
    name: "SoHo",
    center: [-73.9998, 40.7233],
    zoom: 14.5,
    medianPrice: "$4.2M",
    vibe: "Cast-iron facades, world-class shopping, and artistic energy",
  },
  {
    slug: "greenwich-village",
    name: "Greenwich Village",
    center: [-73.9981, 40.7336],
    zoom: 14.5,
    medianPrice: "$3.5M",
    vibe: "Bohemian soul, tree-lined streets, and a vibrant culinary scene",
  },
  {
    slug: "chelsea",
    name: "Chelsea",
    center: [-74.0014, 40.7465],
    zoom: 14,
    medianPrice: "$2.9M",
    vibe: "Gallery district glamour, the High Line, and modern luxury",
  },
  {
    slug: "midtown",
    name: "Midtown",
    center: [-73.9845, 40.7549],
    zoom: 13.5,
    medianPrice: "$3.8M",
    vibe: "Iconic skyline living, world-class dining, and unmatched convenience",
  },
  {
    slug: "financial-district",
    name: "Financial District",
    center: [-74.0090, 40.7075],
    zoom: 14.5,
    medianPrice: "$2.1M",
    vibe: "Historic grandeur reimagined with sleek new towers and waterfront access",
  },
];

export function MapExplorer() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [selected, setSelected] = useState<Neighborhood | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [-73.985, 40.748],
      zoom: 12,
      pitch: 30,
      bearing: -10,
      attributionControl: false,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({ showCompass: false }),
      "top-right"
    );

    map.current.on("load", () => {
      NEIGHBORHOODS.forEach((hood) => {
        const el = document.createElement("div");
        el.className = "nb-map-marker";
        el.style.cssText = `
          width: 14px; height: 14px;
          background: #C9A96E;
          border: 2px solid #FAF8F5;
          border-radius: 50%;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 0 0 4px rgba(201,169,110,0.2);
        `;
        el.addEventListener("mouseenter", () => {
          el.style.transform = "scale(1.4)";
          el.style.boxShadow = "0 0 0 8px rgba(201,169,110,0.3)";
        });
        el.addEventListener("mouseleave", () => {
          el.style.transform = "scale(1)";
          el.style.boxShadow = "0 0 0 4px rgba(201,169,110,0.2)";
        });
        el.addEventListener("click", () => {
          setSelected(hood);
          map.current?.flyTo({
            center: hood.center,
            zoom: hood.zoom,
            duration: 1500,
            essential: true,
          });
        });

        const marker = new mapboxgl.Marker({ element: el })
          .setLngLat(hood.center)
          .addTo(map.current!);
        markersRef.current.push(marker);
      });
    });

    return () => {
      markersRef.current.forEach((m) => m.remove());
      map.current?.remove();
      map.current = null;
    };
  }, []);

  const handleClose = () => {
    setSelected(null);
    map.current?.flyTo({
      center: [-73.985, 40.748],
      zoom: 12,
      pitch: 30,
      bearing: -10,
      duration: 1200,
    });
  };

  return (
    <div className="relative w-full aspect-[21/9] min-h-[400px] md:min-h-[500px]">
      <div ref={mapContainer} className="absolute inset-0" style={{ position: "absolute" }} />

      {/* Info Panel */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-4 right-4 bottom-4 w-[300px] md:w-[340px] bg-midnight/95 backdrop-blur-md border border-stone-800 p-6 md:p-8 flex flex-col z-10"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-stone-500 hover:text-ivory transition-colors"
              aria-label="Close panel"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-champagne mb-2">
              Neighborhood
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-ivory mb-3">
              {selected.name}
            </h3>
            <p className="text-[14px] text-stone-400 leading-relaxed flex-1">
              {selected.vibe}
            </p>

            <div className="mt-4 pt-4 border-t border-stone-800">
              <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-stone-500 mb-1">
                Median Price
              </p>
              <p className="font-accent text-2xl text-champagne">
                {selected.medianPrice}
              </p>
            </div>

            <Link
              href={`/neighborhoods/${selected.slug}`}
              className="mt-6 block w-full text-center px-6 py-3 bg-champagne text-midnight text-[12px] font-medium uppercase tracking-[0.1em] rounded-[4px] hover:bg-champagne-light transition-colors"
            >
              Explore {selected.name}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Neighborhood pills overlay at bottom */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {NEIGHBORHOODS.map((hood) => (
            <button
              key={hood.slug}
              onClick={() => {
                setSelected(hood);
                map.current?.flyTo({
                  center: hood.center,
                  zoom: hood.zoom,
                  duration: 1500,
                  essential: true,
                });
              }}
              className={`px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] rounded-full backdrop-blur-sm transition-all duration-200 ${
                selected?.slug === hood.slug
                  ? "bg-champagne text-midnight"
                  : "bg-midnight/80 text-stone-300 border border-stone-700 hover:border-champagne hover:text-champagne"
              }`}
            >
              {hood.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
