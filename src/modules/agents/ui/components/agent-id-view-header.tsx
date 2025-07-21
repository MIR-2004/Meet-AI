import {
    Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb" ;
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";


interface Props {
    agentId: string;
    agentName: string;
    onEdit: () => void;
    onRemove: () => void;
}

export const AgentIdViewHeader = ({
   agentId,
   agentName,
   onEdit,
   onRemove
}: Props) => {
     return (
        <div className="flex items-center justify-between">
            <Breadcrumb>
               <BreadcrumbList>
                  <BreadcrumbItem>
                     <BreadcrumbLink asChild className="font-medium text-xl">
                        <Link href="/agents">
                           My Agents
                        </Link>
                     </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRightIcon/>
                  </BreadcrumbSeparator>
               </BreadcrumbList>
            </Breadcrumb>
        </div>
     )
}