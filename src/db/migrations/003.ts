/**
 * Migration file to add a column to the `authors` table
 */

import type { Knex } from "knex";

export function up(knex: Knex) {
    return knex.schema.table("authors", (table) => {
        table.string("subjectivePronoun").nullable();
        table.string("objectivePronoun").nullable();
        table.string("possessivePronoun").nullable();
    });
}

export function down(knex: Knex) {
    return knex.schema.table("authors", (table) => {
        table.dropColumn("subjectivePronoun");
        table.dropColumn("objectivePronoun");
        table.dropColumn("possessivePronoun");
    });
}
