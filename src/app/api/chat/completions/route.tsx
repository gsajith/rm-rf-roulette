/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";

// Handler for GET requests
export async function GET(request: NextRequest) {
  console.log("--- GET Request Received ---");
  console.log("URL:", request.url);
  console.log("Headers:", Object.fromEntries(request.headers));
  console.log("Request:", request);

  return NextResponse.json({ message: "GET request logged" });
}

export async function OPTIONS(request: Request) {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

// Handler for POST requests
export async function POST(request: NextRequest) {
  console.log("--- POST Request Received ---");
  console.log("URL:", request.url);
  console.log("Headers:", Object.fromEntries(request.headers));
  console.log("Request:", request);

  // Log request body if it exists
  try {
    const body = await request.json();
    console.log("BODY: ", body);
    if (body.messages) {
      const system = body.messages.find(
        (message: { role: string }) => message.role === "system"
      );
      const user = body.messages.find(
        (message: { role: string }) => message.role === "user"
      );
      if (system && user) {
        console.log("System:", system.content);
        console.log("User:", user.content);

        if (user.content === "Testing. Just say hi and nothing else.") {
          return NextResponse.json({ message: "hi" });
        } else if (user.content === "Test prompt using gpt-3.5-turbo") {
          const jsonBody = {
            id: "chatcmpl-B626btJqv7jXSxVrnlbqvapMUR4OP",
            object: "chat.completion",
            created: Math.trunc(Date.now() / 1000) + 3000,
            model: "gpt-4o-mini-2024-07-18",
            choices: [
              {
                index: 0,
                message: {
                  role: "assistant",
                  content: "Sure! If you want to test a prompt using",
                  refusal: null,
                },
                logprobs: null,
                finish_reason: "length",
              },
            ],
            usage: {
              prompt_tokens: 28,
              completion_tokens: 10,
              total_tokens: 28,
              prompt_tokens_details: {
                cached_tokens: 0,
                audio_tokens: 0,
              },
              completion_tokens_details: {
                reasoning_tokens: 0,
                audio_tokens: 0,
                accepted_prediction_tokens: 0,
                rejected_prediction_tokens: 0,
              },
            },
            service_tier: "default",
            system_fingerprint: "fp_06737a9306",
          };

          const response = new Response(JSON.stringify(jsonBody, null, "  "));

          // Remove the vary header if it exists
          response.headers.delete("vary");

          // Set standard headers
          response.headers.set("content-type", "application/json");
          response.headers.set("access-control-expose-headers", "X-Request-ID");
          response.headers.set(
            "openai-organization",
            "user-m5zczkgcn5tupibsb6oyfhxp"
          );
          // Dynamic timestamp for processing
          const processingTime = Math.floor(Math.random() * 500) + 1000; // Random time between 100-600ms
          response.headers.set(
            "openai-processing-ms",
            processingTime.toString()
          );
          response.headers.set("openai-version", "2020-10-01");
          response.headers.set("x-ratelimit-limit-requests", "10000");
          response.headers.set("x-ratelimit-limit-tokens", "200000");
          response.headers.set("x-ratelimit-remaining-requests", "9999");
          response.headers.set("x-ratelimit-remaining-tokens", "29968");
          response.headers.set(
            "x-ratelimit-reset-requests",
            `${Math.floor(Math.random() * 500)}ms`
          );
          response.headers.set("x-ratelimit-reset-tokens", "38ms");
          // Dynamic request ID
          const requestId = `req_${Array.from({ length: 32 }, () =>
            Math.floor(Math.random() * 16).toString(16)
          ).join("")}`;
          response.headers.set("x-request-id", requestId);
          response.headers.set(
            "strict-transport-security",
            "max-age=31536000; includeSubDomains; preload"
          );
          response.headers.set("cf-cache-status", "DYNAMIC");
          response.headers.set("x-content-type-options", "nosniff");
          response.headers.set("server", "cloudflare");
          response.headers.set(
            "cf-ray",
            `${Array.from({ length: 16 }, () =>
              Math.floor(Math.random() * 16).toString(16)
            ).join("")}-EWR`
          );
          response.headers.set("alt-svc", 'h3=":443"; ma=86400');

          // Set cookie headers - Next.js handles this differently than showing multiple set-cookie headers
          response.headers.set(
            "set-cookie",
            "__cf_bm=tV4gMfLwzZwUopVbspgfOXGAzEbiCzhmBhVRsF0qHzE-1740776599-1.0.1.1-owSB8SjirauLP_C0ggDxaRejY4iBB4j5G2aomlVaEW3U.W1UAHZVd_.ij_SKIRx0V74dVwauaijkIzyhYXjQVGF3ZJ8VYbhM.sxouxKGixM; path=/; expires=Fri, 28-Feb-25 21:33:19 GMT; domain=.api.openai.com; HttpOnly; Secure; SameSite=None, _cfuvid=rTVsn9RReD0HvoaLKjFznEIA1m11z0AB9.w.YUbhOMc-1740776599667-0.0.1.1-604800000; path=/; domain=.api.openai.com; HttpOnly; Secure; SameSite=None"
          );

          console.log("=== Response ===");
          console.log(`Status: ${response.status}`);
          console.log("Response Headers:", response.headers);
          return response;
        }
      }
    }
  } catch (e) {
    console.log("No JSON body or parsing error");
  }

  return NextResponse.json({ message: "POST request logged" });
}

// Create similar handlers for other common HTTP methods
export async function PUT(request: NextRequest) {
  console.log("--- PUT Request Received ---");
  console.log("URL:", request.url);
  console.log("Headers:", Object.fromEntries(request.headers));
  console.log("Request:", request);

  // Log request body if it exists
  try {
    const body = await request.json();
    console.log("Body:", body);
  } catch (e) {
    console.log("No JSON body or parsing error");
  }

  return NextResponse.json({ message: "PUT request logged" });
}

export async function DELETE(request: NextRequest) {
  console.log("--- DELETE Request Received ---");
  console.log("URL:", request.url);
  console.log("Headers:", Object.fromEntries(request.headers));
  console.log("Request:", request);

  // Log request body if it exists
  try {
    const body = await request.json();
    console.log("Body:", body);
  } catch (e) {
    console.log("No JSON body or parsing error");
  }

  return NextResponse.json({ message: "DELETE request logged" });
}
