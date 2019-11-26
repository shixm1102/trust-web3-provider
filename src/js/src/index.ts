// Copyright (c) 2018-2019 Coinbase, Inc. <https://coinbase.com/>
// Licensed under the Apache License, version 2.0

import { WalletLink } from "./WalletLink"
import { WalletLinkProvider } from "./WalletLinkProvider"
import {TrustRelay} from "./TrustRelay";

export { WalletLink } from "./WalletLink"
export { WalletLinkProvider } from "./WalletLinkProvider"
export default WalletLink

declare global {
  interface Window {
    WalletLink: typeof WalletLink
    WalletLinkProvider: typeof WalletLinkProvider
    TrustRelay: typeof TrustRelay
    ethereum?: WalletLinkProvider
    webkit: any
    trustMessage: (...args: any) => void
  }
}

if (typeof window !== "undefined") {
  window.WalletLink = WalletLink
  window.WalletLinkProvider = WalletLinkProvider
  window.TrustRelay = TrustRelay
}
