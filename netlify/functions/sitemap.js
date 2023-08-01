const baseUrl = 'https://www.kas-devsolutions.com';

const mainPage = { path: '/', priority: '1.0' };

const generateSitemapXml = () => {
	let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
	sitemapXml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

	const url = `${baseUrl}${mainPage.path}`;
	sitemapXml += `  <url>\n`;
	sitemapXml += `    <loc>${url}</loc>\n`;
	sitemapXml += `    <priority>${mainPage.priority}</priority>\n`;
	sitemapXml += `  </url>\n`;

	sitemapXml += `</urlset>`;
	return sitemapXml;
};

exports.handler = async (event, context) => {
	const sitemapXml = generateSitemapXml();

	return {
		statusCode: 200,
		headers: {
			'Content-Type': 'application/xml',
		},
		body: sitemapXml,
	};
};
