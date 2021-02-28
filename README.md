<h2 align="center">
  <a href="https://github.com/justinmahar/react-authless-admin">React Authless Admin</a>
</h2>
<h3 align="center">
  Show admin-only content on React sites lacking user authentication.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/react-authless-admin">
    <img src="https://badge.fury.io/js/react-authless-admin.svg" alt="npm Version"/>
  </a>
  <a href="https://github.com/justinmahar/react-authless-admin/actions?query=workflow%3ATests">
    <img src="https://github.com/justinmahar/react-authless-admin/workflows/Tests/badge.svg" alt="Tests Status"/>
  </a>
  <a href="https://github.com/justinmahar/react-authless-admin/actions?query=workflow%3ADeploy">
    <img src="https://github.com/justinmahar/react-authless-admin/workflows/Deploy/badge.svg" alt="Deploy Status"/>
  </a>
</p>

## Documentation

Read the **[official documentation](https://justinmahar.github.io/react-authless-admin/)**.

[![Demo](./src/__docz__/images/demo.gif "Demo")](https://justinmahar.github.io/react-authless-admin/demo)

👁️ **[Live Demo](https://justinmahar.github.io/react-authless-admin/demo)**

## Overview

This project features a simple, local-storage-based means of hiding nonsensitive admin-only content from non-admins on sites that lack user authentication.

Some examples include Edit Content links at the end of posts, links to analytics, and links to other useful admin-only pages.

Just wrap your admin-only content in an [AdminOnly](https://justinmahar.github.io/react-authless-admin/AdminOnly) tag and reveal it with [useAdmin](https://justinmahar.github.io/react-authless-admin/useAdmin).

### Features include:

- **🎛️ Add admin-only controls to your authless site**
  - Make life easier for admins without adding useless clutter for non-admins.
- **🌞 Simplest solution**
  - Hide nonsensitive admin content without the overkill of external auth dependency.
- **🌐 Site-wide and persistent between sessions**
  - One setting to affect the whole site. Uses local storage for persistence.
- **🙈 Cater content to both non-admins and admins**
  - Show and hide content from both types of users, simulating the feel of being logged in.
- **👩‍🎨 Admin role support**
  - Show or hide content for different admin roles using custom local storage key names.
- **📝 Netlify CMS button**
  - Using Netlify CMS? A button is included to make linking to collections and entries easy.

## Why use this?

Imagine you have a piece of content on a static [Jamstack](https://jamstack.org/) blog that has no user login system. You author the content yourself, maybe with [Netlify CMS](https://www.netlifycms.org/), in markdown and trigger a build and deploy on every publish.

As an admin, when viewing your site you want to be able to easily edit this content without having to search for it manually either in GitHub or Netlify CMS. A server-based CMS like WordPress would show you an Edit Content button, but since our site has no concept of user auth, it has no idea you're an admin.

You could integrate with an external auth system, but there's a much simpler way.

With `react-authless-admin`, you can wrap your admin-only links in [AdminOnly](https://justinmahar.github.io/react-authless-admin/AdminOnly) and they will show up site-wide when toggled by [useAdmin](https://justinmahar.github.io/react-authless-admin/useAdmin). Similarly, you can wrap any content for non-admin users inside [NonAdminOnly](https://justinmahar.github.io/react-authless-admin/NonAdminOnly).

This allows you to easily control content that's useless to general users, but useful if you're an admin, without needing an auth integration. Check out the [demo](https://justinmahar.github.io/react-authless-admin/demo) for an example.

## Installation

```
npm i react-authless-admin
```

## Quick Start

- Hide content from non-admins with [AdminOnly](https://justinmahar.github.io/react-authless-admin/AdminOnly).
- Hide content from admins with [NonAdminOnly](https://justinmahar.github.io/react-authless-admin/NonAdminOnly).
- Use the [useAdmin hook](https://justinmahar.github.io/react-authless-admin/useAdmin) to switch admin on and off.

```jsx
import { AdminOnly, NonAdminOnly, useAdmin } from "react-authless-admin";
```

```jsx
const [isAdmin, setIsAdmin] = useAdmin();
```

```jsx
<button onClick={() => setIsAdmin(!isAdmin)}>{ isAdmin ? 'Switch Off' : 'Switch On' }</button>
<AdminOnly>
  This content is only visible when admin is enabled.
</AdminOnly>
<NonAdminOnly>
  This content is only visible when admin is disabled.
</NonAdminOnly>
```

The above will show a button that toggles admin on and off, and will toggle two elements on the page.

See the [demo](https://justinmahar.github.io/react-authless-admin/demo) for an example of using a passcode to reveal admin-only components to manage a post.

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

## Logo Attribution

Logo graphics by [Twemoji](https://github.com/twitter/twemoji), licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/). Favicon by [favicon.io](https://favicon.io/emoji-favicons/).

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

See [Kindling](https://tinyurl.com/kindlingscripts) for npm script documentation.

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-authless-admin/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-authless-admin/stargazers): [👉⭐](https://github.com/justinmahar/react-authless-admin/stargazers)

## MIT License

```
Copyright © 2020 Justin Mahar https://github.com/justinmahar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
