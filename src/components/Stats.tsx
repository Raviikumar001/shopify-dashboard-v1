
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import {
  ShoppingCart,
  DollarSign,
  Clock,
  UserIcon,
} from "lucide-react";

type StatsProps = {
  totalAmount: number;
  totalCheckouts: number;
  latestCheckout: string;
  uniqueCustomers: number;
  className?: string;
};

export function Stats({
  totalAmount,
  totalCheckouts,
  latestCheckout,
  uniqueCustomers,
  className,
}: StatsProps) {
  const stats = [
    {
      name: "Total Abandoned Value",
      value: `$${totalAmount.toFixed(2)}`,
      icon: DollarSign,
      description: "Total value of abandoned carts",
    },
    {
      name: "Abandoned Checkouts",
      value: totalCheckouts,
      icon: ShoppingCart,
      description: "Number of abandoned carts",
    },
    {
      name: "Latest Abandonment",
      value: formatDistanceToNow(new Date(latestCheckout), { addSuffix: true }),
      icon: Clock,
      description: "Most recent cart abandonment",
    },
    {
      name: "Unique Customers",
      value: uniqueCustomers,
      icon: UserIcon,
      description: "Number of customers who abandoned carts",
    },
  ];

  return (
    <div className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-4", className)}>
      {stats.map((stat) => (
        <Card
          key={stat.name}
          className="glass-card p-6 transition-transform duration-300 hover:scale-102 hover:shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <stat.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {stat.name}
              </p>
              <h3 className="text-2xl font-bold tracking-tight">
                {stat.value}
              </h3>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            {stat.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
