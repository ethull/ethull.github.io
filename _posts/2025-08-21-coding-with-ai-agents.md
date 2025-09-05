---
layout: post
title: Coding with AI agents
description: How to program with AI agents using a vibe-planning / pair-programming approach
categories:
    - Category
tag: 
comments: true
date: 2025-08-21T13:09:07+01:00
display-date: 2025-08-21
permalink: ai-agents-pair-programming.html
---

Guide for using agentic ai coding tools via vibe-planning methodology

## Introduction

AI Agent coding tools such as copilot, cline and claude-code have taken off recently. These tools can enable us to go faster but there are some easy to fall into traps, this post suggests some general tips to get around these so we can make best use of these tools to go faster where we can effectively.

Note on scope:
- This post is focusing on: AI assisted coding with a human in the loop (ai-pair-programming) with a focus on strong planning throughout (vibe-planning)
- It is not focusing on: Autonomous multi-agent workflow with minimal human interaction in the process (see claude-flow, devin ...)

## What are the problems

### Here's a recurring scenario you might notice ...
- You spend a decent amount of time providing ai with some requirements
- then you let the ai code for 5 minutes while doing something else
- you come back and:
    - the ai has gone into a rabbithole and done a terrible job
    - it has created a 2000 line file, not reused existing code, added features we didn't ask for and changed things we didn't ask it to change
- now you have two choices
    - refactor the huge mess and discern right from wrong
    - start all over again with new requirements

Or anouther scenario:
- You give the AI as much context about the project as possible
- The AI seems to do a pretty good job at first
- After coding the first part of the feature, it starts going off the rails and halucinating, its forgotten basic things you told it about before
- So we end up with a half completed project, and we have to remind AI everything again ...

### Fundamental problems with Gen AI
There are some fundamental problems with Gen AI (some of which are also fundamental problems with humans...) that feed into the coding tools. Alot of which might be common sense but easy to miss. We need to consider these when working with these tools as they lead to quite a few issues down the road, espically when things start to get complex or we have to iterate on something rather than start anew.

1. Gen AI is too literal. It can struggle with seeing the shades of gray between black and white, which means:
	- Its a yes-man: it wants to make you happy and trusts you, and it always needs to have an answer, so it will take your word as it is, rather than questioning if you are wrong
	- Its a perfectionist: it will focus too much on one direction, leaving out other crucial things and focusing on the little things we might not need to change
    - Its eager to go fast: it will just try solve everything at once is once, with-out stopping to see how the picture fits together and that we have the information we need, so we end up going in the wrong direction and missing things.
2. Gen AI's brain is similar to a human
	- It needs a plan to refer back to or it will get confused
	- It forgets things the less it is reminded
	- It gets clogged up and can't focus when it has too much information
    - Its bad at multitasking: its better at focusing on one thing at a time
3. Gen AI is not a mind reader and it doesn't know everything
    - It will only know what you tell it
	- It can't consider everything in your brain: it WILL miss things, espically if not reminded
4. Gen AI will let us be lazy
    - its happy for us to not read and understand what works

## So what can we do

So want are some of the general things we can do to help deal with the problems mentioned?

### "vibe-planning" approach

#### plan things out beforehand
> Make sure the ai tool has a solid plan it can refer back to
1. Make sure the AI tool has specific relevant context
2. Break the task up into smaller pieces
    - make sure we have considered any important requirements/considerations/decisions, and asked questions about any concerns
    - have phases in your plan with steps for each phase
    - get the ai to go through the plan phase by phase
    - keep it concise
    - create an .md file for the plan if it makes sense

#### as we go
> Slow down and check things
- after each phase/step
    - get the ai to evaluate its work, to our requirements and general good practise
    - make sure to read and understand, if unsure about anything ask a question
    - adapt and refine the plan
    - test/run the code if it makes sense
    - commit to git
- if ai results start to get less accurate or it starts to forget things
    - remind it about whats important
    - consider compacting model context to current task/phase/direction
        - if tool doesn't support this save the context/plan to an .md file and start a new chat

## reviewing this approach

### do we always have to stick to the plan?
Sometimes taking the extra time to pay attention and plan things out does take time we might not have. Or our project is too simple so it isn't all neccessary

I think this approach works best if:
- we have a large complex project
- we are iterating rather than creating things fresh
- we are not trying to get a feature out fast as possible

Sometimes maybe we do want to go as fast as AI can let us.
But I think there is a balance here, even for smaller tasks projects, I think following the general guidelines is a good idea to ensure some quality.

### some questions to ask yourself
> for the current task/problem, and considering my current goals here
- how close should I be working with the ai and monitoring what its doing, what are the consequences of not for me and this project?
- should i be critical thinking here, or should the ai?
- do I understanding what the ai is doing, do I have a feeling it is missing something?

### won't the tools get better?
Tools have already improved to help tackle some of the problems mentioned. For example:
- claude-code creates an todo-list and goes through it
- claude-code auto-compacts context window as you go
These fixes can help but don't solve all the problems yet, espically on larger projects, they will improve in the future.

## General AI guidelines
### Simple list
- have a plan
- break things up and tackle one at a time
- give clear context
- clarify with ai as we go when you are unsure
- pay attention and understand the ai's output
- tell the ai exactly what you want it to do
- consider the ai's context window

### Giving clear context
- give it some project context but not too much
- give it aims so it understandings what you are trying to do
- make sure its clear what its task (what you want it to do)

### Other cool tips
- get the AI to ask you questions when its unsure
- get the AI to rate how confident it is in its answers
- get the AI to help with brainstorming, EG:
    - do you think there are any considerations we have missed here?
    - do you see any problems arising?
    - any decisions we need to make, if so compare options and recomend
    - come up with three solutions, compare and recomend one?

## Conclusion

1. AI tools can speed us up and provide productivity benefits, but there are some caveats.
2. "vibe planning" is a possible approach to help deal with some of the problems
3. even when we need to go really fast there are good general guidelines we could always follow

## Some links for further reading
- https://www.anthropic.com/engineering/claude-code-best-practices

