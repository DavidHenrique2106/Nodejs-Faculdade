const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Ambiente JS melhor que Java');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`servidor rodando ${PORT}`);
});
