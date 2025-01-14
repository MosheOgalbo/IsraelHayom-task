"use client";

import { useParams } from 'next/navigation';

const WriterPage = () => {
  const { id } = useParams();

  // כאן ניתן להביא את נתוני הכותב לפי ה-ID
  // לדוגמה, באמצעות קריאה ל-API או שימוש בנתונים מקומיים

  return (
    <div>
      <h1>דף כותב {id}</h1>
      <p>מידע על הכותב...</p>
    </div>
  );
};

export default WriterPage;
