import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    const secret = request.nextUrl.searchParams.get("secret");

    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
    }

    const body = await request.json();
    const { _type, slug } = body;

    // Revalidate based on content type
    switch (_type) {
      case "property":
        revalidatePath("/properties");
        if (slug?.current) revalidatePath(`/properties/${slug.current}`);
        revalidatePath("/"); // Featured properties on homepage
        break;
      case "neighborhood":
        revalidatePath("/neighborhoods");
        if (slug?.current) revalidatePath(`/neighborhoods/${slug.current}`);
        revalidatePath("/"); // Neighborhood preview on homepage
        break;
      case "blogPost":
        revalidatePath("/blog");
        if (slug?.current) revalidatePath(`/blog/${slug.current}`);
        revalidatePath("/"); // Blog preview on homepage
        break;
      case "testimonial":
        revalidatePath("/testimonials");
        revalidatePath("/"); // Testimonials ribbon on homepage
        break;
      case "pressItem":
        revalidatePath("/media");
        revalidatePath("/media/press");
        break;
      case "podcastEpisode":
        revalidatePath("/media");
        revalidatePath("/media/podcast");
        break;
      case "video":
        revalidatePath("/media");
        revalidatePath("/media/video");
        break;
      case "saleRecord":
        revalidatePath("/sell");
        break;
      default:
        revalidatePath("/");
    }

    return NextResponse.json({ revalidated: true, type: _type });
  } catch {
    return NextResponse.json(
      { error: "Revalidation failed" },
      { status: 500 }
    );
  }
}
