import { db } from "@/lib/db";
import { catalogProductSelect } from "@/lib/select";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  //TODO : Add authorization check here
  const { searchParams } = new URL(req.url);
  const activeTab = searchParams.get("activeTab");

  try {
    switch (activeTab) {
      case "all":
        const products = await db.product.findMany({
          select: catalogProductSelect,
        });
        return NextResponse.json({ products }, { status: 200 });
      case "active":
        const activeProducts = await db.product.findMany({
          where: { isActive: true },
          select: catalogProductSelect,
        });
        return NextResponse.json({ products: activeProducts }, { status: 200 });
      case "featured":
        const featuredProducts = await db.product.findMany({
          where: { isFeatured: true },
          select: catalogProductSelect,
        });
        return NextResponse.json(
          { products: featuredProducts },
          { status: 200 }
        );
      case "archived":
        const archivedProducts = await db.product.findMany({
          where: { isArchived: true },
          select: catalogProductSelect
        });
        return NextResponse.json(
          { products: archivedProducts },
          { status: 200 }
        );
      default:
        return NextResponse.json(
          { message: "Invalid activeTab value" },
          { status: 400 }
        );
    }
  } catch (error) {
    return NextResponse.json("Failed to fetch products", { status: 500 });
  }
}
