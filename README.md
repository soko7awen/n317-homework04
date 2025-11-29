This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## AI SDK:
npx create-next-app@latest creativestorygenerator
cd creativestorygenerator 
create .env.local file:
GOOGLE_GENERATIVE_AI_API_KEY=AIzaSyB2nzU583BdCUNqtgkmA-K7eymAthWpLXM
npm install ai @ai-sdk/google
npm dev run


## 
1. What is AI SDK?

AI SDK (Software Development Kit) is a collection of tools and functions provided by a company (here, Google) to make it easy to use their AI models.

Think of it as a pre-built toolbox that allows your code to communicate with AI models without having to implement the AI yourself.

It provides functions like generateText, generateImage, etc., which you can call to get AI to produce output.

2. Purpose of AI SDK

It abstracts the complexity of sending requests to AI servers.

Handles authentication, token limits, and response formatting automatically.

Lets developers focus on what they want the AI to do, not on the low-level implementation.

3. When did AI SDK get started?

The AI SDK from Google became publicly available around 2023, alongside the launch of Google’s Gemini models.

Google has been iterating on generative AI models (Gemini 1, Gemini 1.5, Gemini 2).

4. Current Version / Model

Gemini 2.0 Flash is the latest publicly available version suitable for text generation.

It’s designed to be fast and creative, capable of producing stories, code, summaries, etc.

In your code, you are specifically using gemini-2.0-flash as the model name in the SDK.

5. Why we are using this version

Gemini 2.0 Flash is optimized for short text generation (~120 words in your case).

It balances speed, creativity, and cost — perfect for a story generator.

Other versions may be slower, or better for longer content or different tasks.

6. How it works (high-level)

Your code (frontend or backend) sends a request to the AI SDK.

The SDK authenticates using your API key.

The SDK sends your prompt to the AI model.

The AI model generates a response (story, text, etc.).

The SDK returns the generated text back to your code.

Your code can then display it in the frontend.

7. Key Terms to Explain to Students

Prompt: Instructions you give to AI (like “Write a short adventure story with Alice and Bob”).

Tokens: Units of text; one token ≈ 0.75 words. We limit tokens to control story length.

API Key: Secret password that allows your code to access Google’s AI models.

Model Name: Specifies which AI brain to use (e.g., gemini-2.0-flash).

8. Why it’s relevant for them

They don’t need to know how AI generates text internally.

They focus on using the SDK to produce creative outputs (stories, dialogues, scripts).

Explains the flow from user input → AI prompt → SDK → generated text → frontend display.