'use strict';

const { promises: fs } = require("fs");

async function compileQuestions() {
  const files = await fs.readdir('./questions/')
  var result = 'export default [\n'

  for await (const file of files) {
    if(file.match(/^(\.git.*|example.json)/)) {
      console.log(`Ignoring ${file}`)
      continue
    }
    else {
      console.log(`Packaging ${file}`)
      const contents = await (await fs.readFile(`./questions/${file}`)).toString()
      result += contents
      result += ',\n'
    }
  }

  result += ']'
  await fs.writeFile("./src/compiledQuestions.js", result)
  console.log('Finished compiling questions')
}

compileQuestions()
