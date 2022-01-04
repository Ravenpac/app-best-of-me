const questions = [
  'O que aprendi hoje?',
  'O que me deixou aborrecido?',
  'O que eu poderia fazer para melhorar?',
  'O que me deixou feliz hoje?',
  'Quantas pessoas ajudei hoje?'
]

const ask = (index = 0) => {
  process.stdout.write(questions[index] + '\n\n')
}

ask()

const answers = []
process.stdin.on('data', data => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    console.log(answers)
    process.exit()
  }
})

process.on('exit', () => {
  console.log(`
  Banaca Raven!
  
  O que você aprendeu hoje foi:
  ${answers[0]}
  
  O que te aborreceu foi:
  ${answers[1]}
  
  Em que você poderia melhorar:
  ${answers[2]}
  
  O que te deixou feliz hoje foi:
  ${answers[3]}
  
  Você ajudou ${answers[4]} pessoas hoje!!
  
  Volte amanhã para novas reflexões
  `)
})
