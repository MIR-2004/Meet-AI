import {and, eq, not} from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { CallEndedEvent, CallTranscriptionReadyEvent, CallSessionParticipantLeftEvent, CallRecordingReadyEvent, CallSessionStartedEvent } from "@stream-io/node-sdk";
import { db } from "@/db";
import { agents, meetings } from "@/db/schema";
import { streamVideo } from "@/lib/stream-video";

function verifySignatureWthSDK(body: string, signature: string): boolean {
    return streamVideo.verifyWebhook(body, signature);
}

export async function POST(req:NextRequest) {
    
}