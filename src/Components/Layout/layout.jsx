import Sidebar from '../Sidebar/sidebar';
import {Outlet} from 'react-router-dom'
import './layout.scss';

export default function Layout() {
    return (
        <div className='App'>
        <Sidebar />
        <div className="page">
            <span className='tags top-tags'>&lt;body&gt;</span>
            <Outlet />
            <span className="tags bottom-tags">&lt;/body&gt;</span>
            <br />
            <span className="tags bottom-tag-html">&lt;/html&gt;</span>
        </div>
        </div>
    )
}