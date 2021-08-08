module.exports = {
  extends: [
   // "eslint:recommended",
   // "plugin:react/recommended"
  ],
  
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    
     browser: true,
     node: true,
     es6: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  parser: "babel-eslint",
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    "react/jsx-uses-react": "warn",
    "react/jsx-uses-vars": "warn",
  },
  plugins: [
    "react"
  ],
  
};