export default interface IDatabase {
  dbname: string;
  
  type: 'SQL' | 'NoSQL';
  dialect: string;
  
  host: string;
  port: number;

  username: string;
  password: string;

  schemas: ISchema[];
  
}

interface ISchema {
  name: string;
  tables: ITable[];
}

interface ITable {
  name: string;
  primaryKey: string | number;
  columns: Columns[];
}
