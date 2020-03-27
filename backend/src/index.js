const express = require('express');
const elastic = require('./elastic');
const router = require('./routes');

const app = express();

app.use(express.json());
app.use(router);

(async function main() {
  const isElasticReady = await elastic.checkConnection();
  if (isElasticReady) {
    const elasticIndex = await elastic.esclient.indices.exists({
      index: elastic.index
    });

    if (!elasticIndex) {
      await elastic.createIndex(elastic.index);
      await elastic.setProjectsMapping();
    }

    app.listen(3333);
  }
})();
