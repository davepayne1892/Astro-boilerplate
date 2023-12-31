---
layout: '@/templates/BasePost.astro'
title: How AI will* affect QA
description: There seems to be a lot of talk about AI writing tests. To me this feels like aiming at the low hanging fruit, rather than using AI to expedite feature delivery.
pubDate: 2023-12-04T00:00:00Z
imgSrc: '/assets/images/image-post3.jpeg'
imgAlt: 'Image post 3'
---

  *The following blog post is based on the current snapshot of the capabilities of generative AI. These goalposts change rapidly, and we don't really know the ceiling of what can be achieved. Come back in six months to see how wrong I got it.
 
 # AI in code
  In the ever-evolving landscape of software development, leveraging the groundbreaking capabilities of generative artificial intelligence (AI) promises a fundamental shift in how we approach code creation. One where concise and comprehensive feature specifications become the catalyst for automatic code generation.

 ## The challenges with trusting code written by AI
 Generative AI is a great collaborative tool to assist in writing code; powering a democratising of writing code that is probably comparable to that of the printing press (or the internet) democratising knowledge. However, as it is right now, there are some caveats to be aware of.

 The following challenges were provided by Bard when asked about using AI to write code: 
 - AI Bias: Training data needs careful curation to avoid perpetuating existing biases in code and algorithms. This demands active human oversight and continuous improvement.
- Security Concerns: AI-generated code requires rigorous testing and security audits to ensure it's free from vulnerabilities and malicious intent.
- The Human Factor: While AI can automate many tasks, it can't replace the critical thinking and creative problem-solving of experienced developers. Collaboration and human expertise will always be essential.

And a couple from me:
- Deskilling: Over the long term, relying on AI to write code will reduce the number of people able to write code.
- Hallucinations: AI-generated code is only as good as the prompt that created it. As it would be with outsourcing writing of code, you should thoroughly check that it is actually doing what you think it is.[^1]

# AI in tests
When you ask software engineers what they're going to use AI for, they often answer that it will be great for writing tests. To me, this feels as though these people are leaning in to the idea that AI can handle the 'boring' stuff, and free them up to write more fun code. This is probably better than not using generative AI, but it is quite unimaginative.

Additionally, if you refer back to the challenges listed above, using AI to write your tests feels like you're increasing the risks associated with the AI-generated code, rather than protecting against them.

## AI powered test driven design
TDD was once described to me as a process where you write one test, and then you write some code that satisfies that test. You then add another test and amend your code until both tests pass. You keep adding tests and amending code until your feature is complete. 

This process aligns quite nicely with generative AI. Give the AI a prompt, and it will write code to satisfy the prompt. Refine the prompt further and the code will be updated. Keep refining the prompt until the AI spits out feature complete code.

## How could this work?
With AI-powered TDD, crafting features becomes an interactive dialogue. You start by outlining your desires in clear, natural language: "GIVEN I am on the homepage, WHEN I click my profile, THEN I am taken to my account". The AI, your tireless collaborator, drafts initial code based on its extensive knowledge of software patterns and best practices. Not quite perfect? Not to worry! Just refine your specifications: "GIVEN I am an authenticated user, AND I am on the homepage, WHEN I click my profile, THEN I am taken to my account", provide feedback on the AI's suggestions, and choose the variations that best capture your vision. Each iteration builds upon the last, your feature gradually takes shape, each line meticulously crafted and rigorously tested until it stands complete.

## How is this differnt to using AI to write tests?

This mitigates several of the concerns listed above, namely: hallucinations, security concerns and the human factor. The two we're left with (AI biases and deskilling) could be argued are much less important. If code is written by AI, do we need people skilled in writing code?

So what skills are required from the human part of this collaboration? When writing tests for AI to code against, we would need to ensure there are no ambiguous / contradictory requirements, as well as identify and understand complex edge cases. Oddly enough, these are what I would argue are some of the most important skills for a QA to have.

# The product / QA hybrid
Over the past few years we've seen a bit of a merging of the QA and software engineer roles. I'd like to see a world where over the next few years we pivot towards QA and product owner roles aligning similarly. 

At this point you'd have a product owner who can identify the next money making feature, and a QA who helps refine their idea into a comprehensive list of requirements (tests) which can be fed into AI and the feature just appears.