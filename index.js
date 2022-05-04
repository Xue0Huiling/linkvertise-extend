const request = require('request')

class Linkvertise {
    constructor(AccountId = 0) {
        this.AccountId = AccountId
    }

    Shorten(Link = "https://google.com/") {
        return new Promise((Resolve, Reject) => {
            request("https://xanax.lol/tasks/create", {
                method: "POST",
                form: {
                    LinkvertiseId: this.AccountId,
                    WebURL: Link
                }
            }, (err, res) => {
                if(err) return console.error("An error occured when creating a task (request lib)")
                const Details = JSON.parse(res.body)
    
                if(!Details.success) return console.error(Details.message)

                Resolve({
                    token: Details.data.token,
                    url: Details.data.begin_url
                })
            })
        })
    }

    IsFinished(Token) {
        return new Promise((Resolve, Reject) => {
            request(`https://xanax.lol/tasks/didfinish?token=${Token}`, (err, res) => {
                if(err) return console.error(err)
                const Details = JSON.parse(res.body)

                Resolve(Details.finished)
            })
        })
    }
}

module.exports = Linkvertise