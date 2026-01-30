"use client";
import {useEffect, useRef} from "react";

const useTradingViewWidget = (scriptUrl: string, config: Record<string, unknown>, height = 600) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        // Check if loaded a widget
        if (containerRef.current.dataset.loaded) return;
        // Clear inner HTML
        containerRef.current.innerHTML = `<div class="tradingview-widget-container__widget" style="width: 100%; height: ${height}px;"></div>`;

        // Found in TradingView widget documentation
        const script = document.createElement("script");
        // scriptUrl is dynamic since varies from widget to widget
        script.src = scriptUrl;
        script.async = true;
        script.innerHTML = JSON.stringify(config);

        containerRef.current.appendChild(script);
        containerRef.current.dataset.loaded = "true";

        return () => {
            if (containerRef.current){
                containerRef.current.innerHTML = "";
                delete containerRef.current.dataset.loaded;
            }
        };
    }, [scriptUrl, config, height]);

    return containerRef;
};
export default useTradingViewWidget;