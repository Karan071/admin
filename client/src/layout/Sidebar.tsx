import * as React from "react";
import {
  ChevronRight,
  ChevronsUpDown,
  type LucideIcon,
} from "lucide-react";

import {
  Sidebar as SidebarRoot,
  SidebarContent,
  SidebarHeader,
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
  useSidebar,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { SidebarData } from "@/constants/sidebarContents";


export default function SidebarLayout() {
  return (
    <div>
      <AppSidebar />
      <SidebarInset >
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
  const [activeTeam, setActiveTeam] = React.useState(SidebarData.teams[0]);

  return (
    <SidebarRoot collapsible="icon" {...props} className="fixed top-15 h-[calc(100vh-60px)] " >
      <SidebarHeader className="bg-[var(--background)]">
        <TeamSwitcher teams={SidebarData.teams} onTeamChange={setActiveTeam} />
      </SidebarHeader>
      <SidebarContent className="bg-[var(--background)]">
        <NavMain items={activeTeam.navMain} />
      </SidebarContent>
      <SidebarRail />
    </SidebarRoot>
  );
}

function TeamSwitcher({
  teams,
  onTeamChange,
}: {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
    navMain?: any[];
  }[];
  onTeamChange: (team: any) => void;
}) {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);

  const handleTeamChange = (team: any) => {
    setActiveTeam(team);
    onTeamChange(team);
  };

  if (!activeTeam) return null;

  return (
    <SidebarMenu >
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-[var(--brand-color)] dark:bg-white text-white dark:text-[var(--brand-color)] flex aspect-square size-8 items-center justify-center rounded-lg b">
                <activeTeam.logo className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium text-[var(--text-head)]">{activeTeam.name}</span>
                <span className="truncate text-xs text-[var(--text)]">{activeTeam.plan}</span>
              </div>
              <ChevronsUpDown className="ml-auto text-[var(--text)]" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg text-[var(--text)] "
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs">
              Desks
            </DropdownMenuLabel>
            {teams.map((team, index) => (
              <DropdownMenuItem
                key={team.name}
                onClick={() => handleTeamChange(team)}
                className="gap-2 p-2 focus:bg-[var(--faded)]"
              >
                <div className="flex size-6 items-center justify-center rounded-md border">
                  <team.logo className="size-3.5 shrink-0 text-[var(--text)]" />
                </div>
                {team.name}
                <DropdownMenuShortcut className="text-[var(--text)]">⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) =>
          item.items ? (
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
                          <a href={subItem.url}>
                            <span className="text-[var(--text)]">{subItem.title}</span>
                          </a>
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
                <a href={item.url}>
                  {item.icon && <item.icon className="size-4 text-[var(--text)]" />}
                  <span className="text-[var(--text)]">{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
}

