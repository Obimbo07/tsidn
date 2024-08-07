import db from './db';

export function addSubscriber(username, email, password, phone_number, subscription) {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO subscribers (username, phone_number, email, password, subscription) VALUES (?, ?, ?, ?, ?)',
      [username, email, password, phone_number, subscription],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
}
