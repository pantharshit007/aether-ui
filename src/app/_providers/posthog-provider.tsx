"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";
import dynamicLoader from "next/dynamic";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "";

/**
 * Dynamic import of PostHog page view component with client-side only rendering.
 * Uses Next.js dynamic import to lazy load the PostHog tracking functionality.
 *
 * @remarks
 * The component is loaded with SSR disabled to ensure PostHog tracking only runs on the client side.
 */
const SuspendedPostHogPageView = dynamicLoader(() => import("./posthog-pageview"), { ssr: false });

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(POSTHOG_KEY, {
      api_host: "/ingest",
      ui_host: "https://us.posthog.com",
      person_profiles: "never", // or 'always' to create profiles for anonymous users as well
      capture_pageview: false,
    });
  }, []);

  return (
    <PHProvider client={posthog}>
      <SuspendedPostHogPageView />
      {children}
    </PHProvider>
  );
}
