"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_use_window_localstorage_1 = require("react-use-window-localstorage");
/**
 *
 * See documentation: [useAdmin](https://devboldly.github.io/react-authless-admin/useAdmin)
 *
 * This hook can be used to enable or disable admin-only components on a static site that lacks user authentication.
 *
 * Using this, components such as an edit content button (that takes you to an admin page elsewhere) can be hidden from all non-admin users.
 *
 * This is accomplished via a [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) value. This means switching admin on will persist between browser sessions unless the user clears their history.
 *
 * @param localStorageKeyName Optional. The [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) key name for the admin boolean. Defaults to `react-authless-admin`
 */
function useAdmin(localStorageKeyName) {
    var val = react_use_window_localstorage_1.useLocalStorageBoolean(typeof localStorageKeyName === 'string' ? localStorageKeyName : 'react-authless-admin', false);
    return val;
}
exports.useAdmin = useAdmin;
