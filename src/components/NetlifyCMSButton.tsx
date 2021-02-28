import * as React from 'react';

export interface NetlifyCMSButtonProps {
  /** The name of the collection in Netlify CMS, such as `posts` or `pages`. Will be URI encoded. */
  collection?: string;
  /** The name of the entry in Netlify CMS, which is used as the page slug.  Will be URI encoded. For example, `hello-world` for a post titled Hello World. */
  entry?: string;
  /** The root path to the Netlify CMS admin page. Defaults to `/admin`. Can be relative or absolute and should not end with a slash. */
  adminRootPath?: string;
  /** Provide your own component, if you'd like. Defaults to a `button` component. */
  component?: any;
  /** Provide component props if you'd like. */
  componentProps?: any;
  /** Provide children for the button. Use this to change the button's content. Defaults to `'Edit'` */
  children?: React.ReactNode;
  /** Manually specify the href used for the button. The `adminRootPath`, `collection`, and `entry` props will be ignored. */
  href?: string;
  /** When `true`, the button opens Netlify CMS in a new window. Defaults to `false` */
  openInNewWindow?: boolean;
}

/**
 * See documentation: [NetlifyCMSButton](https://justinmahar.github.io/react-authless-admin/NetlifyCMSButton)
 *
 * A button that takes you to a specific entry or collection in [Netlify CMS](https://www.netlifycms.org/).
 *
 * The button should be given the `collection` name and `entry` name for the Netlify CMS admin page you'd like the button to visit. You can also give it an `href` to manually specify the destination.
 *
 * For static sites that use Netlify CMS but do not have user authentication, place the button inside an [AdminOnly](https://justinmahar.github.io/react-authless-admin/AdminOnly) and use the [useAdmin hook](https://justinmahar.github.io/react-authless-admin/useAdmin) to make it visible for admins.
 */
export function NetlifyCMSButton(props: NetlifyCMSButtonProps): JSX.Element {
  let href = props.href;

  // If not manually specified with href, build the link to the content,
  // linking as deep as we can given the props provided
  if (typeof href === 'undefined') {
    href = `${props.adminRootPath}/#/`;
    if (props.collection) {
      href += `collections/${encodeURIComponent(props.collection)}/`;
      if (props.entry) {
        href += `entries/${encodeURIComponent(props.entry)}`;
      }
    }
  }

  const linkProps = props.openInNewWindow ? { target: '_blank', rel: 'noopener noreferrer' } : undefined;
  const Button = props.component;
  return (
    <a href={href} {...linkProps}>
      <Button {...props.componentProps}>{props.children}</Button>
    </a>
  );
}

NetlifyCMSButton.defaultProps = {
  alwaysVisible: false,
  adminRootPath: '/admin',
  component: ({ children, ...rest }: { [x: string]: any }) => <button {...rest}>{children}</button>,
  componentProps: { title: 'Edit' },
  children: 'Edit',
};
