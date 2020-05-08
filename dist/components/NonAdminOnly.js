"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var useAdmin_1 = require("../hooks/useAdmin");
/**
 * See documentation: [NonAdminOnly](https://devboldly.github.io/react-authless-admin/NonAdminOnly)
 *
 * A component wrapper that shows children to non-admins unless switched off site-wide by the [useAdmin hook](https://devboldly.github.io/react-authless-admin/useAdmin).
 *
 * This is for static sites that want to show components for non-admins (and hide for admins) but do not have user authentication.
 *
 * Anything wrapped in `NonAdminOnly` will be hidden when admin is switched on.
 *
 * See [AdminOnly](https://devboldly.github.io/react-authless-admin/AdminOnly) to hide components when admin is switched off.
 */
function NonAdminOnly(props) {
    var isAdminEnabled = useAdmin_1.useAdmin(props.localStorageKeyName)[0];
    return React.createElement(React.Fragment, null, (!isAdminEnabled || !!props.alwaysVisible) && props.children);
}
exports.NonAdminOnly = NonAdminOnly;
