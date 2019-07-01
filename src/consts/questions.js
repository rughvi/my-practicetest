export const questionsEasy = [
    {
        index:1,
        time:10,
        question:'This is question 1 from easy category and pick one answer from below. How is it?',
        answers:{
            first:'answer 1',
            second:'answer 2',
            third:'answer 3',
            fourth:'answer 4'
        },
        expected:3
    },
    {
        index:2,
        time:15,
        question:'This is question 2 from easy category and pick one answer from below. How is it?',
        answers:{
            first:'answer 2',
            second:'answer 3',
            third:'answer 4',
            fourth:'answer 5'
        },
        expected:1
    }
]

export const questionsMedium = [
    {
        index:1,
        time:10,
        question:'This is question 1 from medium category and pick one answer from below. How is it?',
        answers:{
            first:'answer 1',
            second:'answer 2',
            third:'answer 3',
            fourth:'answer 4'
        },
        expected:2,
    }
]

export const questionsHard = [
    {
        index:1,
        time:5,
        question:'This is question 1 from hard category and pick one answer from below. How is it?',
        answers:{
            first:'answer 1',
            second:'answer 2',
            third:'answer 3',
            fourth:'answer 4'
        },
        expected:4
    }
]