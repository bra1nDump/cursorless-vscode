export const supportedLanguageIds = [
  "c",
  "clojure",
  "cpp",
  "css",
  "csharp",
  "go",
  "html",
  "java",
  "javascript",
  "javascriptreact",
  "json",
  "jsonc",
  "markdown",
  "php",
  "python",
  "ruby",
  "scala",
  "scss",
  "typescript",
  "typescriptreact",
  "xml",
  "objective-cpp"
] as const;

export type SupportedLanguageId = typeof supportedLanguageIds[number];
