"use client";
import { useParams } from 'next/navigation';

const ArticlePage = () => {
    const { id } = useParams();

  // כאן ניתן להביא את נתוני המאמר לפי ה-ID
  // לדוגמה, באמצעות קריאה ל-API או שימוש בנתונים מקומיים

  return (
    <div>
      <h1>כותרת המאמר {id}</h1>
      <p>תוכן המאמר...</p>
    </div>
  );
};

export default ArticlePage;
