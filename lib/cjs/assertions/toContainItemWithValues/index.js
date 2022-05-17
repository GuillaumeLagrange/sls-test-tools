"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _testResult = require("../../utils/testResult");

var _general = require("../../helpers/general");

var _default = {
  async toContainItemWithValues(tableName, values) {
    const docClient = new _general.AWSClient.DynamoDB.DocumentClient({
      region: _general.region
    });
    const keys = {
      pk: values["PK"]
    };

    if (values["SK"] !== undefined) {
      keys.sk = values["SK"];
    }

    const queryParams = {
      Key: keys,
      TableName: tableName
    };
    let allMatched = true;
    let itemExists = true;

    try {
      const result = await docClient.get(queryParams).promise();
      Object.entries(values).forEach(([key, val]) => {
        if (result.Item !== undefined) {
          if (key in result.Item) {
            if (result.Item[key] !== val) {
              allMatched = false;
            }
          }
        } else {
          itemExists = false;
        }
      });

      if (!itemExists) {
        return (0, _testResult.testResult)(`Item does not exist.`, false);
      } else if (!allMatched) {
        return (0, _testResult.testResult)(`Some values do not match as expected.`, false);
      } else {
        return (0, _testResult.testResult)("Item exists with expected values", true);
      }
    } catch (e) {
      console.log(e);
      return (0, _testResult.testResult)("Item with specified keys does not exist.", false);
    }
  }

};
exports.default = _default;
//# sourceMappingURL=index.js.map