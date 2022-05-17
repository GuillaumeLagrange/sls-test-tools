"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _general = require("../../helpers/general");

var _default = {
  async toExistInDynamoTable({
    PK,
    SK
  }, tableName) {
    const docClient = new _general.AWSClient.DynamoDB.DocumentClient();

    if (SK === undefined) {
      const queryParams = {
        TableName: tableName,
        KeyConditionExpression: "#pk = :pk",
        ExpressionAttributeNames: {
          "#pk": "PK"
        },
        ExpressionAttributeValues: {
          ":pk": "PK"
        },
        Limit: 1
      };
      const result = await docClient.query(queryParams).promise();
      return {
        message: () => `expected to find ${PK} in ${tableName}`,
        pass: result.Count === 1
      };
    }

    const getParams = {
      TableName: tableName,
      Key: {
        PK,
        SK
      }
    };
    const result = await docClient.get(getParams).promise();
    return {
      message: () => `expected to find ${PK} in ${tableName}`,
      pass: result.Item !== undefined
    };
  }

};
exports.default = _default;
//# sourceMappingURL=index.js.map