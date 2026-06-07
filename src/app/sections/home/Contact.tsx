import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";

export const runtime = "nodejs";

type Body = {
  name?: string;
  email?: string;
  business?: string;
  industry?: string;
  website?: string;
  message?: string;
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;
    const { name, email, business, industry, website, message } = body;

    if (!name || !email || !business || !industry || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!to || !from) {
      return NextResponse.json(
        { error: "Server not configured" },
        { status: 500 }
      );
    }

    const html = `
      <div style="font-family: -apple-system, sans-serif; max-width: 600px; padding: 24px; color: #111;">
        <h2 style="margin: 0 0 16px;">New enquiry from scaleseo.co</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding:8px 0; color:#666; width:140px;">Name</td><td>${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px 0; color:#666;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:8px 0; color:#666;">Business</td><td>${escapeHtml(business)}</td></tr>
          <tr><td style="padding:8px 0; color:#666;">Industry</td><td>${escapeHtml(industry)}</td></tr>
          <tr><td style="padding:8px 0; color:#666;">Website</td><td>${website ? `<a href="${escapeHtml(website)}">${escapeHtml(website)}</a>` : "—"}</td></tr>
        </table>
        <h3 style="margin: 24px 0 8px;">Message</h3>
        <div style="white-space: pre-wrap; background: #f6f6f6; padding: 16px; border-radius: 6px;">${escapeHtml(message)}</div>
      </div>
    `;

    const resend = getResend();
    const result = await resend.emails.send({
      from: `Scale SEO Enquiries <${from}>`,
      to: [to],
      replyTo: email,
      subject: `New enquiry — ${business}`,
      html,
    });

    if (result.error) {
      return NextResponse.json({ error: result.error.message }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
