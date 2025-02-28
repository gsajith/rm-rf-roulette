/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";

// Handler for GET requests
export async function GET(request: NextRequest) {
  console.log("--- GET Request Received ---");
  console.log("URL:", request.url);
  console.log("Headers:", Object.fromEntries(request.headers));
  console.log("Request:", request);

  return NextResponse.json({
    object: "list",
    data: [
      {
        id: "gpt-4.5-preview",
        object: "model",
        created: 1740623059,
        owned_by: "system",
      },
      {
        id: "omni-moderation-2024-09-26",
        object: "model",
        created: 1732734466,
        owned_by: "system",
      },
      {
        id: "gpt-4.5-preview-2025-02-27",
        object: "model",
        created: 1740623304,
        owned_by: "system",
      },
      {
        id: "gpt-4o-mini-audio-preview-2024-12-17",
        object: "model",
        created: 1734115920,
        owned_by: "system",
      },
      {
        id: "dall-e-3",
        object: "model",
        created: 1698785189,
        owned_by: "system",
      },
      {
        id: "dall-e-2",
        object: "model",
        created: 1698798177,
        owned_by: "system",
      },
      {
        id: "gpt-4o-audio-preview-2024-10-01",
        object: "model",
        created: 1727389042,
        owned_by: "system",
      },
      {
        id: "gpt-4o-audio-preview",
        object: "model",
        created: 1727460443,
        owned_by: "system",
      },
      {
        id: "gpt-4o-mini-realtime-preview-2024-12-17",
        object: "model",
        created: 1734112601,
        owned_by: "system",
      },
      {
        id: "gpt-4o-mini-realtime-preview",
        object: "model",
        created: 1734387380,
        owned_by: "system",
      },
      {
        id: "o1-mini-2024-09-12",
        object: "model",
        created: 1725648979,
        owned_by: "system",
      },
      {
        id: "o1-preview-2024-09-12",
        object: "model",
        created: 1725648865,
        owned_by: "system",
      },
      {
        id: "o1-mini",
        object: "model",
        created: 1725649008,
        owned_by: "system",
      },
      {
        id: "o1-preview",
        object: "model",
        created: 1725648897,
        owned_by: "system",
      },
      {
        id: "gpt-4o-mini-audio-preview",
        object: "model",
        created: 1734387424,
        owned_by: "system",
      },
      {
        id: "whisper-1",
        object: "model",
        created: 1677532384,
        owned_by: "openai-internal",
      },
      {
        id: "gpt-4-turbo",
        object: "model",
        created: 1712361441,
        owned_by: "system",
      },
      {
        id: "gpt-4o-realtime-preview-2024-10-01",
        object: "model",
        created: 1727131766,
        owned_by: "system",
      },
      {
        id: "gpt-4",
        object: "model",
        created: 1687882411,
        owned_by: "openai",
      },
      {
        id: "text-embedding-3-large",
        object: "model",
        created: 1705953180,
        owned_by: "system",
      },
      {
        id: "babbage-002",
        object: "model",
        created: 1692634615,
        owned_by: "system",
      },
      {
        id: "chatgpt-4o-latest",
        object: "model",
        created: 1723515131,
        owned_by: "system",
      },
      {
        id: "tts-1-hd-1106",
        object: "model",
        created: 1699053533,
        owned_by: "system",
      },
      {
        id: "gpt-4o-audio-preview-2024-12-17",
        object: "model",
        created: 1734034239,
        owned_by: "system",
      },
      {
        id: "tts-1-hd",
        object: "model",
        created: 1699046015,
        owned_by: "system",
      },
      {
        id: "gpt-4o-mini-2024-07-18",
        object: "model",
        created: 1721172717,
        owned_by: "system",
      },
      {
        id: "tts-1",
        object: "model",
        created: 1681940951,
        owned_by: "openai-internal",
      },
      {
        id: "tts-1-1106",
        object: "model",
        created: 1699053241,
        owned_by: "system",
      },
      {
        id: "gpt-4-turbo-2024-04-09",
        object: "model",
        created: 1712601677,
        owned_by: "system",
      },
      {
        id: "davinci-002",
        object: "model",
        created: 1692634301,
        owned_by: "system",
      },
      {
        id: "gpt-3.5-turbo-1106",
        object: "model",
        created: 1698959748,
        owned_by: "system",
      },
      {
        id: "gpt-4o-2024-08-06",
        object: "model",
        created: 1722814719,
        owned_by: "system",
      },
      {
        id: "gpt-4o-mini",
        object: "model",
        created: 1721172741,
        owned_by: "system",
      },
      {
        id: "gpt-4o-2024-05-13",
        object: "model",
        created: 1715368132,
        owned_by: "system",
      },
      {
        id: "gpt-3.5-turbo-instruct",
        object: "model",
        created: 1692901427,
        owned_by: "system",
      },
      {
        id: "gpt-4o-2024-11-20",
        object: "model",
        created: 1739331543,
        owned_by: "system",
      },
      {
        id: "gpt-4o",
        object: "model",
        created: 1715367049,
        owned_by: "system",
      },
      {
        id: "gpt-3.5-turbo-instruct-0914",
        object: "model",
        created: 1694122472,
        owned_by: "system",
      },
      {
        id: "gpt-3.5-turbo-0125",
        object: "model",
        created: 1706048358,
        owned_by: "system",
      },
      {
        id: "gpt-4o-realtime-preview-2024-12-17",
        object: "model",
        created: 1733945430,
        owned_by: "system",
      },
      {
        id: "gpt-3.5-turbo",
        object: "model",
        created: 1677610602,
        owned_by: "openai",
      },
      {
        id: "gpt-4o-realtime-preview",
        object: "model",
        created: 1727659998,
        owned_by: "system",
      },
      {
        id: "gpt-3.5-turbo-16k",
        object: "model",
        created: 1683758102,
        owned_by: "openai-internal",
      },
      {
        id: "gpt-4-0125-preview",
        object: "model",
        created: 1706037612,
        owned_by: "system",
      },
      {
        id: "text-embedding-3-small",
        object: "model",
        created: 1705948997,
        owned_by: "system",
      },
      {
        id: "text-embedding-ada-002",
        object: "model",
        created: 1671217299,
        owned_by: "openai-internal",
      },
      {
        id: "gpt-4-1106-preview",
        object: "model",
        created: 1698957206,
        owned_by: "system",
      },
      {
        id: "gpt-4-0613",
        object: "model",
        created: 1686588896,
        owned_by: "openai",
      },
      {
        id: "gpt-4-turbo-preview",
        object: "model",
        created: 1706037777,
        owned_by: "system",
      },
      {
        id: "omni-moderation-latest",
        object: "model",
        created: 1731689265,
        owned_by: "system",
      },
    ],
  });
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
          return NextResponse.json({
            id: "chatcmpl-B61WhfVQ8FoaKXVaFAjkPLl3tFrMp",
            object: "chat.completion",
            created: 1740775535,
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
              total_tokens: 38,
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
          });
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
