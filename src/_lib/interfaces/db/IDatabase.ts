export default interface IDatabase {
  dbName:string;
  type:'SQL'|'NoSQL';
  dialect: string;
  
  host: string;
  port: number;

  username: string;
  password: string;

  schemas: ISchema[];
  
}

export interface ISchema {
  name: string;
  tables: ITable[];
}

export interface ITable {
  name: string;
  primaryKey: string | number;
  columns: Column[];
}

export interface IConnectingTable<T1, T2> extends ITable {
  columns: {
    fk1: Column<T1>;
    fk2: Column<T2>;
  };
}

export interface Column<T> {
  name: string;
  description?: string;
  type: T;
  nullable: boolean | true;
  unique: boolean | false;
}
