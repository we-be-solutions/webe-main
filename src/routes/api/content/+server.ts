import { json } from '@sveltejs/kit';

function getContent() {
	return 'Hello';
}

export async function GET() {
	const res = getContent();
	return json(res);
}
