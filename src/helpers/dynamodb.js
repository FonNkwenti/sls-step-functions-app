"use strict";

const { DynamoDb } = require("aws-sdk");
const dynamodb = new DynamoDb();
const docClient = new DynamoDb.DocumentClient();

const putItem = async (TableName, Item) =>
  await docClient.put({ TableName, Item }).promise();

module.exports = {
  putItem,
};
