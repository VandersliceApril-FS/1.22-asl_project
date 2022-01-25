const quizIsValid = (req, res, next) => {
    const { name, weight } = req.body
    req.errors = []
    if (name.length <= 0) { req.errors.push('Quiz name cannot be empty.') }
    if (weight.length <= 0) { req.errors.push('Weight name cannot be empty.') }
    next()
}

const questionIsValid = (req, res, next) => {
    const { questionEntered } = req.body
    req.errors = []
    if (questionEntered.length <= 0 ) { req.errors.push('Please enter a question') }
}

module.exports = {
    quizIsValid, questionIsValid
}