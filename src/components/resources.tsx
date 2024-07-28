import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "./ui/table";
import {
  useAccountClient,
  useCore,
  useResourceCounts,
  useSyncStatus,
} from "@primodiumxyz/core/react";
import {
  entityToRockName,
  formatResourceCount,
  getEntityTypeName,
} from "@primodiumxyz/core";
import { Entity } from "@primodiumxyz/reactive-tables";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Button } from "./ui/button";
import { useTxExecute } from "@/hooks/useTxExecute";
import { useEffect } from "react";
import { Progress } from "./ui/progress";

export const Resources = () => {
  const { tables, sync } = useCore();
  
  // account client contains the player account data
  const { playerAccount } = useAccountClient();

  useEffect(() => {
    // sync to ensure the client shows the correct data
    sync.syncPlayerData(playerAccount.address, playerAccount.entity);
  }, [sync, playerAccount.entity, playerAccount.address]);

  // useSyncStatus lets you know if the client is syncing to some piece of data (like player data above).
  const { loading, progress } = useSyncStatus(playerAccount.entity);

  // tables contain game state data
  const homeAsteroid = tables.Home.use(playerAccount.entity)?.value;

  if (loading) return <Progress value={progress * 100} className="w-2/3 h-6" />;
  return (
    <Card className="w-full relative overflow-y-auto col-span-5 xl:col-span-3">
      {homeAsteroid ? (
        <ResourceTable asteroidEntity={homeAsteroid as Entity} />
      ) : (
        <SpawnCard />
      )}
    </Card>
  );
};

const SpawnCard = () => {
  // execute contains all Primodium transaction functions
  const { execute } = useTxExecute();

  const handleSpawn = async () => {
    await execute({
      functionName: "Pri_11__spawn",
      args: [],
    });
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          You do not have a home asteroid.
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={handleSpawn}>Spawn</Button>
      </CardContent>
    </>
  );
};
const ResourceTable = ({ asteroidEntity }: { asteroidEntity: Entity }) => {
  // hooks make it easy to access complex parts of the game state
  const resources = useResourceCounts(asteroidEntity);

  return (
    <>
      <ScrollArea>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Your Home Planet Resources
          </CardTitle>
          <CardDescription>
            Resources on your home planet ({entityToRockName(asteroidEntity)})
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">Resource</TableHead>
                <TableHead className="">Count</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {[...resources.entries()].map(([resourceId, countData], i) => (
                <TableRow key={i}>
                  <TableCell>{getEntityTypeName(resourceId)}</TableCell>
                  <TableCell className="text-right">
                    {formatResourceCount(resourceId, countData.resourceCount)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </ScrollArea>
    </>
  );
};
