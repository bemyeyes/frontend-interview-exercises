# BME Frontend Exercises

## Exercise 1 - Code Review

- Run `yarn code-review` and open `http://localhost:3000`
- Perform a code review. 
  - Be as critical as possible
  - Don't be shy, this was written by an external developer and we have since refactored it.

## Exercise 2 - React + Redux

- Run `yarn dev` to start the react server on `http://localhost:3000`

### Task 1

- We have a mock API that returns a list of call invites.
- We want to fetch the call invites and display them as a list.
- Use redux and the existing redux actions and reducers in `store/invites`

### Task 2

- Now we want the page to continuously poll for new invites every 3 seconds.
- Edit the page to do that.

### Task 3

- We want other pages to also be able to poll for new invites.
- Refactor the page to use a custom hook that can be used by other pages.
