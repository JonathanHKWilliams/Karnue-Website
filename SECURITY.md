# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability within the Karnue website, please send an email to info@karnue.com. All security vulnerabilities will be promptly addressed.

Please include the following information in your report:

- Type of vulnerability
- Steps to reproduce the issue
- Affected URL and parameters
- Any special configuration required to reproduce

## Security Measures

The Karnue website implements several security measures:

### Headers and Policies
- Content Security Policy (CSP)
- HTTP Strict Transport Security (HSTS)
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy

### Code Security
- TypeScript for type safety
- Static site generation
- Regular dependency updates
- Security audits

### Data Protection
- Environment variables for sensitive data
- No client-side exposure of secrets
- Secure form handling

## Third-Party Dependencies

We regularly audit our dependencies for security vulnerabilities using `npm audit` and keep all packages updated to their latest secure versions.

## Deployment

The website is deployed as a static site, which reduces the attack surface significantly by eliminating server-side code execution.
