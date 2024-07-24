import { db } from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const products = await db.product.findMany({
      where: { isFeatured: true },
      select: {
        id: true,
        name: true,
        price: true,
        imageUrls: {
          select: {
            url: true,
            type: true,
          },
        },
      },
    });
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    return NextResponse.json("Failed to fetch products", { status: 500 });
  }
}
