---
title: Codeblocks
sidebar_position: 6
---

```jsx title="Codeblock"
function Greeting(props) {
    return <p>Welcome, {props.userName}!</p>;
}

export default Greeting;
```

```jsx title="Highlight Lines"
function HighlightText(highlight) {
    if (hightlight) {
        // highlight-next-line
        return 'This text is highlighted!';
    }
    return 'Nothing hightlighted';
}

function HighlightMoreText(highlight) {
    if (hightlight) {
        // highlight-start
        return 'This range is highlighted!';
    }
    // highlight-end
    return 'Nothing hightlighted';
}
```

```jsx title="Line Numbers" showLineNumbers
import React from 'react';

function useProfile(props) {
    const { username, email, isAdmin } = props;

    return (
        <div>
            <h1>User Profile</h1>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            {isAdmin && <p>Admin User</p>}
        </div>
    );
}

export default UseProfile;
```

```jsx title="Line Numbers with Highlight" {4,9-11} showLineNumbers
import React from 'react';

function useProfile(props) {
    const { username, email, isAdmin } = props;

    return (
        <div>
            <h1>User Profile</h1>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            {isAdmin && <p>Admin User</p>}
        </div>
    );
}

export default UseProfile;
```
