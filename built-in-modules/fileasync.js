const {readFile, writeFile} = require('fs');

    console.log('Start.');

    readFile('./content/one.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const one = result;

        readFile('./content/test.txt', 'utf8', (err, result) =>{
            if (err) {
                console.log(err);
                return;
            }
            const two = result;

            writeFile(
                './content/result-async.txt',
                `Heyyyyy, ${one}, ${two}`, (err, result) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log('All Tasks Done');
                }
            )
        }
            
        )
    }
    )