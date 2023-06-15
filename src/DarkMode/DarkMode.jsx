import { useEffect, useState } from "react";


const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const body = document.body;
        if (isDarkMode) {
            body.classList.add('dark'); // Apply the dark mode class to the body
        } else {
            body.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <button onClick={toggleTheme}>
            {isDarkMode ? <p className="bg-black w-full">Dark</p> : <p className="bg-white">White</p>}
        </button>
    );
};

export default DarkMode;