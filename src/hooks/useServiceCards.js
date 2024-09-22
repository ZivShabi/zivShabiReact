import { useState } from 'react';

export function useServiceCards() {
    const [serviceCards] = useState(() => [
        {
            icon: 'fa-brands fa-react text-primary',
            title: 'Service tool One',
            description: 'אנו מספקים שירותי פיתוח React מתקדמים, עם דגש על ביצועים ונגישות.',
            modalId: 'serviceModal1'
        },
        {
            icon: 'fa-brands fa-js text-warning',
            title: 'Service tool Two',
            description: 'בניית אפליקציות JavaScript דינמיות וחדשניות עם ביצועים יוצאי דופן.',
            modalId: 'serviceModal2'
        },
        {
            icon: 'fa-brands fa-bootstrap text-info',
            title: 'Service tool Three',
            description: 'עיצוב ובנייה עם Bootstrap ליצירת אתרים מגיבים ואטרקטיביים.',
            modalId: 'serviceModal3'
        },
        {
            icon: 'fa-brands fa-node-js text-success',
            title: 'Service tool Four',
            description: 'פיתוח Backend עם Node.js כדי לבנות אפליקציות סקלביליות ויעילות.',
            modalId: 'serviceModal4'
        },
        {
            icon: 'fa-brands fa-database text-dark',
            title: 'Service tool Six',
            description: 'ניהול מסדי נתונים עם MongoDB כדי להתמודד עם כמויות נתונים גדולות בצורה יעילה.',
            modalId: 'serviceModal6'
        },
        {
            icon: 'fa-brands fa-react text-blue',
            title: 'Service tool Seven',
            description: 'אייקון שמייצג שימוש ב-JSX במסגרת React.',
            modalId: 'serviceJsx'
        },
        {
            icon: 'fa-brands fa-npm text-red',
            title: 'Service tool Eight',
            description: 'אייקון שמייצג שימוש ב-npm לניהול חבילות.',
            modalId: 'serviceNpm'
        },
        {
            icon: 'fa-brands fa-js-square text-primary',
            title: 'Service tool Nine',
            description: 'אייקון שמייצג שימוש ב-TypeScript לשיפור טיפוסיות ב-JavaScript.',
            modalId: 'serviceTs'
        },
        {
            icon: 'fa-brands fa-git-square text-dark',
            title: 'Service tool Ten',
            description: 'אייקון שמייצג ניהול גרסאות באמצעות Git.',
            modalId: 'serviceGit'
        },
        {
            icon: 'fa-solid fa-network-wired text-purple',
            title: 'Service tool Thirteen',
            description: 'אייקון שמייצג שימוש ב-API לשירותי אינטגרציה ותקשורת.',
            modalId: 'serviceApi'
        },
        {
            icon: 'fa-brands fa-css3-alt text-primary',
            title: 'Service tool Fourteen',
            description: 'אייקון שמייצג שימוש ב-CSS לעיצוב אתרים ולביצוע התאמות עיצוביות.',
            modalId: 'serviceCss'
        }
    ]);

    return serviceCards;
}
