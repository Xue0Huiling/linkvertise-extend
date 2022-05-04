(async () => {
    const Linkvertise = require('./index')

    const Account = new Linkvertise(390447)

    const Link = await Account.Shorten("https://google.com/")
})()