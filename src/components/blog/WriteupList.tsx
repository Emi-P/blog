
import { div, hr } from 'framer-motion/client';
import React, { useEffect, useState } from 'react';
import { data } from 'react-router-dom';

interface Writeup {
    title: string;
}

const WriteupList = () => {
    const [writeups, setWriteups] = useState<Writeup[]>([]);

    useEffect(() => {
        fetch('/blog/writeups-names.json')
            .then(response => response.json())
            .then(data => setWriteups(data))
            .catch(error => console.error('Error fetching writeups:', error));
    }, []);
    return (
    <div className='WriteupList'>{writeups.map((writeup, index) => (
                <a href={"writeups/"+`${writeup.title}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="WriteupListItem text-center">
                    &gt; {writeup.title}
                    </div>
                </a>
        ))}
    </div>
    );
};

export default WriteupList;
