---
layout: '@/templates/BasePost.astro'
title: Manual tests as code
description: Everything as code is great. Can you write manual tests as code?
pubDate: 2023-12-20T00:00:00Z
imgSrc: '/assets/images/vs-code.jpg'
imgAlt: 'Software Development IDE'
---

# Everything as code
The "everything as code" approach revolutionizes IT management by treating infrastructure and configurations like software itself. This code-driven approach unlocks many benefits: reduced human error through automation and version control, increased consistency across environments, and boosted scalability through reusable templates. 

## What is typically under the everything as code umbrella?
- Feature code
- Infrastrcutre
- Configuration
- Documentation

## What are the benefits of everything as code?
- Reduced human error: Automation through code minimizes the risk of errors caused by manual configuration. Pull requests can act as an additional quality gate to ensure high standards are kept.
- Increased consistency: Having a main branch ensures consistent configurations across different environments, improving reliability and predictability. Codifying standards also improves the quality of the deliverable.
- Improved agility: Changes can be implemented quickly and easily through code, enabling faster deployments.
- Enhanced collaboration: Repositories can be shared and version-controlled, facilitating collaboration among teams.
- Simplified auditing and compliance: Storing things in repositories provides a clear audit trail of  changes, simplifying compliance with security and regulatory requirements.

# Manual tests as code
The benefits of everythign as code can easily be applied to manual tests. Using a test case management tool where you interact via a GUI is likely incredibly onerous to work in. Additionally, whilst the tool will likely have robust auditing, there is likely nothing stopping someone accidentally changing or deleting tests, and then wasted effort trying to get them back to a good state.

## Isn't this just automated testing?
I'd like to think this is a great entry point into automated testing. You'd still be manually executing tests and recording results; however by recording the manual tests as code your team will start to get used to various parts of software development (git, high level coding standards (DRY) etc) without worrying too much about the more complicated parts of the tests. And, when you are ready to make the switch to automating the tests, you've already got a massive leg up.

## Is this right for us?
I'm a big fan of this approach, but I am a big fan of everything as code, and manual tests definitely fall under the umbrella of everything.


### Advantages:
- Version control:
  - Track changes, revert to previous versions, and maintain a clear history of test evolution.
  - Resolve merge conflicts effectively when multiple testers work on the same tests.
- Collaboration:
  - Share tests easily among team members, fostering better communication and knowledge transfer.
  - Enable parallel work on tests without file conflicts.
- Consistency:
  - Enforce consistent formatting and structure for better readability and maintainability.
- Auditability:
  - Track who made changes, when, and why, improving accountability and traceability.
- Reusability:
  - Easily copy and adapt tests for different test cases or scenarios, reducing duplication and improving efficiency.
- Integration:
  - Integrate with other tools in the development pipeline (e.g., CI/CD) for smoother workflows.
- Potential for automation:
  - Serve as a foundation for transitioning to automated tests in the future.
### Disadvantages:
- Learning curve:
  - QA might need to learn basic coding skills and version control tools.
- Initial setup:
  - Requires planning and investment in tools and infrastructure.
- Potential for over-engineering:
  - Risk of over-complicating simple tests, leading to reduced efficiency and readability.
- Not a replacement for automation:
  - Still requires manual execution, unlike fully automated tests.

## Our Setup

### Gherkin Builder
The first thing we introduced was a [gherkin](https://cucumber.io/docs/gherkin/reference/) builder. This allows for the team to write statements like this:
```javascript
const script = new GherkingBuilder()
                    .withGiven("I am an authenticated user")
                    .withWhen("I click logout")
                    .withThen("I become unauthenticated")
                    .build()
```
which returns the string "GIVEN I am an authenticated user \nWHEN I click logout \nTHEN I become unauthenticated".

This builder is opinionated, as a lot of people write poor quality gherkin statements. Our rules:
- GIVEN is optional, but when provided must come first.
- WHEN is mandatory, and there can only be one.
- THEN is mandatory, and there can be more than one.
- If providing more than one GIVEN or THEN, the first one uses the appropriate verb, and the rest are started with AND
- BUT is not used. 
The builder enforces these rules so that we don't have to.

### Client
Next, we built a client which can take the output of the gherkin builder and update test suites in our test management tool as appropriate. This client will:
- Create test cases if none are found matching the title
- Update test cases if the title exists but does not match the script
- Archive test cases if they are in the management tool but not in the code repo (and unarchive them if they're restored).
Having a single client is really useful, as it minimises work if you need to switch test management tools. If you need to move hundreds (thousands) of manual test cases over to a new tool and these are stored 'as code' then this should be as simple as creating a new client to post your tests to the new tool. One code file (and some references) need to change and then you are done. 

### Pipeline
In order to prevent changes which are yet to go through a peer review process being applied to the test case management tool, we created a pipeline and made it so that only the pipeline had the credentials required to use the API of the tool. This pipeline is triggered after a merge into the main branch, so whatever is in main is always correct.

### Tests!
Finally we wrote some tests. We used [vitest](https://vitest.dev/) as a test runner and leveraged various bits of context and describe blocks to structure our tests. 

# Conclusion
It is actually not that difficult to write gherkin style manual tests in code. Whether it makes sense for your team is very situational, but if you weren't considering it previously - maybe you should.



