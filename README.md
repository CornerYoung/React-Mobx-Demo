## package.json
在安装依赖之前运行 npm run eject 或 yarn eject
```javascript
babel项：
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          "loose": true
        }
      ]
    ]
  }

  eslintConfig项：
  "parserOptions": {
      "ecmaFeatures": {
        "legacyDecorators": true
      }
    }
```

## 安装相关依赖

mobx <br>
mobx-react <br>
@babel/plugin-proposal-decorators <br>
@babel/plugin-proposal-class-properties <br>
@babel/helper-create-regexp-features-plugin [报错提示这个模块缺失]

