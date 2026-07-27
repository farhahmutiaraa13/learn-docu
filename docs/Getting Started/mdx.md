---
title: MDX
sidebar_position: 3
---

export const Tag = ({children, color}) => (
    <span
    style={{
        backgroundColor: color,
        borderRadius:'4px',
        color: '#fff',
        padding: '0.2rem 0.5rem',
        fontWeight: 'bold',
    }}>
    {children}
    </span>
);

<Tag color="#FF5733">Important</Tag> information: This is an <Tag color="#3399FF">Exciting</Tag> example of custom components!

I can write **Markdown** alongside my _JSX_!