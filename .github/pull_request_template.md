This PR resolves Issue #\__issueNumber_

#Change Summary

- Added component \__a_
- Updated feature **b\_ to do **c* when \_\_d*

##I Had Difficulty With

- \__problem_

#Code Review
###Starting File
`/src/components/foo.tsx`

##Visual Example
_Video or screenshot which shows the app with this new code applied_

##Testing Steps
###Example without required interaction

1. Visit `/activities`
2. Observe initial sort is by Name, descending

###Example with required interaction

1. Visit `/activities`
2. Invoke `Sort Popularity ASC` button
   1. Observe Activities sorted by highest Votes first
   2. Observe button text changes to `Sort Popularity DESC`
3. Invoke `Sort Popularity DESC` button
4. Observe Activities sorted by lowest Votes first
5. Observe button text changes to `Sort Popularity ASC`

##Testing Checklist

- [ ] Deleted all debug/log messages
- [ ] Deleted all commented-out code
- [ ] Merged latest `origin/dev` changes into branch
  - [ ] Addressed any merge conflicts
- [ ] Verified no linter errors/warnings
- [ ] Ran app locally
  - [ ] Verified new functionality
  - [ ] Verified no console errors

##Dangers -OPTIONAL

- This code is at risk of breaking:

  - \__description_
  - \__testingPlan_

- This code should not be merged until \__blockingCondition_

##TODO Items -OPTIONAL

- Breaking this Issue into multiple PRs:
  - \__reasoning_
- Was unable to implement aspects of this Issue:
  - \__reasoning_
    - Created Issue: #\_
- Found a bug or identified other new work:
  - \__description_
  - Created Issue: #\_
