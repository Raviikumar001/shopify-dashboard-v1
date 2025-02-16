
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { AbandonedCheckout } from "@/services/mockData";
import { format } from "date-fns";
import { ExternalLink } from "lucide-react";

type CheckoutListProps = {
  checkouts: AbandonedCheckout[];
  className?: string;
};

export function CheckoutList({ checkouts, className }: CheckoutListProps) {
  return (
    <Card className={cn("glass-card overflow-hidden", className)}>
      <div className="p-6 border-b border-white/20">
        <h2 className="text-2xl font-bold tracking-tight">Abandoned Checkouts</h2>
        <p className="text-sm text-muted-foreground mt-2">
          A list of all abandoned checkouts and their details.
        </p>
      </div>
      <div className="glass-effect">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-white/10">
              <TableHead>Customer</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total Value</TableHead>
              <TableHead>Abandoned Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {checkouts.map((checkout) => (
              <TableRow
                key={checkout.id}
                className="transition-colors hover:bg-white/10 animate-fadeIn"
              >
                <TableCell>
                  <div className="font-medium">
                    {checkout.customer.first_name} {checkout.customer.last_name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {checkout.customer.email}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="max-w-[300px]">
                    {checkout.line_items.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between text-sm mb-1"
                      >
                        <span>{item.title}</span>
                        <span className="text-muted-foreground">
                         ( x{item.quantity})
                        </span>
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  ${parseFloat(checkout.total_price).toFixed(2)}
                </TableCell>
                <TableCell>
                  {format(new Date(checkout.created_at), "PPP")}
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:text-primary hover:bg-white/20"
                  >
                    <a
                      href={checkout.abandoned_checkout_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Open checkout</span>
                    </a>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
