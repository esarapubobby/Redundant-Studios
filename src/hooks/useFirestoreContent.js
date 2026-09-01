import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, onSnapshot } from 'firebase/firestore';

export const useFirestoreContent = (docId = 'main') => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!db) {
      setError(new Error('Firestore not initialized'));
      setLoading(false);
      return;
    }

    try {
      const unsubscribe = onSnapshot(
        doc(db, 'content', docId),
        (snapshot) => {
          if (snapshot.exists()) {
            setContent(snapshot.data());
          } else {
            setContent(null);
          }
          setLoading(false);
        },
        (err) => {
          console.error('Firestore error:', err);
          setError(err);
          setLoading(false);
        }
      );

      const timeout = setTimeout(() => {
        setLoading(false);
      }, 3000);

      return () => {
        unsubscribe();
        clearTimeout(timeout);
      };
    } catch (err) {
      console.error('Firestore setup error:', err);
      setError(err);
      setLoading(false);
    }
  }, [docId]);

  return { content, loading, error };
};