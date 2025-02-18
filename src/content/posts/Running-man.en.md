---
title: Running man
title_en: Running man
pubDate: 2024-01-22
tags: ['blog', 'running', 'planning', 'goals']
description: "This article discusses the challenges and reflections encountered in making running plans, emphasizing the importance of action and finding balance between planning and goals."
draft: false
---

# 🏃 Act First, Plan Later

## Running Man Goal Might Be Unattainable

Outside my window, snow is falling, and cold wind squeezes through the gaps. I'm worried my running plan might have to be suspended.

Earlier, I set a goal to run 30 KM in January 2024. Running 3 KM every other day would mean completing the remaining 18 KM in just 12 days. However, the weather isn't cooperating—after consecutive rainy days, the temperature has dropped dramatically, and it's even snowing. Even if I ran 18 KM over six consecutive days, this month probably won't have six clear days left.

After setting the goal, I studied PM2.5 levels and running postures, but completely overlooked the possibility of rain and snow.

## Better to Act First, Plan Later

Perhaps at the beginning of January, I should have started running with the mindset of completing the goal early. I always make a plan, thinking to follow it step by step, which in a way ends up constraining me.

My mind focuses not on the goal but on the plan or its individual steps. Thinking about it carefully, it's quite strange! My destination is a specific place, yet my mind is content with thinking "just walk along this road for 30 minutes."

Have I unconsciously forgotten the joy of action while making plans, the joy that comes from pursuing goals? Goals correspond to emotions and desires, while plans correspond to methods and logic. In my behavior and thinking, am I overemphasizing methods and logic while neglecting emotions and desires? Is there too much rationality and too little emotion in my mind?

Better to act first and plan later—this can also prevent falling into planned procrastination. What I need isn't a plan, but a list of goals.

# 🧘 Arguments with Parents

## Communication Style

After returning home, I easily noticed significant problems with my communication style—my tone and words are sharp as blades. Am I naturally like this, or have I been influenced by my family? I can't tell, but the result is clear.

There's no reflection in my communication; I speak without consideration, just following my impulses. My expression reveals arrogance, especially in my unquestionable, condescending tone toward my younger brother. I haven't viewed them as equal and independent individuals, never considering their perspectives and thoughts.

There's no reflection in my communication. Or rather, I've never truly listened—listened to their voices as individuals.

## Communicating with Parents: Fear or Reluctance?

I always treat serious discussions as Q&A sessions, and such communications often become interrogations in my mind. Although my parents emphasize "discussion" and encourage me to "discuss" with them more, the matters they inquire about are, to me, "questions without answers or possible answers."

Regarding work, marriage, and age—these questions have no answers for me, yet they expect me to provide answers or explanations. My father's opening move is to talk about the past, my mother's is to appeal to reason, and while I look in their direction, I'm not really seeing them.

"You're just asking about results," I say, referring to tangible outcomes, implying that all their questioning stems merely from my current situation. I mean that they don't want reasons or explanations; they just want a predetermined ideal outcome.

**I know the answer to their questions isn't communication, but real-world results. They don't want promises; they want actions they can see.**

## It's All My Fault

During arguments, I strongly feel my heart pounding and breathing trembling. I lower my head, blindly scrolling through my phone, waiting for the conversation to end. Beside me, my brother remains lying there unchanged; I think he wanted to escape from the start.

Over these two years, I've come to understand some of my parents' behaviors and approaches. However, I've never considered how they view me. I treat their words as wake-up calls for responsibility but haven't given them any reason—reason to believe. Naturally, reasons to believe need to be validated by actual results.

Whether it's the communication style or the answers to their questions, ultimately it's my fault, and it's up to me to resolve it.

# 📝 memos

## Thunder Blade

Spent a day reading the manga "Thunder Blade," catching up to the latest chapter.

Looking at the entire manga, the story peaked during the Feiyan and Ling chapters, while the academy arc became excessively long. Delaying the childhood friends' reunion scene isn't just about building suspense—it's completely blocked the story's flow.

## **Experience of Configuring Domain for Memos Using ChatGPT**

### **Nginx Reverse Proxy**

- Used ChatGPT in POE throughout to inquire about commands and issues. I actually don't understand any Debian system commands or file structures.
- Previously thought Nginx reverse proxy would be difficult, but it just required finding the Nginx configuration file and adding corresponding code blocks using the nano command. Asked ChatGPT throughout, letting it provide the code. When in doubt, just ask—I believe my encounters were all basic issues, and ChatGPT rarely makes mistakes if you accurately describe what you're experiencing, sometimes without even needing to form a question.
- Implementing the reverse proxy didn't take much time; I solved it quickly. Later, I discovered the real challenge was implementing HTTPS access.

### **Abandoning HTTPS Connection**

My VPS is mainly used for crossing the GFW, using an all-in-one script for easy installation. Previously installed TLS certificates when setting up Xray.

- GPT suggested using Certbot for TLS certificates, but I found it wasn't installed and didn't want to install another TLS tool. So I asked about other Let's Encrypt certificate methods (found this in previous domain key files), searched through files, found a log file, and learned about acme.sh through asking. Checked and found it was already installed.
- When applying for certificates with acme.sh, had repeated errors until learning that domains need to specify letsencrypt. Succeeded using `acme.sh --issue -d memos.09250925.xyz --nginx --server letsencrypt`.
- Changed Memos' listening port to 443 in Nginx, but got errors on restart. After asking GPT, realized Xray was using that port.
- This consumed most of my time, trying to understand port traffic forwarding. Finally found [Xray's fallbacks configuration](https://xtls.github.io/document/level-1/fallbacks-lv1.html) and located Xray's configuration file.
- Got stuck on protocols and fallbacks, not understanding the relationship between Xray's different protocols and TLS. The all-in-one script had over ten configuration files; I knew about the entry file but didn't know which one(s) to modify.
- Made several attempts but failed. Finally gave up on unfamiliar Xray stream configuration and settled for HTTP.

Will try modifying again once I understand network protocols better.