"use strict";

const { putItem } = require("../helpers/dynamodb");
const { randomUUID } = require("crypto");
const TableName = process.env.DYNAMODB_BOOK_TABLE;

const handler = async (event) => {
  try {
    console.log(`Raw Event === ${event}`);
    const item = JSON.parse(event.body);
    console.log(`logging item===${item}`);
    const bookId = randomUUID();
    const now = new Date().toISOString();

    const keySchema = { PK: "bookId" };

    let Item = {
      [keySchema.PK]: bookId,
      ...item,
      createAt: now,
    };

    await putItem(TableName, Item);
    return {
      statusCode: 201,
      body: JSON.stringify(body),
      headers: { "Content-Type": contentType },
    };
  } catch (error) {
    console.error(error);
    const { statusCode, message } = error;
    return { statusCode, message };
  }
};

module.exports = { handler };
