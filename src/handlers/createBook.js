"use strict";

const { putItem } = require("../helpers/dynamodb");
const { randomUUID } = require("crypto");
const TableName = process.env.DYNAMODB_BOOK_TABLE;

const handler = async (event) => {
  try {
    const item = JSON.parse(event.body);
    const id = randomUUID();
    const now = new Date().toISOString();

    const keySchema = { PK: "id" };

    let Item = {
      [keySchema.PK]: id,
      ...item,
      createAt: now,
    };

    await putItem(TableName, Item);
    return {
      statusCode,
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
