import { Input } from "@/components/ui/input";
import { Search, Bell, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/mode-toggle";
import AimshalaLogo from "@/assets/logos/aimshala-light.png";
import AimshalaLogoDark from "@/assets/logos/aimshala_dark.png";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "@/components/theme-provider";

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  const { theme } = useTheme();
  const dark = theme === "dark";

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error enabling fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <header
      className={`flex h-15 items-center justify-between border-b bg-white px-[20px] dark:bg-gray-900 w-full overflow-hidden top-0 left-0 ${
        dark ? "dark" : ""
      }`}
    >
      <div className="flex items-left gap-2 lg:gap-2 md:gap-4">
        <div className="flex items-center gap-10">
          <div>
            {dark ? (
              <img
                src={AimshalaLogoDark}
                alt="aimshalaLogo"
                className="h-[34px] w-auto"
              />
            ) : (
              <img
                src={AimshalaLogo}
                alt="aimshalaLogo"
                className="h-[34px] w-auto"
              />
            )}
          </div>
          <div className="relative hidden lg:block">
            <Search className="absolute lg:left-2.5 lg:top-2.5 top-2 h-4 w-4 text-gray-600" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-[200px] pl-8 md:w-[250px] bg-[#F3F3F8] rounded-[4px] h-[38px] border-0"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center lg:gap-3 gap-6">
        <Button variant="outline" size="icon" onClick={toggleFullScreen}>
          <Maximize className="h-5 w-5 border-0 text-gray-400" />
        </Button>
        <Search className="h-5 w-5 border-0 text-gray-400 block lg:hidden" />
        <ModeToggle />
        <div className="relative">
          <div className="w-4 h-4 py-0.5 rounded-full bg-[#FF7F41] text-white text-[8px] text-center absolute -top-2 -right-1">
            3
          </div>
          <Button variant="outline">
            <Bell className=" text-gray-400" />
          </Button>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center h-full md:pt-4  md:pb-4  md:px-5 p-0 rounded-0"
            >
              <Avatar className="md:h-8 md:w-8">
                <AvatarImage
                  src="https://github.com/leerob.png"
                  alt="@evilrabbit"
                />
              </Avatar>
              <div>
                <span className="hidden md:block text-[14px]">Anna Adame</span>
                <span className="hidden md:block text-left text-gray-400 font-light">
                  Founder
                </span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-2" align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
