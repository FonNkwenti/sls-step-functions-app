"use strict";

const { DynamoDB } = require("aws-sdk");
// const dynamodb = new DynamoDB();
const docClient = new DynamoDB.DocumentClient();

const putItem = async (TableName, Item) =>
  await docClient.put({ TableName, Item }).promise();

module.exports = {
  putItem,
};
