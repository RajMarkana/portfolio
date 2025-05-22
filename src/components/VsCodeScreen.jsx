import React, { useState, useEffect } from 'react';
import { FaRegWindowMinimize, FaRegSquare, FaPlay } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { SiVisualstudiocode } from "react-icons/si";
import Editor from "@monaco-editor/react";

const VsCodeScreen = ({ closeScreen }) => {
    const [isMaximized, setIsMaximized] = useState(false);
    const [code, setCode] = useState('// Welcome to VS Code\n// Start coding here...\nconsole.log("Hello, World!");');
    const [consoleOutput, setConsoleOutput] = useState([]);
    const [showConsole, setShowConsole] = useState(false);

    const handleMaximize = () => {
        setIsMaximized(!isMaximized);
    };

    const handleEditorChange = (value) => {
        setCode(value);
    };

    const runCode = () => {
        try {
            // Clear previous console output
            setConsoleOutput([]);
            
            // Create a safe console.log override
            const logs = [];
            const safeConsole = {
                log: (...args) => {
                    logs.push(args.map(arg => 
                        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
                    ).join(' '));
                }
            };

            // Create a safe eval environment
            const safeEval = new Function('console', code);
            
            // Run the code with our safe console
            safeEval(safeConsole);
            
            // Update console output
            setConsoleOutput(logs);
            setShowConsole(true);
        } catch (error) {
            setConsoleOutput([`Error: ${error.message}`]);
            setShowConsole(true);
        }
    };

    return (
        <>
            <div className="bg-[#1e1e1e] rounded-tl-lg rounded-tr-lg w-full text-white p-3 flex justify-between items-center">
                <div className='flex justify-center items-center'>
                    <SiVisualstudiocode className='text-blue-500 text-xl' />
                    <p className='ml-2 text-sm'>Visual Studio Code</p>
                </div>
                <div className="flex justify-center items-center">
                    <button 
                        onClick={runCode}
                        className="mr-4 bg-blue-500 text-white px-3 py-1 rounded-full flex items-center"
                    >
                        <FaPlay className="mr-1" />
                        Run
                    </button>
                    <div className="mr-2 hover:bg-[#2d2d2d] p-2 cursor-pointer rounded-sm" onClick={closeScreen}>
                        <FaRegWindowMinimize className="text-gray-400" />
                    </div>
                    <div 
                        id="maximize" 
                        className="mr-2 hover:bg-[#2d2d2d] cursor-pointer p-2 rounded-sm"
                        onClick={handleMaximize}
                    >
                        <FaRegSquare className="text-gray-400" />
                    </div>
                    <div 
                        className="hover:bg-red-500 cursor-pointer rounded-sm text-2xl p-1 hover:text-white" 
                        onClick={closeScreen}
                    >
                        <IoMdClose />
                    </div>
                </div>
            </div>
            <div className="bg-[#1e1e1e] text-white rounded-bl-lg rounded-br-lg h-full flex flex-col">
                <div className="flex flex-col h-full">
                    <div className="flex-grow">
                        <Editor
                            height="100%"
                            defaultLanguage="javascript"
                            defaultValue={code}
                            theme="vs-dark"
                            onChange={handleEditorChange}
                            options={{
                                minimap: { enabled: true },
                                fontSize: 14,
                                wordWrap: 'on',
                                automaticLayout: true,
                                scrollBeyondLastLine: false,
                                lineNumbers: 'on',
                                renderLineHighlight: 'all',
                                matchBrackets: 'always',
                                autoClosingBrackets: 'always',
                                autoClosingQuotes: 'always',
                                formatOnPaste: true,
                                formatOnType: true,
                                scrollbar: {
                                    vertical: 'visible',
                                    horizontal: 'visible',
                                    useShadows: true,
                                    verticalScrollbarSize: 10,
                                    horizontalScrollbarSize: 10,
                                    arrowSize: 11,
                                },
                            }}
                        />
                    </div>
                    {showConsole && (
                        <div className="mt-4 bg-[#1e1e1e] border-t border-gray-700 p-4 flex-shrink-0">
                            <div className="text-gray-400 mb-2">Console Output:</div>
                            <div className="bg-[#252526] p-3 rounded-md font-mono text-sm overflow-y-auto max-h-40 custom-scrollbar">
                                {consoleOutput.map((output, index) => (
                                    <div key={index} className="text-gray-300">{output}</div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <style>
                {`
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 10px;
                        height: 10px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: #1e1e1e;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: #424242;
                        border-radius: 5px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: #4f4f4f;
                    }
                    .custom-scrollbar::-webkit-scrollbar-corner {
                        background: #1e1e1e;
                    }
                `}
            </style>
        </>
    );
};

export default VsCodeScreen; 