import path from 'path';
import { fileURLToPath } from 'url';

// Simulando __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js', // Arquivo principal
  output: {
    filename: 'bundle.js', // Nome do arquivo gerado
    path: path.resolve(__dirname), // Diretório atual
  },
  mode: 'development',
  devServer: {
    static: __dirname, // Diretório atual
    port: 8080,
    open: true,
  },
};
