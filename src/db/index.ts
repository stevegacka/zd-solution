/**
 * Database client
 * It's essentially a wrapper around Knex https://knexjs.org/
 */

import initKnex, { Knex } from "knex";

import config from "./config";
import type { Author } from "./types";

export * from "./types";

export class Db {
  private knex: Knex;

  constructor() {
    this.knex = initKnex(config.development);
  }

  public listAuthors() {
    return this.knex
        .table<Author>("authors")
        .select("*")
        .limit(10);
  }

  public findAuthorById(id: string) {
    return this.knex
        .table<Author>('authors')
        .select('*')
        .where('id', id)
        .first();
  }
}

export default new Db();
