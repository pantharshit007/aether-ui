"use client";
import React, { useState } from "react";
import { BlurEffect, FadeEffect, MouseTrailer, MouseTrailerProps } from "@/content/mouse-trailer";

interface Settings {
  trailLength: number;
  speed: number;
  blur: BlurEffect;
  fade: FadeEffect;
  useCustomImage: boolean;
  color: string;
  size: number;
  springPreset: MouseTrailerProps["springPreset"];
}

const MouseTrailerDemo: React.FC = () => {
  const [settings, setSettings] = useState<Settings>({
    trailLength: 20,
    speed: 3,
    blur: { enabled: true, intensity: 5 },
    fade: { enabled: true, startOpacity: 1, endOpacity: 0.1 },
    useCustomImage: false,
    color: "#3B82F6",
    size: 12,
    springPreset: "very-tight",
  });

  const customImage = settings.useCustomImage
    ? {
        src: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa",
        width: 200,
      }
    : undefined;

  return (
    <>
      <MouseTrailer
        trailLength={settings.trailLength}
        speed={settings.speed}
        blur={settings.blur}
        fade={settings.fade}
        customImage={customImage}
        color={settings.color}
        size={settings.size}
        springPreset={settings.springPreset}
      />
      <div className="bg-primary-foreground mx-auto my-5 max-w-md rounded-lg px-5 py-2.5 shadow-2xl">
        {/* <div className="place-items-center"> */}
        <p className="text-primary font-instrument-serif py-2 text-center text-xl tracking-wide underline">
          Configure the way you like
        </p>
        {/* </div> */}
        <div className="space-y-3 font-sans">
          <div>
            <label className="text-primary mb-1 block font-mono text-sm font-medium">
              Trail Length: {settings.trailLength}
            </label>
            <input
              type="range"
              min="1"
              max="50"
              value={settings.trailLength}
              onChange={(e) => setSettings({ ...settings, trailLength: parseInt(e.target.value) })}
              className="w-full"
            />
          </div>
          <div>
            <label className="text-primary mb-1 block font-mono text-sm font-medium">
              Speed: {settings.speed}
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={settings.speed}
              onChange={(e) => setSettings({ ...settings, speed: parseInt(e.target.value) })}
              className="w-full"
            />
          </div>
          <div>
            <label className="text-primary mb-1 block font-mono text-sm font-medium">
              Size: {settings.size}px
            </label>
            <input
              type="range"
              min="4"
              max="48"
              value={settings.size}
              onChange={(e) => setSettings({ ...settings, size: parseInt(e.target.value) })}
              className="w-full"
            />
          </div>
          <div>
            <label className="text-primary mb-1 block font-mono text-sm font-medium">Color</label>
            <input
              type="color"
              value={settings.color}
              onChange={(e) => setSettings({ ...settings, color: e.target.value })}
              className="h-8 w-full cursor-pointer rounded"
            />
          </div>
          {settings.useCustomImage && (
            <div>
              <label className="text-primary mb-1 block font-mono text-sm font-medium">
                Spring Preset
              </label>
              <select
                value={settings.springPreset as string}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    springPreset: e.target.value as Settings["springPreset"],
                  })
                }
                className="w-full rounded bg-gray-700 p-2 text-white"
              >
                <option value="very-tight">Very Tight</option>
                <option value="controlled-snap">Controlled Snap</option>
                <option value="smooth-follow">Smooth Follow</option>
                <option value="strict-controlled">Strict Controlled</option>
              </select>
            </div>
          )}
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="blur"
                checked={settings.blur.enabled}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    blur: { ...settings.blur, enabled: e.target.checked },
                  })
                }
                className="mr-2"
              />
              <label htmlFor="blur" className="text-primary font-mono text-sm">
                Blur Effect
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="fade"
                checked={settings.fade.enabled}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    fade: { ...settings.fade, enabled: e.target.checked },
                  })
                }
                className="mr-2"
              />
              <label htmlFor="fade" className="text-primary font-mono text-sm">
                Fade Effect
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="customImage"
                checked={settings.useCustomImage}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    useCustomImage: e.target.checked,
                  })
                }
                className="mr-2"
              />
              <label htmlFor="customImage" className="text-primary font-mono text-sm">
                Use Image
              </label>
            </div>
          </div>
          {settings.blur.enabled && (
            <div>
              <label className="text-primary mb-1 block font-mono text-sm font-medium">
                Blur Intensity: {settings.blur.intensity}
              </label>
              <input
                type="range"
                min="1"
                max="20"
                value={settings.blur.intensity}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    blur: { ...settings.blur, intensity: parseInt(e.target.value) },
                  })
                }
                className="w-full"
              />
            </div>
          )}
          {settings.fade.enabled && (
            <div className="space-y-2">
              <div>
                <label className="text-primary mb-1 block font-mono text-sm font-medium">
                  Start Opacity: {settings.fade.startOpacity}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={settings.fade.startOpacity}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      fade: { ...settings.fade, startOpacity: parseFloat(e.target.value) },
                    })
                  }
                  className="w-full"
                />
              </div>
              <div>
                <label className="text-primary mb-1 block font-mono text-sm font-medium">
                  End Opacity: {settings.fade.endOpacity}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={settings.fade.endOpacity}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      fade: { ...settings.fade, endOpacity: parseFloat(e.target.value) },
                    })
                  }
                  className="w-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MouseTrailerDemo;
