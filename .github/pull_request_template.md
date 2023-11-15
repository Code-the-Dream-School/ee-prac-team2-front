This PR resolves Issue #

# Change Summary

- Added component \__a_
- Updated feature \__b_ to do \__c_ when \__d_

## I Had Difficulty With

_I initially tried to implement this using our existing components, but ran into <these issues>, so I decided to add a third party component for this task._

# Code Review

### Starting File

`/src/components/foo.tsx`

## Visual Example

[//]: # "_Video or screenshot which shows the app with this new code applied_"

## Testing Steps

[//]: # "Simple example"

1. Visit `/activities`
2. Observe initial sort is by Name, descending

[//]: # "Detailed example"

1. Visit `/activities`
2. Invoke `Sort Popularity ASC` button
   1. Observe Activities sorted by highest Votes first
   2. Observe button text changes to `Sort Popularity DESC`
3. Invoke `Sort Popularity DESC` button
4. Observe Activities sorted by lowest Votes first
5. Observe button text changes to `Sort Popularity ASC`

## Testing Checklist

- [ ] Deleted all debug/log messages
- [ ] Deleted all commented-out code
- [ ] Merged latest `origin/dev` changes into branch
  - [ ] Addressed any merge conflicts
- [ ] Verified no linter errors/warnings
- [ ] Ran app locally
  - [ ] Verified new functionality
  - [ ] Verified no console errors

## Dangers

- This code is at risk of breaking something:
  - _I refactored <this class> to be reused. I tested the other places that class is used as best I could, but other testers and stakeholders should know that there have been code changes in that area._
- This code should not be merged until:
  - _This PR relies on my changes from PR #. Please review and merge that code first, and then I'll update this branch to include those changes before final code review._

## TODO

- Breaking this Issue into multiple PRs:
  1. _My code formatter is set to update the entire project based on modern industry standard formatting, so I'm committing the changes it made to improve our code style._
  2. _The second PR will focus on the new functionality specified by the Issue_
- Was unable to implement aspects of this Issue:
  - _Since the purpose of this task was to get something working and shipped quickly, I decided to ignore typescript for now._
  - _I created Issue # to come back and add it later_
  - _Because we are going to revisit this functionality soon, I decided not to spend too much time on <this bit> so that we can prioritize shipping._
    - _I created Issue # to come back and add it later_
- Found a bug or identified other new work:
  - _I realized we didn't include an `Error` component in this milestone. I couldn't find an Issue for it._
    - _I created Issue # so we don't forget to come back and replace this placeholder error_
