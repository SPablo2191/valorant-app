
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';

export function UiNavbar() {
    const [visible, setVisible] = useState(false);
    const items: MenuItem[] = [
        {
            icon: 'pi pi-bars',
            command(event) {
                console.log(event);
                setVisible(true);
            },
        }
    ];
    return (<>
        <Menubar model={items} className='dark:bg-slate-800 border-transparent' />
        <Sidebar visible={visible} onHide={() => setVisible(false)} className='text-white dark:bg-slate-800 border-transparent'>
        </Sidebar>
    </>);
}