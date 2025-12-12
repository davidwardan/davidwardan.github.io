---
title: "Walter"
date: 2025-12-12
description: "AI-powered crypto trading agent and market analyzer."
cover:
  image: ""
  alt: "Walter AI"
  caption: ""
showToc: true
weight: 1
status: "Building"
aim: "To build an autonomous agent that navigates crypto markets securely."
github_url: "https://github.com/auxiliary-ai/Walter"
---

## Overview

**Walter** is an AI-powered trading agent designed to navigate cryptocurrency markets on Hyperliquid. It aggregates market data—including mid prices, candles, volume, funding, and trade pressure—into concise snapshots.

Using an LLM backend (configurable with models like Gemini Flash or DeepSeek R1), Walter evaluates market context and enforces a strict confidence threshold before executing trades. It features:

- **Autonomous Execution**: Places market or limit orders via the Hyperliquid SDK.
- **Safety Mechanisms**: Configurable confidence thresholds and risk management parameters.
- **Loop Architecture**: Runs as a continuous scheduler loop for real-time monitoring.

## Key Features

- **Market Snapshots**: Aggregates comprehensive market data.
- **LLM Decision Engine**: Uses OpenRouter to access various LLMs for decision making.
- **Risk Controls**: Automatic leverage updates and order sizing.
- **Python Native**: Built with a modular Python architecture for easy extension.

[View on GitHub](https://github.com/auxiliary-ai/Walter)
