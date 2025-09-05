---
layout: post
title: Coding with AI Agents
description: How to program with AI agent coding tools using a vibe-planning / pair-programming approach
categories:
    - Programming
    - AI
tag: 
comments: true
date: 2025-08-21T13:09:07+01:00
display-date: 2025-08-21
permalink: ai-agents-pair-programming.html
---

Guide for using AI agent coding tools via a "vibe-planning" approach

## Introduction

AI Agent coding tools such as copilot, cline and claude-code have taken off in the last year. These tools can enable us to go faster but there are some traps that are easy to fall into. This post suggests some general tips to get around these so we can make best use of these tools to go faster effectively.

Note on scope:
- This post is focusing on: AI assisted coding with a human in the loop with a focus on strong planning throughout
- It is not focusing on: autonomous multi-agent workflow with minimal human interaction in the process (see claude-flow, devin ...)

## What are the problems

### Here's a recurring scenario you might notice ...
- You spend a decent amount of time providing AI with some requirements
- Then you let the AI code for 5 minutes while doing something else
- You come back and:
    - The AI has gone into a rabbit hole and done a terrible job
    - It has created a 2000 line file, not reused existing code, added features we didn't ask for and changed things we didn't ask it to change
    - As well as other mistakes that in your head don't make sense at all
- Now you have two choices
    - Refactor the huge mess and discern right from wrong
    - Start all over again with new requirements

Or another scenario:
- You give the AI as much context about the project as possible
- The AI seems to do a pretty good job at first
- After coding the first part of the feature, it starts going off the rails and hallucinating, it's forgotten basic things you told it about before
- So we end up with a half completed task, and we have to remind AI everything again ...

### Fundamental problems with Gen AI
There are some fundamental problems with Gen AI (some of which are also fundamental problems with humans...) that feed into the coding tools. A lot of which might be common sense but easy to miss. We need to consider these issues when working with these tools as they could lead to quite a few issues down the road, especially when things start to get complex or we have to iterate on something rather than start anew.

1. Gen AI is too literal. It can struggle with seeing the shades of gray between black and white, which means:
    - It's a yes-man: it wants to make you happy and trusts you, and it always needs to have an answer, so it will take your word as it is, rather than questioning if you are wrong
    - It's a perfectionist: it will focus too much on one direction, leaving out other crucial things and focusing on the little things we might not need to change
    - It's eager to go fast: it will just try to solve everything at once, without stopping to see how the picture fits together and that we have the information we need, so we end up going in the wrong direction and missing things.
2. Gen AI's brain is similar to a human
    - It needs a plan to refer back to or it will get confused
    - It forgets things the less it is reminded
    - It gets clogged up and can't focus when it has too much information
    - It's bad at multitasking: it's better at focusing on one thing at a time
3. Gen AI is not a mind reader and it doesn't know everything
    - It will only know what you tell it
    - It will miss things and make mistakes, espically as things get complex

## So what can we do

### "vibe-planning" approach

#### Plan things out beforehand
> Make sure the AI tool has a solid plan it can refer back to
1. Make sure the AI has specific relevant context
2. Break the task up into smaller pieces
    - Make sure we have considered any important requirements/considerations/decisions, and asked questions about any concerns
    - Have phases in your plan with steps for each phase
    - Get the AI to go through the plan phase by phase
    - Keep it concise
    - Create an .md file for the plan if it makes sense

#### As we go
> Slow down and check things
- After each phase/step
    - Get the AI to evaluate its work to our requirements and general good practice
    - Make sure to read and understand its output, if unsure about anything ask a question
    - Adapt and refine the plan
    - Test/run the code if it makes sense
    - Commit to git
- If AI results start to get less accurate or it starts to forget things
    - Remind it about whats important
    - Consider compacting model context to current task/phase/direction
        - If tool doesn't support this save the context/plan to an .md file and start a new chat

## Reviewing this approach

### Do we always have to stick to the plan?
Sometimes taking the extra time to pay attention and plan things out does take time we might not have. Or our project is too simple so it isn't all necessary.

I think this approach works best if:
- We have a large complex project
- We are iterating rather than creating things fresh
- We are not trying to get a feature out fast as possible

Sometimes maybe we do want to go as fast as AI can let us.
But I think there is a balance here, even for smaller tasks/projects, I think following the general guidelines is a good idea.

### Some questions to ask yourself
> For the current task/problem, and considering my current goals here
- How close should I be working with the AI and monitoring what it's doing, what are the consequences of not for me and this project?
- Should I be critical thinking here, or should the AI?
- Do I understand what the AI is doing, do I have a feeling it is missing something?

### Won't the tools get better?
Tools have already improved to help tackle some of the problems mentioned. For example:
- claude-code can generate CLAUDE.MD files that give some project context but not too much
- claude-code will break tasks up into a todo-list and go through it
- claude-code auto-compacts context window as you go

These fixes help but don't solve all the problems yet, especially on larger mature projects, though they will improve in the future.

## General AI guidelines

### Simple list
- Have a plan
- Break things up and tackle one at a time
- Give clear context
- Clarify with AI as we go when you are unsure
- Pay attention and understand the AI's output
- Tell the AI exactly what you want it to do / give it guiderails
- Consider the AI's context window

### Giving clear context
- Give it some project context but not too much
- Give it aims so it understands what you are trying to do
- Make sure its clear what its task is and the order in which to go about it

### Other cool tips
- Get the AI to ask you questions when its unsure
- Get the AI to rate how confident it is in its answers
- Get the AI to help with brainstorming, for example:
    - Do you think there are any considerations we have missed here?
    - Do you see any problems arising?
    - Any decisions we need to make, if so compare options and recommend
    - Come up with three solutions, compare and recomend one?

## Conclusion

1. AI tools can speed us up and provide productivity benefits, but there are some caveats
2. "vibe planning" is a possible approach to help deal with some of the problems
3. Even when we need to go as fast as possible there are good general guidelines we could always follow

## Some links for further reading
- https://www.anthropic.com/engineering/claude-code-best-practices

