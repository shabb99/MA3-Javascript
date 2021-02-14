//Q1

function division (a, b) {
    return a % b;
}

const divideTwoNumber = (a = 0, b = 0) => {
    return a % b;
}; 

 console.log(divideTwoNumber(8, 4));


 //Q2 

 async function getVideoGames() {
	try {
		const repsonse = await fetch('https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating');
		const jsonResult = await repsonse.json();
		console.log(jsonResult);
		
			
			for (let i = 0; i <jsonResult.length; i++) {
                document.querySelector('main').innerHTML += `
                <div>
                <img src="${jsonResult[i].next}"
                <h2>${jsonResults[i].name}</h2>
                <p></p>
                </div
                
                `;
            }
		;
	} catch (error) {
		document.querySelector('.alert').innerHTML = showAlertTouser(
			'An error occured',
		);
	} finally {
		setTimeout(function () {
			document.querySelector('.alert').innerHTML = '';
		}, 3000);
		
	}
}

getVideoGames();

