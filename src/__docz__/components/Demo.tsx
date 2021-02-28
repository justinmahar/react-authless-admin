import * as React from 'react';
import { useAdmin } from '../../hooks/useAdmin';
import { AdminOnly } from '../../components/AdminOnly';
import { NonAdminOnly } from '../../components/NonAdminOnly';
import { NetlifyCMSButton } from '../../components/NetlifyCMSButton';

export function Demo(): JSX.Element {
  const [isAdmin, setIsAdmin] = useAdmin();
  const [enteredPasscode, setEnteredPasscode] = React.useState('');
  const PASSCODE = 'sushi';
  const adminRootPath = '/react-authless-admin/admin';
  return (
    <div>
      <div>
        <h4>Lorem Ipsum</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ex est, interdum sed vulputate vel, vulputate vel
          diam. Etiam vel dolor arcu. Suspendisse consequat purus eget lectus vulputate tincidunt. Sed in lorem
          efficitur, aliquet ipsum a, lacinia libero. Aliquam tempor arcu in est fringilla mattis. In hac habitasse
          platea dictumst. Morbi mi mi, fringilla in luctus eu, vulputate quis erat. Nulla sodales ex urna, vel ornare
          quam bibendum ac. In eu ligula erat.
        </p>
        <AdminOnly>
          <div>
            <NetlifyCMSButton collection="posts" entry="lorem-ipsum" adminRootPath={adminRootPath}>
              ✏️ Edit Content
            </NetlifyCMSButton>
          </div>
        </AdminOnly>
      </div>
      <AdminOnly>
        <div style={{ border: 'solid 1px lightgray', padding: '10px', display: 'inline-block' }}>
          <NetlifyCMSButton collection="posts" adminRootPath={adminRootPath}>
            All Posts
          </NetlifyCMSButton>
          <NetlifyCMSButton collection="settings" entry="post-settings" adminRootPath={adminRootPath}>
            Post Settings
          </NetlifyCMSButton>
          <NetlifyCMSButton collection="settings" entry="discussion-settings" adminRootPath={adminRootPath}>
            Discussion Settings
          </NetlifyCMSButton>
          <button onClick={() => setIsAdmin(!isAdmin)}>Logout</button>
        </div>
      </AdminOnly>
      <NonAdminOnly>
        <div>
          <hr />
          <input
            type="text"
            placeholder="Enter the passcode"
            value={enteredPasscode}
            onChange={(e) => setEnteredPasscode(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && setIsAdmin(enteredPasscode === PASSCODE)}
          />
          <button onClick={() => setIsAdmin(enteredPasscode === PASSCODE)}>Login</button>
          <div>
            <small>(The passcode is sushi)</small>
          </div>
        </div>
      </NonAdminOnly>
    </div>
  );
}
