import { render } from '@testing-library/react';

import { getDomain, getIcon } from './memberSocialIcon';

describe('getDomain', () => {
  it('extracts the bare domain from a standard URL', () => {
    expect(getDomain('https://x.com/begrad')).toBe('x.com');
  });

  it('strips a leading www subdomain', () => {
    expect(getDomain('https://www.instagram.com/begrad')).toBe('instagram.com');
  });

  it('strips a numbered www-like subdomain (www2, www3, ...)', () => {
    expect(getDomain('https://www2.github.com/begrad')).toBe('github.com');
  });

  it('falls back to the original string when it cannot parse a domain', () => {
    expect(getDomain('not-a-url')).toBe('not-a-url');
  });
});

describe('getIcon', () => {
  const dataIconOf = (domain: string): string | null => {
    const { container } = render(getIcon(domain));
    return container.querySelector('svg')?.getAttribute('data-icon') ?? null;
  };

  it('maps twitter.com and x.com to the x-twitter icon', () => {
    expect(dataIconOf('twitter.com')).toBe('x-twitter');
    expect(dataIconOf('x.com')).toBe('x-twitter');
  });

  it('maps instagram.com to the instagram icon', () => {
    expect(dataIconOf('instagram.com')).toBe('instagram');
  });

  it('falls back to the globe icon for an unrecognized domain', () => {
    expect(dataIconOf('example.com')).toBe('globe');
  });
});
