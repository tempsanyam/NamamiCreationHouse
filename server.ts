import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: AI Assistant Chat
  app.post("/api/ai-assistant", async (req, res) => {
    try {
      const { prompt, conversationHistory = [] } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        // Fallback response if API key is not configured yet
        return res.json({
          reply: `Thank you for reaching out to **Namami Creation House**!

Based on your inquiry for "${prompt.slice(0, 50)}...", we recommend connecting directly with our creative director on WhatsApp.

You can directly connect with our dedicated creative lead on WhatsApp at **+91 8815954802** for project consultations and instant quotes!`,
          suggestedServices: ["AI Video Production", "Cinematic Video Editing", "Brand Identity & Graphic Design"],
          whatsappLink: `https://wa.me/918815954802?text=${encodeURIComponent(`Hello Namami Creation House, I have a project inquiry regarding: ${prompt}`)}`
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const systemInstruction = `You are "Namami AI", the senior creative consultant for Namami Creation House.
Brand Tagline: "From Spiritual To Cinematic — We Create Everything"
Contact WhatsApp: +91 8815954802
Instagram: @namami_creation_house
Website Services include: Content Creation, Video Editing, AI Studio (AI Video Making, Text to Video, AI Avatars), Graphic Design, Branding, Social Media Management, Web & App Development, Digital Marketing, VFX, Photography & Drone Shoots, Wedding Films, Spiritual Content (Jainism, Sanatan), Commercial Ads, and Corporate Videos.

Your job:
1. Provide warm, executive-level creative guidance.
2. Recommend the best services and turnaround times.
3. Keep answers structured, encouraging, concise, and elegant.
4. Always invite the user to connect on WhatsApp at +91 8815954802 for an instant quote.`;

      const contents = [
        ...conversationHistory.map((item: any) => ({
          role: item.role === "user" ? "user" : "model",
          parts: [{ text: item.text }]
        })),
        { role: "user", parts: [{ text: prompt }] }
      ];

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const replyText = response.text || "I'd be delighted to discuss your creative vision! Please connect with us directly on WhatsApp (+91 8815954802) for custom quotes and portfolios.";

      return res.json({
        reply: replyText,
        whatsappLink: `https://wa.me/918815954802?text=${encodeURIComponent(`Hello Namami Creation House, I was chatting with Namami AI about: ${prompt}`)}`
      });
    } catch (error: any) {
      console.error("AI Assistant Error:", error);
      res.status(500).json({ error: "Failed to generate AI response", details: error?.message });
    }
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", brand: "Namami Creation House" });
  });

  // Vite middleware in dev mode
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Namami Creation House Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
