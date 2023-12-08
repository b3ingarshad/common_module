// vite.config.ts
import { UserConfigExport, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { name } from "./package.json";

const App = async (): Promise<UserConfigExport> => {
  return defineConfig({
    server: {
      port: 8080, // Your localhost port number
      host: "localhost",
    },
    plugins: [react()],
    publicDir: false,
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/index.tsx"),
        name,
        formats: ["es", "umd"],
        fileName: (format) => `${name}.${format}.js`,
      },

      rollupOptions: {
        external: [
          "react",
          "react-dom",
          "@mui/material",
          "@mui/x-data-grid-pro",
        ],

        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "@mui/material": "@mui/material",
            "@mui/x-data-grid-pro": "@mui/x-data-grid-pro",
          },
        },
      },
    },
  });
};

export default App;
