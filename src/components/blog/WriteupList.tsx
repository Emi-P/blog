import { useEffect, useState } from 'react';

interface Writeup {
    title: string;
}

const WriteupList = () => {
    const [writeups, setWriteups] = useState<Writeup[]>([]);

    useEffect(() => {
        fetch('/writeups-names.json')
            .then(response => response.json())
            .then(data => setWriteups(data))
            .catch(error => console.error('Error fetching writeups:', error));
    }, []);
    return (
    <div className='WriteupList'>{writeups.map((writeup) => (
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
