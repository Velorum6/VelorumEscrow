import { Button } from "@/components/ui/button";
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
import { ScrollArea } from "./ui/scroll-area";
import { useWriteContract, useChainId } from 'wagmi';
import { abi } from "./ABI/IVelorumEsc9.json";
import { useState } from "react";

type CardProps = React.ComponentProps<typeof Card>;

export function Escrow({ }: CardProps) {
    const chainId = useChainId()
    const { writeContractAsync } = useWriteContract()
    const [newAgreementId, setNewAgreementId] = useState('');
    const [newAgreementAmount, setNewAgreementAmount] = useState('');
    const [newAgreementBob, setNewAgreementBob] = useState('');
    const [newAgreementAlice, setNewAgreementAlice] = useState('');
    const [depositId, setDepositId] = useState('');
    const [depositValue, setDepositValue] = useState('');

    const handleAgreement = () => {
    
        console.log("Agreement was clicked!")
        console.log(newAgreementId)
        };
    
    const handleDeposit = async () => {
        console.log("Deposit was clicked!")
        
        const result = await writeContractAsync({ 
            abi,
            address: '0x1b541ec9cbe3ef02461c50d0b52a486d19f34c15',
            functionName: 'velorumEsc9__deposit',
            args: [ depositId, ],
            value: BigInt(depositValue),
            chainId: chainId,
         })
        
        console.log(result);
        }; 
    
    const handleRefund = () => {
          console.log("Refund was clicked!")
        };
    
    const handleComplete = () => {
            console.log("Complete was clicked!")
        };

    return (
    <>
      <ScrollArea>
        <CardHeader>
          <CardTitle className=" w-full flex items-center gap-2">
            Agreements
          </CardTitle>
          <CardDescription>
            Agreements made by players
          </CardDescription>
          <Button>
            New Agreement
          </Button>
        </CardHeader>

        <CardContent>
          <Table className="w-full" >
            <TableHeader>
              <TableRow>
                
                <TableHead className="">Id</TableHead>
                <TableHead className="">Bob</TableHead>
                <TableHead className="">Alice</TableHead>
                <TableHead className="">Arbitrator</TableHead>
                <TableHead className="">Amount</TableHead>

              </TableRow>
            </TableHeader>

            <TableBody>
              
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Pedrito</TableCell>
                    <TableCell>Laura</TableCell>
                    <TableCell>Pepe</TableCell>
                    <TableCell>800</TableCell>
                    <TableCell><Button>Deposit</Button></TableCell>
                    <TableCell><Button>Refund</Button></TableCell>
                    <TableCell><Button>Complete</Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Pedrito</TableCell>
                    <TableCell>Laura</TableCell>
                    <TableCell>Pepe</TableCell>
                    <TableCell>800</TableCell>
                    <TableCell><Button>Deposit</Button></TableCell>
                    <TableCell><Button>Refund</Button></TableCell>
                    <TableCell><Button>Complete</Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Pedrito</TableCell>
                    <TableCell>Laura</TableCell>
                    <TableCell>Pepe</TableCell>
                    <TableCell>800</TableCell>
                    <TableCell><Button>Deposit</Button></TableCell>
                    <TableCell><Button>Refund</Button></TableCell>
                    <TableCell><Button>Complete</Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Pedrito</TableCell>
                    <TableCell>Laura</TableCell>
                    <TableCell>Pepe</TableCell>
                    <TableCell>800</TableCell>
                    <TableCell><Button>Deposit</Button></TableCell>
                    <TableCell><Button>Refund</Button></TableCell>
                    <TableCell><Button>Complete</Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Pedrito</TableCell>
                    <TableCell>Laura</TableCell>
                    <TableCell>Pepe</TableCell>
                    <TableCell>800</TableCell>
                    <TableCell><Button>Deposit</Button></TableCell>
                    <TableCell><Button>Refund</Button></TableCell>
                    <TableCell><Button>Complete</Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Pedrito</TableCell>
                    <TableCell>Laura</TableCell>
                    <TableCell>Pepe</TableCell>
                    <TableCell>800</TableCell>
                    <TableCell><Button>Deposit</Button></TableCell>
                    <TableCell><Button>Refund</Button></TableCell>
                    <TableCell><Button>Complete</Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Pedrito</TableCell>
                    <TableCell>Laura</TableCell>
                    <TableCell>Pepe</TableCell>
                    <TableCell>800</TableCell>
                    <TableCell><Button>Deposit</Button></TableCell>
                    <TableCell><Button>Refund</Button></TableCell>
                    <TableCell><Button>Complete</Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Pedrito</TableCell>
                    <TableCell>Laura</TableCell>
                    <TableCell>Pepe</TableCell>
                    <TableCell>800</TableCell>
                    <TableCell><Button>Deposit</Button></TableCell>
                    <TableCell><Button>Refund</Button></TableCell>
                    <TableCell><Button>Complete</Button></TableCell>
                </TableRow>

            </TableBody>
          </Table>

        </CardContent>
      
      </ScrollArea>
    </>
    )
}
