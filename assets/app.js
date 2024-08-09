const app = document.querySelector('#app')

const examQuestionAndAnswers = [
    {
        question: 'What is the combination of letters and number to identify a radio station known as?',
        choices: [
            'alphanumeric',
            'license',
            'handle',
            'call_sign'
        ],
        answer: 'call_sign'
    },
    {
        question: 'How long should a radio logbook with distress traffic be kept?',
        choices: [
            '5_years',
            '2_years',
            '6_years',
            'until_the_license_expires'
        ],
        answer: '5_years'
    },
    {
        question: 'What government agency is responsible for the regulation of the amateur radio service?',
        choices: [
            'NSO',
            'NIA',
            'NTC',
            'NHA'
        ],
        answer: 'ntc'
    },
    {
        question: 'How long must be a radio logbook be kept?',
        choices: [
            '5_years',
            '2_years',
            '6_months',
            'until_the_license_expires'
        ],
        answer: '2_years'
    },
]

function renderExam() {
    const examList = document.createElement('ul')

    examQuestionAndAnswers.forEach(function (object) {
        let list = document.createElement('li')
        let question = document.createElement('p')
        let choicesContainer = document.createElement('div')
        let answer = object.answer

        let choices = object.choices
        choices.forEach(function (item) {
            let itemContainer = document.createElement('div')
            let input = document.createElement('input')
            input.setAttribute('type', 'radio')
            input.setAttribute('name', answer)

            let text = item.replace(/_/g, " ")
            let words = text.split(" ")
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }
            let textContent = words.join(" ");

            itemContainer.textContent = textContent
            itemContainer.appendChild(input)
            choicesContainer.appendChild(itemContainer)
        })

        question.textContent = object.question

        list.appendChild(question)
        list.appendChild(choicesContainer)
        examList.appendChild(list)
    })

    app.appendChild(examList)
}

renderExam()