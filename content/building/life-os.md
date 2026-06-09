---
title: "Life OS"
date: 2026-04-25
description: "A local-first life logging assistant with structured memory, Telegram input, and personal analytics."
cover:
  image: ""
  alt: "Life OS analytics"
  caption: ""
showToc: true
weight: 1
status: "Building"
aim: "To turn messy personal notes into structured, private, queryable life data."
github_url: "https://github.com/davidwardan/life-os"
---

## Overview

**Life OS** is a local-first life logging assistant built around structured memory. The core idea is that the agent should not be the database: raw notes are preserved, structured records are extracted and validated, and SQLite remains the source of truth for plots, search, briefings, and future automation.

The system accepts messy notes from the web app or Telegram, extracts useful records, asks follow-up questions when details are missing, and keeps the original message traceable to every structured row.

```text
raw message -> validated extraction -> SQLite rows -> plots, search, briefings
```

## What It Tracks

- **Wellbeing**: energy, stress, sleep, and daily check-ins.
- **Nutrition**: meals, protein, and other food logs.
- **Training**: workouts, exercises, running, distance, pace, and qualitative notes.
- **Career**: focused work sessions and project time.
- **Journal**: free-form reflections and daily notes.
- **Memory**: explicit preferences, strategies, goals, and briefing style.

## Key Features

- **Local SQLite source of truth**: raw data and structured rows stay under user control.
- **Telegram-first logging**: send notes, request plots, ask for briefings, and delete mistakes from chat.
- **Structured extraction**: OpenRouter-backed LLM extraction with deterministic fallback and optional LangExtract support.
- **Safe analytics**: chart generation uses predefined query mappings rather than arbitrary SQL from the agent.
- **Morning briefings**: combines deterministic trend features with Todoist tasks, calendar events, personal memory, and optional LLM wording.
- **Controlled deletion**: remove specific logs from the web app or Telegram without touching the database manually.
- **Privacy-focused defaults**: local data and `.env` files are ignored by git, with production authentication designed to fail closed.

## Architecture

Life OS uses FastAPI for the local web/API surface, Pydantic validation for extracted records, SQLite as the durable data layer, LangGraph for workflow routing, and Telegram as a lightweight input/output channel.

The database is the product core. Agents, chat channels, plots, and briefings sit on top of it rather than replacing it.

## Stack

- Python
- FastAPI
- SQLite
- Pydantic
- LangGraph
- OpenRouter-compatible LLMs
- Telegram Bot API
- Todoist and Google Calendar integrations

[View on GitHub](https://github.com/davidwardan/life-os)
