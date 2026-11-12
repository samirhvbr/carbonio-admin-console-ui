/*
 * SPDX-FileCopyrightText: 2026 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { loginConfig } from '../login-config';

describe('Blue3 admin branding', () => {
  beforeEach(() => {
    document.head.innerHTML = '<link id="favicon" rel="icon">';
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('uses Blue3 for missing or empty branding', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(Response.json({})));
    await loginConfig();
    expect(document.title).toBe('Blue3');
    expect(document.getElementById('favicon')?.getAttribute('href')).toBe('favicon.png');
  });

  it('keeps explicitly configured domain branding', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        Response.json({
          carbonioAdminUiTitle: 'Domain administration',
          carbonioAdminUiFavicon: 'https://example.test/favicon.png',
        }),
      ),
    );
    await loginConfig();
    expect(document.title).toBe('Domain administration');
    expect(document.getElementById('favicon')?.getAttribute('href')).toBe(
      'https://example.test/favicon.png',
    );
  });
});
