import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  try {
    const products = await db.product.findMany({
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
