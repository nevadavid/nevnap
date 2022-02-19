const https = require('https');
const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const url = 'https://hu.wikipedia.org/w/api.php?action=parse&page=Magyar_n%C3%A9vnapok_list%C3%A1ja_d%C3%A1tum_szerint&prop=text&format=json';

function transform(items) {
	return items.map(
		(month) => {
			const days = [...month.querySelectorAll('ol li')];

			return days.map(
				(day) => {
					const names = (
						day.textContent
						.split(',')
						.map(
							name => (
								name
								.trim()
								.replace('*', '')
								.replace('((', '')
								.replace('))', '')
								.split(' ')
								.filter(Boolean)
								.flat()
							)
						)
						.filter(Boolean)
						.flat()
					);

					return names;
				},
			);
		},
	);
}

https.get(url, (res) => {
	let rawData = '';

	res.setEncoding('utf8');

	res.on('data', (chunk) => {
		rawData += chunk;
	});

	res.on('end', () => {
		try {
			const { parse } = JSON.parse(rawData);
			const dom = new JSDOM(parse.text['*']);
			const monthTrs = (
				[
					...dom.window.document.querySelectorAll('table tbody tr td'),
				]
				.filter(td => !!td.querySelector('ol'))
			);
			const result = transform(monthTrs);

			fs.writeFile('src/namedays.json', JSON.stringify(result, undefined, '\t'), () => {
				console.log('Saved src/namedays.json');
			});
		}
		catch(e) {
			console.log(e.message);
		}
	});
});
