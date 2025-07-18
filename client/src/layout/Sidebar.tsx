import * as React from "react";
import {
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

import {
  Sidebar as SidebarRoot,
  SidebarContent,
  SidebarInset,
  SidebarRail,
  SidebarTrigger,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SidebarData } from "@/constants/sidebarContents";
import { Link } from "react-router-dom";

export default function SidebarLayout() {
  return (
    <div>
      <AppSidebar />
      <SidebarInset className="hidden md:block">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-10" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
          </div>
        </header>
      </SidebarInset>
    </div>
  );
}

function AppSidebar(props: React.ComponentProps<typeof SidebarRoot>) {
  return (
    <SidebarRoot collapsible="icon" {...props} className="fixed top-15 h-[calc(100vh-60px)]">
      <SidebarContent className="bg-[var(--background)]">
        {SidebarData.sections.map((section) => (
          <NavSection key={section.title} section={section} />
        ))}
      </SidebarContent>
      <SidebarRail />
    </SidebarRoot>
  );
}

function NavSection({
  section,
}: {
  section: {
    title: string;
    isHeading: boolean;
    items: {
      title: string;
      url: string;
      icon?: LucideIcon;
      isActive?: boolean;
      isCollapsible?: boolean;
      items?: {
        title: string;
        url: string;
        icon?: LucideIcon;
      }[];
    }[];
  };
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-[var(--text)] font-semibold text-sm uppercase tracking-wide mb-2">
        {section.title}
      </SidebarGroupLabel>
      <SidebarMenu>
        {section.items.map((item) =>
          item.isCollapsible && item.items ? (
            // Render collapsible menu if the item has sub-items
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible text-[var(--text)]"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title} className="text-[var(--text)]">
                    {item.icon && <item.icon className="size-4 text-[var(--text)]" />}
                    <span className="text-[var(--text)]">{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 text-[var(--text)]" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title} className="text-[var(--text)]">
                        <SidebarMenuSubButton asChild>
                          <Link to={subItem.url}>
                            {subItem.icon && <subItem.icon className="size-4 text-[var(--text)]" />}
                            <span className="text-[var(--text)]">{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ) : (
            // Render simple link if the item has no sub-items
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title} asChild className="text-[var(--text)]">
                <Link to={item.url}>
                  {item.icon && <item.icon className="size-4 text-[var(--text)]" />}
                  <span className="text-[var(--text)]">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
}

