import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'

// function MyApp() {
//     return (
//         <>
//             <p>ajit is best</p>


//         </>
//     )

// }

const secondElement = React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    'click me to visit google '


)

createRoot(document.getElementById('root')).render(

    <App />

)
