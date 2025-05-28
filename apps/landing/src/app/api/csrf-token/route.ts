// This file is a placeholder for the CSRF token API
// Note: API routes don't work with static exports (output: 'export')
// For a static site, consider using client-side CSRF protection or a serverless function

export const dynamic = 'force-static';

export async function GET() {
  return new Response(JSON.stringify({
    message: 'For static sites, implement CSRF protection via client-side techniques or external services'
  }), {
    status: 200,
    headers: {
      'content-type': 'application/json'
    }
  });
}
