const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7a911f0b1dmsh43394b413d82df2p1f63aejsn717e1b0ded12',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options1)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			mum7.innerHTML = response.temp
			mum1.innerHTML = response.feels_like
			mum2.innerHTML = response.humidity
			mum4.innerHTML = response.min_temp
			mum3.innerHTML = response.max_temp
			mum6.innerHTML = response.wind_speed
			mum5.innerHTML = response.wind_degrees
		})
		.catch(err => console.error(err));

		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=PALGHAR', options1)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			p7.innerHTML = response.temp
			p1.innerHTML = response.feels_like
			p2.innerHTML = response.humidity
			p4.innerHTML = response.min_temp
			p3.innerHTML = response.max_temp
			p6.innerHTML = response.wind_speed
			p5.innerHTML = response.wind_degrees
		})
		.catch(err => console.error(err));

		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=LONDON', options1)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			l7.innerHTML = response.temp
			l1.innerHTML = response.feels_like
			l2.innerHTML = response.humidity
			l4.innerHTML = response.min_temp
			l3.innerHTML = response.max_temp
			l6.innerHTML = response.wind_speed
			l5.innerHTML = response.wind_degrees
		})
		.catch(err => console.error(err));

		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=WASHINGTON', options1)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			w7.innerHTML = response.temp
			w1.innerHTML = response.feels_like
			w2.innerHTML = response.humidity
			w4.innerHTML = response.min_temp
			w3.innerHTML = response.max_temp
			w6.innerHTML = response.wind_speed
			w5.innerHTML = response.wind_degrees
		})
		.catch(err => console.error(err));



