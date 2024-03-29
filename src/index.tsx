import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';

import './index.css';
import {router} from './router';
import {ContextProvider} from './hoc';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <ContextProvider>
        <RouterProvider router={router}/>
    </ContextProvider>
);





