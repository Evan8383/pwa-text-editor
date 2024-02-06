import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT request sent to database');

  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const update = store.put({ id: 1, value: content });
  const results = await update;
  console.log('PUT request completed', results);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {

}

initdb();
