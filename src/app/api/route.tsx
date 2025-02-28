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

// Handler for POST requests
export async function POST(request: NextRequest) {
  console.log("--- POST Request Received ---");
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
