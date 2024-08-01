import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

const themeConfig = resolveConfig(tailwindConfig);

export const theme = themeConfig.theme;
