"use client";

import type { ReactNode } from "react";
import { TurnkeyProvider, type TurnkeyProviderConfig } from "@turnkey/react-wallet-kit";

const turnkeyConfig: TurnkeyProviderConfig = {
  organizationId: process.env.NEXT_PUBLIC_TURNKEY_ORG_ID!,
  authProxyConfigId: process.env.NEXT_PUBLIC_AUTH_PROXY_CONFIG_ID!,
  // Target a specific Turnkey environment. When unset, the wallet kit falls
  // back to its production defaults (https://api.turnkey.com /
  // https://authproxy.turnkey.com). For non-prod environments both must be set,
  // otherwise the wallet kit queries the prod auth proxy with a non-prod config
  // ID and gets a 404 (surfaced in the browser as a CORS error).
  apiBaseUrl: process.env.NEXT_PUBLIC_TURNKEY_API_BASE_URL,
  authProxyUrl: process.env.NEXT_PUBLIC_AUTH_PROXY_URL,
  auth: {
    methods: {
      passkeyAuthEnabled: true,
      emailOtpAuthEnabled: true,
      smsOtpAuthEnabled: false,
      walletAuthEnabled: false,
      googleOauthEnabled: false,
      appleOauthEnabled: false,
      xOauthEnabled: false,
      discordOauthEnabled: false,
      facebookOauthEnabled: false,
    },
  },
};

export function Providers({ children }: { children: ReactNode }) {
  return <TurnkeyProvider config={turnkeyConfig}>{children}</TurnkeyProvider>;
}
