import * as React from 'react';
import { useAdmin } from '../hooks/useAdmin';

export interface NonAdminOnlyProps {
  /** Children that will only be visible when admin is disabled. */
  children?: React.ReactNode;
  /** Optional. Set to `true` to always render this component's children regardless of whether admin is disabled. */
  alwaysVisible?: boolean;
  /** Optional. The admin enabled boolean value is retrieved from local storage. You can provide any local storage key name here. Defaults to `'react-authless-admin'` */
  localStorageKeyName?: string;
}

/**
 * See documentation: https://devboldly.github.io/react-authless-admin/NonAdminOnly
 *
 * A component wrapper that shows children to non-admins unless switched off site-wide by the [useAdmin hook](https://devboldly.github.io/react-authless-admin/useAdmin).
 *
 * This is for static sites that want to show components for non-admins (and hide for admins) but do not have user authentication.
 *
 * Anything wrapped in `NonAdminOnly` will be hidden when admin is switched on.
 *
 * See [AdminOnly](https://devboldly.github.io/react-authless-admin/AdminOnly) to hide components when admin is switched off.
 */
export function NonAdminOnly(props: NonAdminOnlyProps): JSX.Element {
  const [isAdminEnabled] = useAdmin(props.localStorageKeyName);
  return <>{(!isAdminEnabled || !!props.alwaysVisible) && props.children}</>;
}
