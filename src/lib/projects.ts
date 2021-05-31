import Datastore from 'nedb';

const db = new Datastore('./projects.nedb');
db.loadDatabase();

export default db;