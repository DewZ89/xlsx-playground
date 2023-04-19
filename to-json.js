function toJson(data, schema) {
  const headers = data[0];
  const rows = data.slice(1);

  const schemaWithIndexes = Object.keys(schema).reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: Object.assign({}, schema[curr], {
        index: headers.findIndex((header) => header === curr),
      }),
    };
  }, {});

  console.log(schemaWithIndexes);

  const jsonData = [];
  for (const itemArray of rows) {
    const jsonItem = {};
    for (const key in schemaWithIndexes) {
      const itemSchema = schemaWithIndexes[key];
      jsonItem[itemSchema.prop] = itemArray[schemaWithIndexes[key].index];
    }
    jsonData.push(jsonItem);
  }

  // console.log(jsonData);
}

module.exports = {
  toJson,
};
