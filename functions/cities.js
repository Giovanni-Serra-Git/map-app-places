/* eslint-disable no-unused-vars */
// functions/questions.js

import { promises as fs } from 'fs';
import path from 'path';

export const handler = async (event, context) => {
  try {
    // Legge il file questions.json dalla cartella public
    const filePath = path.resolve('functions/data/cities.json');
    const data = await fs.readFile(filePath, 'utf8'); // Usa fs.promises per la lettura asincrona

    return {
      statusCode: 200,
      body: data,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Errore nel leggere il file JSON' }),
    };
  }
};
