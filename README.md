# Interview Note-Taking App

An app for taking notes during conversational interviews.Stores notes locally in the browser.

For obvious reasons I don't want to actually publish the set of questions I ask candidates. So the app is setup such that you can add questions as JSON config files before build, and they are gitignored so they don't end up in version control.

## Run Tests

`npm run test`

To use a watch, pass `--watch` argument.

## Setup

By default the app won't have any questions in it. Copy `questions/example.json` and fill in some questions. Each file in `questions/` represents a category of questions.

## Run in dev mode

`npm run start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. Uses a watch, will re-build changed files and update in the browser. However, **changes to `questions/` whill not be updated until the app is restarted**. This is because it relies on code generation.

## Build

`yarn build`

Builds the app to `build/index.html`. All CSS, JS, etc is bundled in one file.

## Motivation

**Candidates should be interviewed on equal footing**. If my questions are not broad enough then I may inadvertently ask a candidate some questions that they aren't equipped to handle while missing other just as important questions that may have better demonstrated their skill, or visca-versa. I should strive not to get caught in local maxima/minima hills/valleys and instead ask a broader set of questions, which should ensure candidates have more opportunities to prove themselves. Similarly, questions should be consistent- asking about significantly different areas in different interviews may not be fair to candidates.

**An interview should be a conversation**. The intention is not for these questions to be overly specific or to turn interviewing into a tick-box exercise. They're intended for use as reminders, to make it easier to guide the conversation in helpful directions. I hope to be able to quickly scroll through the app and see which areas I haven't yet taken many notes in yet, where I haven't dug deep enough in yet and use the questions as reminders to help expand that area.

**A webapp for this specific purpose is better than a text editor**. I would think this, because I enjoy writing code for code's sake anyway. But having done dozens of interviews with GDocs sat in front of me I do think that a webapp designed for the purpose could be much more helpful.

**An interviewer should iterate on and improve their set of questions over time**. I want to think seriously about the questions I ask in interviews, try new approaches, learn what does and doesn't work, and keep improving.

## Todo

* Select which categories to show.
  * Not every candidate is likely to apply to every category- this way you can select which categories to test a candidate on beforehand the interview starts.
  * Eg some categories might be "dotnet", "java", "javascript" and you could select from them the languages that this candidate has experience in.
  * App should remember which categories were selected for which candidate
  * Each category should have an option 
* When switching to a candidate, automatically expand the `Option`s that have answers already and minimise the ones that don't.
* Export the data in some format
* Come up with a better name
