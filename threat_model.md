# Threat Model

## Project Overview

This repository is a pnpm workspace monorepo with three main application areas:

- `artifacts/slcautoshop`: the primary deployed application today, an Express 4 + EJS website for Scott's Auto and Clutch.
- `artifacts/api-server`: an Express 5 + TypeScript API server with a `/api/healthz` endpoint and shared database package wiring.
- `artifacts/mockup-sandbox`: a React + Vite UI sandbox used for mockups and previews.

Deployment configuration in `.replit` runs `artifacts/slcautoshop/server.js`, so that site is the primary production surface for this scan. Per project assumptions, the mockup sandbox is treated as dev-only unless production reachability is demonstrated. TLS is handled by the deployment platform.

The current production application is largely a content-driven marketing site. It does not currently implement user accounts, admin roles, payment flows, file uploads, or server-side processing of contact form submissions.

## Assets

- **Site integrity and content trust** — the public website must not render attacker-controlled HTML, scripts, or malicious redirects. Compromise would let attackers deface the site, deliver malware, or abuse search traffic.
- **Site availability** — the business depends on the website remaining reachable for discovery, directions, and contact. Unbounded or expensive public endpoints would matter even without user accounts.
- **Business contact and location data** — phone numbers, address, structured data, and service content must remain accurate and untampered because visitors rely on them for contact and navigation.
- **Application secrets and infrastructure configuration** — if `artifacts/api-server` or `lib/db` are deployed, environment variables such as `DATABASE_URL` and any future service credentials must remain server-only.
- **Future customer inquiry data** — the privacy policy describes business contact workflows. If the app later begins collecting names, phone numbers, vehicle information, or messages through the website or API, those records become sensitive personal and business data.

## Trust Boundaries

- **Browser to `artifacts/slcautoshop` Express app** — all request paths and headers are attacker-controlled. Route parameters, redirects, and any template data derived from requests must be validated and safely rendered.
- **Browser to `artifacts/api-server`** — if the API server is deployed, every endpoint is a public network boundary. CORS, request parsing, logging, and future authn/authz checks must be enforced server-side.
- **API server to PostgreSQL (`lib/db`)** — the shared database layer holds a high-privilege connection string. Any future query construction must prevent injection and unintended data exposure.
- **Static content/configuration to templates** — EJS templates render data from local JS modules. These values are trusted today because they are repository-controlled, but any future CMS, admin editing flow, or imported content would cross a new trust boundary and require output encoding and validation.
- **Production vs dev-only boundary** — `artifacts/mockup-sandbox`, local scripts, and artifact-generation helpers are not production surfaces unless explicitly wired into deployment.

## Scan Anchors

- **Primary production entry point:** `artifacts/slcautoshop/server.js`
- **Secondary deployable server:** `artifacts/api-server/src/index.ts`, `artifacts/api-server/src/app.ts`
- **Highest-risk code areas:** Express route handlers and redirects in `artifacts/slcautoshop/server.js`, EJS templates in `artifacts/slcautoshop/views/`, API middleware and routing in `artifacts/api-server/src/`, and any future DB access through `lib/db`
- **Public surfaces:** all current website routes and `/api/healthz`
- **Authenticated/admin surfaces:** none currently implemented
- **Usually dev-only:** `artifacts/mockup-sandbox/`, `artifacts/slcautoshop/download-images.js`, workspace scripts, generated `dist/` outputs

## Threat Categories

### Tampering

Because the deployed site renders many content pages through EJS, the application must ensure that request data cannot alter rendered HTML, script blocks, or redirect targets beyond intended route selection. Redirect normalization MUST not derive a `Location` header directly from raw request paths that can begin with `//`, because browsers treat those values as external scheme-relative URLs. Any future content source that becomes user-editable or externally sourced MUST be validated on ingestion and output-encoded in templates.

### Information Disclosure

The current site is public and mostly static, but the API server and shared database package introduce future data-handling risk. Secrets such as `DATABASE_URL` MUST remain server-side, logs MUST avoid credential leakage, and error responses MUST not expose stack traces, SQL details, or internal configuration in production.

### Denial of Service

All public routes are internet-facing. Request handling MUST stay cheap and bounded, especially if the API server later adds database access or third-party calls. Future endpoints that accept bodies, uploads, or expensive searches MUST apply size limits, timeouts, and appropriate rate limiting.

### Elevation of Privilege

No user roles exist today, but `artifacts/api-server` and `lib/db` are positioned to add privileged operations later. Any future endpoint that exposes business or customer data MUST enforce server-side authorization, and all database access MUST use safe query construction rather than string-built SQL.

### Security Misconfiguration

The deployed site relies on Express and Helmet configuration for baseline hardening. Production behavior MUST avoid exposing dev-only tooling, debug behavior, or unnecessary cross-origin access. The mockup sandbox remains out of scope for production findings unless it is explicitly made reachable in deployment.
