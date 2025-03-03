export const mockData = {
  orders: [
    {
      id: 1,
      email: "john.doe@example.com",
      created_at: "2023-10-01T12:00:00Z",
      updated_at: "2023-10-01T12:30:00Z",
      total_price: "50.00",
      financial_status: "paid",
      line_items: [
        {
          id: 101,
          title: "Blue T-Shirt",
          quantity: 2,
          price: "25.00",
          sku: "TSHIRT-BLUE",
          variant_id: 201,
          vendor: "Fashion Co."
        }
      ],
      customer: {
        id: 301,
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@example.com",
        phone: "+1234567890"
      },
      shipping_address: {
        address1: "123 Main St",
        city: "New York",
        province: "NY",
        country: "USA",
        zip: "10001"
      },
      abandoned_checkout_url: null
    },
    {
      id: 2,
      email: "jane.smith@example.com",
      created_at: "2023-10-02T14:00:00Z",
      updated_at: "2023-10-02T14:15:00Z",
      total_price: "75.00",
      financial_status: "pending",
      line_items: [
        {
          id: 102,
          title: "Red Sneakers",
          quantity: 1,
          price: "75.00",
          sku: "SNEAKERS-RED",
          variant_id: 202,
          vendor: "Shoe Co."
        }
      ],
      customer: {
        id: 302,
        first_name: "Jane",
        last_name: "Smith",
        email: "jane.smith@example.com",
        phone: "+0987654321"
      },
      shipping_address: null,
      abandoned_checkout_url: "https://checkout.shopify.com/123456"
    }
  ],
  abandoned_checkouts: [
    {
      id: 1001,
      email: "alice.johnson@example.com",
      created_at: "2023-10-03T10:00:00Z",
      updated_at: "2023-10-03T10:05:00Z",
      total_price: "120.00",
      line_items: [
        {
          id: 103,
          title: "Black Jeans",
          quantity: 1,
          price: "60.00",
          sku: "JEANS-BLACK",
          variant_id: 203,
          vendor: "Denim Co."
        },
        {
          id: 104,
          title: "White Hat",
          quantity: 1,
          price: "60.00",
          sku: "HAT-WHITE",
          variant_id: 204,
          vendor: "Accessories Co."
        }
      ],
      customer: {
        id: 303,
        first_name: "Alice",
        last_name: "Johnson",
        email: "alice.johnson@example.com",
        phone: "+1122334455"
      },
      shipping_address: null,
      abandoned_checkout_url: "https://checkout.shopify.com/654321"
    }
  ]
};

export type MockData = typeof mockData;
export type Order = MockData["orders"][0];
export type AbandonedCheckout = MockData["abandoned_checkouts"][0];
