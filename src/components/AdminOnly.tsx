import * as React from 'react';
import { useAdmin } from '../hooks/useAdmin';

export interface AdminOnlyProps {
  /** Children that will only be visible when admin is enabled (via
   * [useAdmin](https://devboldly.github.io/react-authless-admin/useAdmin)).
   */
  children?: React.ReactNode;
  /** Optional. Set to `true` to always render this component's children regardless of whether admin is enabled. */
  alwaysVisible?: boolean;
  /** Optional. The admin enabled boolean value is retrieved from local storage. You can provide any local storage key name here. Defaults to `'react-authless-admin'` */
  localStorageKeyName?: string;
}

/**
 * See documentation: [AdminOnly](https://devboldly.github.io/react-authless-admin/AdminOnly)
 *
 * A component wrapper that hides children unless switched on site-wide by [useAdmin](https://devboldly.github.io/react-authless-admin/useAdmin).
 *
 * This is for static sites that want to show components to admins ([nonsensitive only](https://devboldly.github.io/react-authless-admin/AdminOnly#security-note)) but do not have user authentication to determine who is an admin or not.
 *
 * Anything wrapped in `AdminOnly` will be hidden unless admin is switched on.
 *
 * Things you hide should be:
 * - Useless to general users, even if they had access to it (which they do)
 * - Convenient for admins, such as direct links to edit content or other admin tools requiring a login
 *
 * > The content hidden should be useless to general users and convenient for admins.
 *
 * See [NonAdminOnly](https://devboldly.github.io/react-authless-admin/NonAdminOnly) to hide components when admin is switched on.
 */
export function AdminOnly(props: AdminOnlyProps): JSX.Element {
  const [isAdminEnabled] = useAdmin(props.localStorageKeyName);
  return <>{(isAdminEnabled || !!props.alwaysVisible) && props.children}</>;
}
