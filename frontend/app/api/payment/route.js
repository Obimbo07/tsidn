// import stripe from "@/lib/stripe";
// import prisma from "@/lib/prisma";

// export async function POST(req) {
//   const { userId, subscriptionType } = await req.json();

//   const prices = {
//     MONTHLY: 1000,
//     YEARLY: 10000,
//   };

//   if (!prices[subscriptionType]) {
//     return new Response("Invalid subscription type", { status: 400 });
//   }

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     line_items: [
//       {
//         price_data: {
//           currency: "usd",
//           product_data: {
//             name: subscriptionType + " Subscription",
//           },
//           unit_amount: prices[subscriptionType],
//         },
//         quantity: 1,
//       },
//     ],
//     mode: "subscription",
//     success_url: `${process.env.NEXTAUTH_URL}/success`,
//     cancel_url: `${process.env.NEXTAUTH_URL}/cancel`,
//   });

//   return new Response(JSON.stringify({ url: session.url }));
// }
