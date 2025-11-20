import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { User, Building2 } from "lucide-react";

export function TopNav() {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex items-center gap-4">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="flex items-center gap-0.5">
            <User className="h-4" />
            <span className="text-sm font-medium">Help us improve</span>
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="flex items-center gap-0.5">
            <Building2 className="h-4" />
            <span className="text-sm font-medium">
              Request enterprise white-label
            </span>
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>
        <NavigationMenu.Indicator />
      </NavigationMenu.List>

      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  );
}
