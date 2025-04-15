"use client";
import { BlurTrailer } from "@/content/blurtrailer";
import React, { useState } from "react";
import { Settings2 } from "lucide-react";
function Page() {
  const [settings, setSettings] = useState({
    trailLength: 20,
    speed: 3,
    blur: {
      enabled: true,
      intensity: 5,
    },
    fade: {
      enabled: true,
      startOpacity: 1,
      endOpacity: 0.1,
    },
    useCustomImage: false,
    color: "#3B82F6",
    size: 12,
  });

  const customImage = settings.useCustomImage
    ? {
        src: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=50&h=50&q=80&auto=format",
        width: 20,
        height: 20,
      }
    : undefined;

  return (
    <div className="min-h-screen bg-gray-900">
      <BlurTrailer
        trailLength={settings.trailLength}
        speed={settings.speed}
        blur={settings.blur}
        fade={settings.fade}
        customImage={customImage}
        color={settings.color}
        size={settings.size}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">Mouse Trailer Demo</h1>
          <p className="text-gray-400">Move your mouse around to see the effect!</p>
        </div>

        <div className="mx-auto max-w-md rounded-lg bg-gray-800 p-6 shadow-lg">
          <div className="mb-6 flex items-center gap-2">
            <Settings2 className="h-6 w-6 text-blue-400" />
            <h2 className="text-xl font-semibold text-white">Settings</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-300">
                Trail Length: {settings.trailLength}
              </label>
              <input
                type="range"
                min="1"
                max="50"
                value={settings.trailLength}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    trailLength: parseInt(e.target.value),
                  }))
                }
                className="w-full"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-300">
                Speed: {settings.speed}
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={settings.speed}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    speed: parseInt(e.target.value),
                  }))
                }
                className="w-full"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-300">
                Size: {settings.size}px
              </label>
              <input
                type="range"
                min="4"
                max="48"
                value={settings.size}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    size: parseInt(e.target.value),
                  }))
                }
                className="w-full"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-300">Color</label>
              <input
                type="color"
                value={settings.color}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    color: e.target.value,
                  }))
                }
                className="h-8 w-full cursor-pointer rounded"
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="blur"
                  checked={settings.blur.enabled}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      blur: { ...prev.blur, enabled: e.target.checked },
                    }))
                  }
                  className="mr-2"
                />
                <label htmlFor="blur" className="text-sm text-gray-300">
                  Blur Effect
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="fade"
                  checked={settings.fade.enabled}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      fade: { ...prev.fade, enabled: e.target.checked },
                    }))
                  }
                  className="mr-2"
                />
                <label htmlFor="fade" className="text-sm text-gray-300">
                  Fade Effect
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="customImage"
                  checked={settings.useCustomImage}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      useCustomImage: e.target.checked,
                    }))
                  }
                  className="mr-2"
                />
                <label htmlFor="customImage" className="text-sm text-gray-300">
                  Use Image
                </label>
              </div>
            </div>

            {settings.blur.enabled && (
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-300">
                  Blur Intensity: {settings.blur.intensity}
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={settings.blur.intensity}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      blur: { ...prev.blur, intensity: parseInt(e.target.value) },
                    }))
                  }
                  className="w-full"
                />
              </div>
            )}

            {settings.fade.enabled && (
              <div className="space-y-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-300">
                    Start Opacity: {settings.fade.startOpacity}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={settings.fade.startOpacity}
                    onChange={(e) =>
                      setSettings((prev) => ({
                        ...prev,
                        fade: { ...prev.fade, startOpacity: parseFloat(e.target.value) },
                      }))
                    }
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-300">
                    End Opacity: {settings.fade.endOpacity}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={settings.fade.endOpacity}
                    onChange={(e) =>
                      setSettings((prev) => ({
                        ...prev,
                        fade: { ...prev.fade, endOpacity: parseFloat(e.target.value) },
                      }))
                    }
                    className="w-full"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
