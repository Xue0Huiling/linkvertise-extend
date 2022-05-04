# Linkvertise API Extender

---
Initializing the linkvertise class
```js
const Linkvertise = require('linkvertise-extend')
const UserId = 0
/*
UserId being the ID that you can find
at the end of your referral link
*/
const User = new Linkvertise(UserId)
```

Monetizing links
```js
/*
Returns {token: string, url: string}
token -> can be used to check if someone went to the monetized link
url -> where the user needs to go
*/
const Link = await User.Shorten("https://example.com/")
```

Checking if monetized link was visited
```js
const WasVisited = await User.IsFinished(token)
```