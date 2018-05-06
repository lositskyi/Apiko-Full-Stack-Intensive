const fs = require('fs');

const writeFile = (data) => {
	fs.appendFileSync("./weather.txt", `${data}\n`, function(err) {
	    if(err) {
	        return console.log(err);
	    }

	    console.log("The file was saved!");
	});
}

module.exports = writeFile;