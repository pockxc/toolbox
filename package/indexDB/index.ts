export type startParams = {
  dbName: string
  version: number
  tables: string[]
}

class IndexDB {
  private dbName: string = ''

  private version: number = 1

  private tables: string[] = []

  constructor({ dbName, version, tables }: startParams) {
    this.dbName = dbName
    this.version = version
    this.tables = tables
  }
}

export default IndexDB
