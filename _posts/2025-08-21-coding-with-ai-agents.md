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

### What is the scope for this post?
- This post is focusing on: AI assisted coding with a human in the loop (ai-pair-programming) with a focus on strong planning throughout and attention to detail (vibe-planning)
- It is not focusing on: Autonomous multi-agent workflow with minimal human interaction in the process (see claude-flow, devin ...)

### Fundamental problems with Gen AI
There are some fundamental problems with Gen AI, that feed into the coding tools. We need to consider when working with it as they lead to quite a few issues down the road, and when things start to get complex.

1. Gen AI is too literal
	- Its a yes-man: Will always trust the user, rather than questioning if they are wrong, because it can't see gray lines between black and white
	- Its a perfectionist and its siloed: it will focus too much on one direction / rabbithole, focusing on little things, rather than stopping to reasses whats important or how we have done
	- Its too eager / gunong hoe: will try and do everything at once / in one swoop. Will go ahead even if lacking information.
2. Gen AI brain is similar to a human
	- It needs a plan to refer back to or it will get confused
	- It forgets things the less it is reminded
	- It gets clogged up and can't focus when it is
    - Its better at doing one thing at a time
3. Gen AI is not a mind reader
	- It can't consider everything in your brain: it WILL miss things, espically if not reminded

Here is some example scenarios
1. 
- You spend a decent amount of time providing ai with some requirements
- then you let the ai code for 5 minutes while doing something else
- the ai goes deep into a rabbithole, adding most of the code into one file, without reusing existing code, while also adding features and changing things we don't want / didn't ask for
- when you get back turns out you missed an important concern or didn't guardrail the ai enougth
- now you have a huge mess to refactor and discern whats right and whats wrong, or you have to start all over again with new requirements

    - // the point is without proper planning the ai can't function well

2. 
- You try and feed the AI tool as much context about the project as possible, such as logs of who has done what and when
- The AI seems to do a pretty good job at first, but then it gradually starts going off the rails and starts providing lower quality responses, eventually if might even start halucinating all together, leaving a half dead conversation history and half completed code feature.
- After starting again and providing specific context just about the task and high level about the project, the model seems to stay on track and do a better job

## Working with ai coding tools

So how can we help deal with some of the problems from above?

### Some general tips / guidelines to include in your workflow
- break the task up into smaller pieces
    - create a plan with phases, and then with steps for each phase
    - make sure ai tackles things piece by piece
    - commit to git often
- keep some kind of plan for the current task
    - include discussed requirements, considerations, decisions, as well as a phased action plan // just include the important stuff as ai remembers, want to be to the point here!
    - adapt and refine the plan as you go
    - keep it consise
- always clarify with ai before, as we go, and after to make sure we have considered what we need to and you know whats going on
    - get it to ask you questions where its uncertain
    - ask it questions when planning and reviewing, or when your unsure in general
- get ai to help with the brainstorming / critical thinking
    - get it to come up with options, compare and recomend one
    - get it to brainstorm for considerations and things we might of missed

### Some questions to ask yourself
> for the current task/problem, and considering my current goals here
- how close should I be working with the ai and monitoring what its doing, what are the consequences of not?
- should i be critical thinking here, or should the ai?
- do I understanding what the ai is doing, do I have a feeling it is missing something?

## A workflow
> Heres a flexible example workflow considering some of the points mentioned so far

1. Define the task, include relevant context and overall aims
2. Break the task up into sections/phases, with steps for each phase
3. Make sure we have considered whats important and asked questions about concerns
4. Write the plan to an .md file, structure it how it makes sense to you
5. Get the AI to start running through the plan
6. As we go:
    - ask questions about any concerns sooner rather than later
    - remind it about the important requirements/considerations from the plan
    - recognise when we need to make a decision / change the plan: get ai to help compare options
7. After each phase is complete
    - Get AI to evaluate if we meet our goals and considerations, and check the code for problems/quality
    - Test and add changes to git if we like what it has done
8. Rince, repeat and adapt

## Conclusion

These tools provide great productivity benefits when used well!

## Some links for further reading
- https://www.anthropic.com/engineering/claude-code-best-practices

