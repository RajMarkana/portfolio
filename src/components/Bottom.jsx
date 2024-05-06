import React, { useState, useEffect } from 'react';
import { SiWindows11 } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { IoPartlySunny, IoMailOpen, IoNotifications } from "react-icons/io5";

const Bottom = ({ onClick,openMusic }) => {
    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
  

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const period = hours >= 12 ? 'PM' : 'AM';
            const displayHours = hours % 12 || 12; // Convert to 12-hour format
            const timeString = `${displayHours}:${minutes} ${period}`;
            setCurrentTime(timeString);

            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const year = now.getFullYear();
            const dateString = `${day}/${month}/${year}`;
            setCurrentDate(dateString);
        };

        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

  

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchInputKeyPress = (e) => {
        if (e.key === 'Enter') {
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            window.open(searchUrl, '_blank');
        }
    };

   

    return (
        <div className="bg-slate-200 text-gray-800 p-3 flex justify-between items-center backdrop-filter backdrop-blur-sm bg-opacity-20">
            <div className="flex items-center">
                <IoPartlySunny className='text-orange-500 text-3xl' />
                <div className="ml-2">42 ℃<br />Sunny</div>
            </div>

            <div className='flex justify-center items-center'>
                <button className=" text-blue-500 text-2xl font-bold py-2 px-3 rounded" onClick={onClick}>
                    <SiWindows11 />
                </button>
                <div className='bg-white border border-gray-300 flex items-center px-3 py-2 rounded-full justify-center'>
                    <CiSearch />
                    <input
                        type="text"
                        placeholder='search'
                        className='px-1 outline-none border-none w-28 rounded-full'
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        onKeyPress={handleSearchInputKeyPress}
                    />
                </div>
                <img onClick={onClick} className='w-9 mx-3 h-9 cursor-pointer ' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC+klEQVR4nO2RTUiTcRzHf3/o2AjskEF17g0x6YWKkIjsTcxpQ52mjCC6+J4FdQgqyA5ZGR56YYdGpnXp0kHbQfe+6d7S1EsHnTV6Bl6aMXPsG88jHTT/zzY3cw88X/hcf9/vhx+RGjVq1KjJVsImuhA20WzYREiF7yb6HTaRL/yadJQLmTZSaMZIWCN3Nno/fX1ByIjn1LmhAlM9hEyZ7KGu8ZeUtyECY08JOc0TCgW76RxXwPeIkCmzvVuxOLwHCfv+rLIwtBvh9/nwd7EQV8DdSciE0NttSDgK1pVv/dvBFbDdJ6yV6d58JJyF605saB9fwHKXkC6OB5sQ6t+BhLPov0HcD9xjmOnbidhwIRKuQzkL8TLTvwsJ95Gch3iJWQ4i4T6a8xAvCc9xKAHiCoycgBIgvkAxlABxBUZPQgkQX+AUlABxBbwlUALEFfCdhRIgvsB5KAHiBf5SKAHiCgTKoASIL1AOJUBcgWAFlABxBT5fQios+isx79Ei6i7PCvMerXQz1X4ZgSokIzaqw09XJeZsWgjDF7PCnE0r3RRvp7KBLzBWAzniwWpEPTpErBUIDDSgrOsNNDedYO2jYG0jYG2eJVrdYK0usBYnWIsDrFnEDtZkA2uygjVaJDStZpR2GuH6aJBuirfFjmQ7+ALjtZDjl7cacw4dAoMG5N12gF33LdHuTUHCvqoEa7Qgr30QwYEG6bbYkWyHjMBlyBEdqYFg1aHscR9YRwCsw8+XkARSlyh/aJRuix3JdvAFvjRAjuhoLQRrFTS3PGA3giskvBlJbGkzS7fFjmQ7+AITBsgR9dZBsFUvjf9LRwAFB7rTprDoGYoPv1omId4WO5Lt4Aos+PRxTFwBj6i3HoJNv1wgnU+0yH9CsOmlDrkNMa8+zhWImEtcmLwKHlGfAYK97l+BLEkI9jqpQ26D8Om0ky/w4ZgmYj7jWgjUxzF1DSuJ+q9AcNSvLrAWieblEuJtsWO1bnFTxFzi/PFu72augBo1atSooTTzB8lXzpkmXsXUAAAAAElFTkSuQmCC"></img>
                <button className=" text-blue-500 text-3xl font-bold py-2 px-3 rounded" onClick={() => { window.open("mailto:rajmarkana1324@gmail.com", '_blank'); }}>
                    <IoMailOpen />
                </button>
                <a href="https://vscode.dev/" className='w-fit' target='_blank'><img className='w-9 mx-3 h-9' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADv0lEQVR4nO2ZvWsUQRjGZ97VJogfaSSFQbC5bWyUYGMRsbWwsBObgIWFMWBmLid4gtGZBNTOzn9ABEHZGMzsLRo/Ck935hRUSBELQQIKIrkLEjMyG8479T5mde8L7oEpd+f57b4z88wMQn311VfH5FBxDKhY2sZfPXMfFA+jXhIQMQbUXwfqayctNty5ona94suUVzyFshpQNwuoGAcqNoz5cosAKu21ATmQ11tRd0ljTMRstXGoDRC11Nzqsuutjh+4pwc67RyhbLAFE3GrlnmoA/CrecWV1NzqBNIad8j8vQFMhFfPPDQDqIBk2m8+vbgLiHjSyDzYA3xsr/nMoyGgvmpmHmwB5oq6febP+/vMHG9jHloCYAYMD0cQC/fGNj8ZHAQiVmzNQ+IA194MYq4C4EoDU+uYyWl0+7Zj86gzKUaB+F/jmIdEAfibYeDybWS+qhkgNJ0famieiuNARCmWeSJKkM6dTgwAuFr803ylyU8Ok0dqPjeZOwPE/xHvy4t36LzYb55PDoDJz/UBNksKmLxYnVcgLWjcksFE3EF0YUf5HYkBYC4vNwQolxSTD9GVwm5MxPWY5tdMFvqzXzexMaA1xkxdsoEAJktwYTFOySwjIkZqdesmPY0Cl2eByx/NIZSG7HMNNNe4ZKh/F40HO+v157ZiIQMWngSmvlv9jct5Demg1lf/bsZIs77cVq3EDiscBS6/WUFcDTVkHlUDfEAkOGTTj9vSKMHDEeDyixWEadnnGhP/PpqYH7Ttwm0pABEjkAm+RF/YEgKz8L5Z0TsO4KQXjgIR36KSyAQarryyhgAuPyCuOldCQMXJaBBWD8opA5G3hzCTACu0fxADyZ2tGw3Suc1Zx/pPRAvfXXQjbMc0qjGm/qXmi5KBeFGKAwFMLUcRvZUAmPrTVlmG+g/RlNiNubweD0KuAVOtixJA/c9NzK8DFRdRNlsJc6xAY0FsxvM7iOeTD3NA/cf1s7v/yaF+7Tg9o85YRY/f/8Y7NFtINk4jujAMRLz9O/76gdmkN3rUYeFx4DLeuOCyBKyQ3IYm0sT8oDFcLhkzLtAJyy3lTDgKXH2NW1Ju8uuAxmZzji7M70FxNVM4CFytdBjgPzX7eh8wudS7AEbT+SFgUvUugBEr7AKuniQC4LX7aLGsbH4Ac+n9L0DKK051BiCCCLZgrm79E4AXHa+f69zxevWBAZeztgCprrrgqJLJQsDkRgOAbr1iqgi4HIsOybjSDpe9dclXlsPkMeDq/fabS0977pq1r75Qd+gnbk39qO0MuGMAAAAASUVORK5CYII="></img></a>
                <img onClick={openMusic} className='w-9 mx-3 h-9 cursor-pointer ' src="data:image/png;base64,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"/>
            </div>
            
            <div className="flex justify-center  items-center">
            
                <div className="mr-4">{currentTime}<br />{currentDate}</div>
                <IoNotifications className='text-xl' />
            </div>
            
        </div>
    );
};

export default Bottom;
