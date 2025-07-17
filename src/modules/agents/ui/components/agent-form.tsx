import { z } from "zod";
import { AgentGetOne } from "../../types";
import { useTRPC } from "@/trpc/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { agentsInsertSchema } from "../../schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import {GeneratedAvatar} from "@/components/generated-avatar";


interface AgentFormProps { 
    onSuccess?: () => void;
    onCancel?: () => void;
    initialValues?: AgentGetOne;
    
};

export const AgentForm = ({ 
     onSuccess,
     onCancel, 
     initialValues 
    }: AgentFormProps) => {
    const trpc = useTRPC();
    const router = useRouter();
    const queryClient = useQueryClient();

    const createAgent = useMutation(
        trpc.agents.create.mutationOptions({
            onSuccess: () => {},
            onError: () => {}, 
        }),
    );

    const form = useForm<z.infer<typeof agentsInsertSchema>>({
        resolver: zodResolver(agentsInsertSchema),
        defaultValues: {
            name: initialValues?.name ?? "",
            instructions: initialValues?.name ?? "",
        }
    });

    const isEdit = !!initialValues?.id;
    const isPending = createAgent.isPending;

    const onSubmit = (values: z.infer<typeof agentsInsertSchema>) => {
        if ( isEdit ) {
            console.log("TODO: update agent")
        } else {
            createAgent.mutate(values);
        }
    };

    return (
        <Form { ...form}>
            <form className = "space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
             <GeneratedAvatar
             seed={form.watch("name")}
             className="border size-16"
             variant ="botttsNeutral"
             />

             <FormField
             name="name"
             control={form.control}
             render={({ field }) => (
                <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Input { ...field } />
                    </FormControl>
                </FormItem>
                )}
             />
            </form>
        </Form>
    );
}