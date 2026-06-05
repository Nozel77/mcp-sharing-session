"use client";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

export const REMOTE_CHANNEL_NAME = "mcp-sharing-session:remote";

export function isSupabaseRemoteEnabled() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

export function getSupabaseRemoteClient() {
  if (!isSupabaseRemoteEnabled()) return null;

  client ??= createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
  );

  return client;
}
