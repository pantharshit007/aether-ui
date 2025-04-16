import { ThemeProvider } from "@/components/web/theme-provide";
import { Analytics } from "@vercel/analytics/react";
import { SidebarProvider } from "@/components/web/nav/sidebar-toggle";
import { PostHogProvider } from "./posthog-provider";

function ParentProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PostHogProvider>
        <SidebarProvider defaultOpen={true}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <Analytics />
          </ThemeProvider>
        </SidebarProvider>
      </PostHogProvider>
    </>
  );
}

export default ParentProvider;
