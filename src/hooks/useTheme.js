import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContextInstance.js";

export function useTheme() {
  const context = useContext(ThemeContext); // Obtém o contexto do ThemeContext
  if (context === undefined) {
    // Se o contexto não estiver definido, significa que o hook está sendo usado fora de um ThemeProvider
    throw new Error("useTheme precisa de um ThemeProvider"); // Lança um erro se o hook for usado fora do ThemeProvider
  }
  return context; // Retorna o contexto do ThemeContext, que contém as propriedades e métodos relacionados ao tema
}