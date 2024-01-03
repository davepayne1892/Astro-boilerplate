---
layout: '@/templates/BasePost.astro'
title: MonoRepos for test projects
description: Why you may want to consider organising your tests in a MonoRepo.
pubDate: 2023-01-05T00:00:00Z
imgSrc: '/assets/images/hydra.jpeg'
imgAlt: 'Hydra - Gen AI image using Microsoft Designer'
---

When building an automation testing framework, I usually have two primary objectives:
1. Limit the amount of 'code' in test files.
1. Make it easy to add tests for additional components.

Over the past year I've been using a monorepo to contain all acceptance tests across a microservice orientated platform. This is what I've found.


# What is a monorepo?
You can read more [here](https://monorepo.tools/), but a monorepo is basically  a single repository containing multiple distinct projects, with well-defined relationships. This is not a monolith repo as the separate projects are all independently executable, and, where the opposite of a monolith repo is a polyrepo structure, this is not that either as all of the separate projects are in a single repository. 

# How does this work for acceptance test frameworks?
Utilising a monorepo provides a great separation point to "Limit the amount of 'code' in test files". All of your libraries, dependencies and for lack of a better phrase, test middleware, can be abstracted away, so that your test projects can really focus on the tests.

However, a testing monorepo really becomes valuable once you start testing more parts of the same context. I have an example on my [github](https://github.com/davepayne1892/at-monorepo) where I use RESTful APIs, but I've seen this work really nicely when your team builds different services in GCP or AWS etc. (especially when you consider that you can handle auth once in a monorepo, and then all subsequent test projects just get that out of the box). The idea is that by creating a pattern for how you interact with a specific type of system, you can repeat this easily, limiting the amount of time required to get to testing.

# Alternatives
Move everything into a monolith testing repo. This coude definitely be done, but there are numerous reasons why monoliths are typically frowned upon these days. When you add this to challenges around how to target tests from a single test project, I feel like you'd be left spending more time maintaining the repo then adding to it.

Polyrepo structure. You absolutely don't need to use a monorepo to benefit from a shared package or two. In a previous role I had a setup where we published a 'utils' npm package which easch of the test projects consumed, however we still had to control the versioning of this package tightly (creating situations whereby we had to do a PR for the utils package and then wait until this was merged and deployed before using it. At this point you really hoped it worked first time round.) and meant that this package was actually massively overkill for most fo the test projects.

# So how do you structure a testing monorepo?
Aside from the boilerplate, there are two folders at root which are important. `suites` and `libs`. Suites is a collection of independently executable test suites, and libs contains all of the separate packages written to interact with your systems under tests.

What I like to do is to create a class for each kind of system you may interact with (a REST client, or a GCP CloudFunctions client) and then build classes for interacting with each API, or cloud function etc. 

# Potential end goal
We've gotten to a position where we have a monorepo which contains a handful of test projects, and a similar number again of libraries and utilities which are shared across the test projects. The software engineers liked what we did with our monorepo so they created their own (two of them in fact). So we now have three monorepos. To fix this, we're going to create a fourth monorepo. 

This new monorepo will eventually supersede the other three and will include all test projects, feature code (and code level tests), infrastructure for each service, as well as the shared packages. 

What we're hoping to achieve by this is having a single code repository, which houses our microservice architecture system, as well as all of the code written to deploy and test the system.