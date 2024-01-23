// Importa a função createTheme do pacote @mui/material.
import { createTheme } from "@mui/material";

// Cria um tema personalizado utilizando a função createTheme.
const theme = createTheme({
  // Define a paleta de cores do tema.
  palette: {
    // Define a cor principal (primária) com o código hexadecimal #f52273.
    primary: {
      main: "#f52273",
    },
    // Define a cor secundária com o código hexadecimal #f5f5f5.
    secondary: {
      main: "#f5f5f5",
    },
    // Define a cor do texto principal com o código hexadecimal #f52273.
    text: {
      primary: "#f52273",
    },
  },
  // Define objetos vazios para as propriedades shape, components e MuiTextField.
  shape: {},
  components: {},
  MuiTextField: {},
});

// Exporta o tema criado para que possa ser utilizado em outros arquivos.
export default theme;
