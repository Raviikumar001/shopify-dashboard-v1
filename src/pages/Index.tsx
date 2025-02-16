import { Stats } from "@/components/Stats";
import { CheckoutList } from "@/components/CheckoutList";
import { mockData } from "@/services/mockData";

const Index = () => {
  const pendingOrders = mockData.orders.filter(
    order => order.financial_status === "pending"
  );
  
  // Combine pending orders and abandoned checkouts
  const allAbandonedCheckouts = [
    ...pendingOrders,
    ...mockData.abandoned_checkouts
  ];

  const totalAmount = allAbandonedCheckouts.reduce(
    (sum, checkout) => sum + parseFloat(checkout.total_price),
    0
  );

  const latestCheckout = allAbandonedCheckouts.reduce(
    (latest, checkout) =>
      new Date(checkout.created_at) > new Date(latest)
        ? checkout.created_at
        : latest,
    allAbandonedCheckouts[0].created_at
  );

  const uniqueCustomers = new Set(
    allAbandonedCheckouts.map((checkout) => checkout.customer.email)
  ).size;

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 -z-10 h-full w-full grid-background" />
      
      <div className="container py-10 space-y-8 animate-fadeIn relative">
        <div className="glass-effect p-6 rounded-lg mb-8">
          <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Monitor and manage abandoned checkouts
          </p>
        </div>

        <Stats
          totalAmount={totalAmount}
          totalCheckouts={allAbandonedCheckouts.length}
          latestCheckout={latestCheckout}
          uniqueCustomers={uniqueCustomers}
        />

        <CheckoutList checkouts={allAbandonedCheckouts} />
      </div>
    </div>
  );
};

export default Index;
