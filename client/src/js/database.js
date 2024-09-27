import { openDB } from 'idb';
const deleteDb = async () => {
  await indexedDB.deleteDatabase("jate");
  console.log("Database deleted");
};

deleteDb();

const initdb = async () =>
  openDB('jate', 2, {
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
  console.log("PUT to the database");
  const db = await openDB("jate", 2);
  const tx = db.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  const request = store.put({ id: 1, content }); 
  const result = await request;
  console.log("Data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');
  const db = await openDB('jate', 2);
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get(1);  
  const result = await request;
  console.log('Data retrieved from the database', result?.content);
  return result?.content;
};


initdb();
