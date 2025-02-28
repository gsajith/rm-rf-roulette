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
