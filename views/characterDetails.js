module.exports = (character) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Potter Characters</title>
    <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <div>
        <div>
            <p class='charTitle'>
                <span>${character.id}. </span> ${character.name}   aka "${character.aka}"
            </p>
            <ul>
                <li> Blood status: ${character.blood}</li>
                <li> House: ${character.house}</li>
                <li> Wand: ${character.wand}</li>
                <li> Patronus: ${character.patronus}</li>
            </ul>
        </div>
    </div>
    <div>
    <a href='/'>Back</a>
    </div>
</body>
</html>`
