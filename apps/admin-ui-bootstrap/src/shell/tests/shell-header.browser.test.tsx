/*
 * SPDX-FileCopyrightText: 2026 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { useLoginConfigStore } from '@zextras/ui-shared';
import { setupBrowserTest } from 'admin-ui-test-utils';
import { page } from 'vitest/browser';

import { ShellHeader } from '../shell-header';

describe('Blue3 admin header', { timeout: 20_000 }, () => {
  beforeEach(() => {
    useLoginConfigStore.setState({
      carbonioAdminUiAppLogo: undefined,
      carbonioAdminUiDarkAppLogo: undefined,
      carbonioLogoURL: undefined,
    });
  });

  it('renders the bundled Blue3 logo without domain branding', async () => {
    await setupBrowserTest(<ShellHeader activeRoute={undefined} />);
    await expect.element(page.getByRole('img', { name: 'Blue3' })).toBeVisible();
    await expect
      .element(page.getByRole('link', { name: 'Blue3' }))
      .toHaveAttribute('href', 'https://blue3.com.br');
  });

  it('keeps the domain logo and link', async () => {
    useLoginConfigStore.setState({
      carbonioAdminUiAppLogo: '/custom-logo.png',
      carbonioLogoURL: 'https://example.test',
    });
    await setupBrowserTest(<ShellHeader activeRoute={undefined} />);
    await expect
      .element(page.getByRole('img', { name: 'logo' }))
      .toHaveAttribute('src', '/custom-logo.png');
    await expect
      .element(page.getByRole('link', { name: 'logo' }))
      .toHaveAttribute('href', 'https://example.test');
  });
});
