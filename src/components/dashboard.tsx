import { useSyncStatus } from "@primodiumxyz/core/react";
import { Progress } from "./ui/progress";
import { ModeToggle } from "./mode-toggle";
import { Information } from "./information";
import { Resources } from "./resources";
import { Logout } from "./logout";
import { Escrow } from "./Escrow";

export const Dashboard = () => {
  // use sync status lets you know if the client is syncing.
  const { loading, progress } = useSyncStatus();
  
  if (loading) {
    return <Progress value={progress * 100} className="w-2/3 h-6" />;
  }

  return (
    <div className="w-full max-w-screen-xl m-auto p-2 xl:p-10 flex flex-col gap-2 xl:h-4/5 overflow-hidden scrollbar">
      <div className="flex gap-2 items-end">
        <ModeToggle />
        <Logout />
      </div>
      <Escrow />
    </div>
  );
};
