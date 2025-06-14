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

  public listAuthors(options?: { page?: number, pageSize?: number }) {
    const page = options?.page || 1;
    const pageSize = options?.pageSize || 10;

    return this.knex
        .table<Author>("authors")
        .select("*")
        .offset((page - 1) * pageSize)
        .limit(pageSize)
  }

  public findAuthorById(id: string|number) {
    return this.knex
        .table<Author>('authors')
        .select('*')
        .where('id', id)
        .first();
  }

  public createAuthor(fields: Partial<Author>) {
    return this.knex
        .table<Author>('authors')
        .insert(fields);
  }

  public updateAuthorById(id: string, fields: Partial<Author>) {
    return this.knex
        .table<Author>('authors')
        .where('id', id)
        .update(fields)
  }
}

export default new Db();
