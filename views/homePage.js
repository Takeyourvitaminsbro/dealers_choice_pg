

module.exports = (characters) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Potter Characters</title>
    <link rel="stylesheet" href="/style.css" />
</head>
<body>
    <h2>
    Main Harry Potter Characters:
    </h2>
    <div>
        <h3>List Characters:</h3>
        <button><a href ='/half-bloods'>Half-bloods</a></button>
    </div>
    ${characters.map(character => `
    <ul>
        <li><a href="/characters/${character.id}"> ${character.name} </a></li>
    </ul>`).join('')}
</body>
</html>`