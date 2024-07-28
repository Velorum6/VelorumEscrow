import { DoorOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Card } from "./ui/card";
import { useDisconnect } from "wagmi";

export function Logout() {
  const { disconnect } = useDisconnect();

  return (
    <Card>
      <Button variant="outline" size="icon" onClick={() => disconnect()}>
        <DoorOpen className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </Card>
  );
}
