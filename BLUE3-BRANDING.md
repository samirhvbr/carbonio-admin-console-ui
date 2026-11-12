<!--
SPDX-FileCopyrightText: 2026 Blue3

SPDX-License-Identifier: AGPL-3.0-only
-->

# Blue3 branding in this fork

This fork uses Blue3 as its default identity for the administration header logo, browser title, favicon and primary palette.
It is based on [Zextras/carbonio-admin-console-ui](https://github.com/zextras/carbonio-admin-console-ui) at `af9bbd871481b9d095e46b3678633e8b5a765dc4`.
Carbonio protocol names, package identifiers, copyright notices and upstream attribution are retained.

The bundled PNGs are the existing Blue3 wordmark and symbol, copied without modification
from the Blue3 visual identity assets. The light primary color is `#0071bc`; the supported
dark-mode primary color is `#29abe2`. The default logo link is <https://blue3.com.br>.

Explicit domain branding returned by the login configuration service takes precedence.
With no domain configuration (including Community Edition), the bundled Blue3 assets are used.
The browser title is **Blue3**. Branding assets are bundled with the UI, so its default logo
and icon do not depend on an external image host.

The backend fork is [samirhvbr/carbonio-mailbox](https://github.com/samirhvbr/carbonio-mailbox).
Build and install the matching frontend packages to use this identity in a running instance;
changing the backend alone does not replace separately distributed UI packages.
This source change does not deploy or modify an existing installation.
