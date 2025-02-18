---
title: "Waiting for Godot: Adding i18n Support to Blog with Trae"
pubDate: 2025-02-18
tags: ['i18n', 'blog', 'AI', 'Trae', 'multilingual', 'programming', 'automation']
description: "This article documents my journey of implementing Chinese-English bilingual support for my blog using the AI tool Trae. The process of completing programming tasks with AI assistance, despite having no coding knowledge, felt like waiting for Godot—full of uncertainty and hope."
draft: false
---

This was a "bold" experiment where I, someone with no programming knowledge, successfully added Chinese-English bilingual support to my current blog using AI and the Trae tool.

## Background

### Why I Chose This Blog Template

I don't know how to code. My current blog is a fork of a GitHub project called [astro-theme-panda](https://github.com/yuhangch/astro-theme-panda). I was looking for a minimalist, text-focused blog template when I found the [bearblog](https://bearblog.dev/) platform, but it required a paid subscription for custom domain support. astro-theme-panda happened to emulate the bear blog style, so I forked the project. I'm grateful to the author for their work.

### Why I Wanted English Support

The most direct reason: I want to connect with the English-speaking world. Idealistically, I write blog posts for myself; emotionally, I hope others will read my blog. I'm an introverted and shy person, but I still hope to connect with more people, imagining these connections as a kind of romance.

My blog is hosted on Vercel, and the domain isn't registered in China. Due to the Great Firewall, it's probably harder to reach readers from China or the Chinese-speaking world. So, I wanted to translate my Chinese posts into English—another reason for wanting English support on my blog.

### Why I Waited Until Now for i18n Support

I believe AI's translation capabilities and results are now good enough. My English isn't great, and I previously couldn't express myself in English, but I think current AI translation features can adequately translate my Chinese writing.

As someone who doesn't understand code, I wanted to try modifying my blog project with AI assistance. This was unimaginable before—years ago, when I tried to modify webpage CSS and similar styles, most attempts ended in failure. Even with AI chatbots emerging in the past couple of years, the inability to read entire codebases meant chat-only solutions often led to dead ends. However, with GitHub Copilot's launch and the recent release of Trae's Windows client, these free tools finally allowed someone like me, with no coding knowledge, to experience AI programming—feeding project folders directly to AI tools and following AI's step-by-step guidance with feedback.

## Implementing Blog i18n Support

### How It Was Done

I have no idea 😀!
In summary, I just did the following:
- Opened the project folder with Trae, asked AI to read the project code, then specified the desired functionality.
- Modified code according to AI's suggestions, mostly through one-click applications.
- Ran the project as per AI's instructions, provided feedback to AI with error descriptions and issues, mixed in requirement specifications, and waited for AI's next directions.
- Repeated the above two steps.

### Problems Encountered

- Sometimes AI would make excessive modifications, requiring prompt rollbacks. When restating requirements, I needed to provide prompts that limited the scope of effects.
- Sometimes AI would make assumptions, departing from the project's existing code. Therefore, I often referenced the entire project, asking AI to give answers only after carefully reading the project code.
- Sometimes the same problem would recur, prompting me to ask AI again and request double-confirmation of the modifications.
- When unsure what to modify, I would ask AI to re-read all project code to check for oversights.

### Why I Ultimately Chose Trae

I don't know why😀!
I spent yesterday afternoon struggling with VS Code without success. Today, trying Trae resulted in very concise modification suggestions.
It might be related to the AI choice—I used Claude in Trae throughout today's process.

## Blog Modification Results

- Added a language switch icon to the left of the theme switch icon.
- Added English versions of all function pages.
- Used AI to generate corresponding English versions for all existing Chinese blog posts.
- Under Chinese and English content pages, clicking RSS subscription only subscribes to articles in the corresponding language.
- Going forward, adding both versions of files in the posts directory, like "test.md" and "test.en.md", will update blog posts in both languages.

## Reflections on This Experience

- Not understanding code made this a complete black-box operation. Throughout the process, I never knew if I would ultimately succeed. After completion, I don't know if there are hidden issues.
- During the process, I didn't understand the causes of problems, couldn't comprehend AI's explanations, and wasn't sure if attempts were effective. With repeated errors and attempts, not knowing where modifications would end, it was a process without positive feedback—tedious and monotonous.
- In the future, could AI automatically read feedback results, debug itself, and ultimately achieve functional effects?

To sum up my experience in one sentence: **It was like waiting for Godot**.