module.exports = {
	parser: "babel-eslint",
	extends: ["airbnb", "plugin:prettier/recommended", "prettier/react"],
	plugins: ["jest"],
	env: {
		jest: true,
		browser: true
	},
	settings: {
		"import/resolver": {
			"babel-module": {
				extensions: [".js", ".jsx", ".ts", ".tsx"]
			},
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"]
			}
		}
	},
	rules: {
		camelcase: "off",
		"no-use-before-define": "off",
		"no-restricted-syntax": "off",
		"no-param-reassign": "off",
		"no-sparse-arrays": "off",
		"no-underscore-dangle": "off",
		"no-unused-expressions": "off",
		"no-plusplus": "off",
		"no-bitwise": "off",
		"no-nested-ternary": "off",
		"global-require": "off",
		"jsx-a11y/anchor-is-valid": "off",
		"jsx-a11y/label-has-for": "off",
		"jsx-a11y/label-has-associated-control": "off",
		"jsx-a11y/no-autofocus": "off",
		"react/jsx-props-no-spreading": "off",
		"import/export": "off",
		"import/extensions": "off",
		"import/prefer-default-export": "off",
		"import/no-named-as-default": "off",
		"import/no-webpack-loader-syntax": "off",
		"import/no-extraneous-dependencies": "off",
		"react/no-danger": "off",
		"jsx-a11y/anchor-has-content": "off",
		"react/no-multi-comp": "off",
		"react/require-default-props": "off",
		"react/default-props-match-prop-types": "off",
		"react/no-array-index-key": "off",
		"react/prop-types": "off",
		"react/jsx-filename-extension": "off",
		"react/destructuring-assignment": "off",
		"react/button-has-type": "off",
		"react/state-in-constructor": "off",
		"jsx-a11y/accessible-emoji": "off",
		"jest/consistent-test-it": [
			"error",
			{
				fn: "test",
				withinDescribe: "test"
			}
		],
		"import/order": [
			"error",
			{
				"newlines-between": "never",
				groups: [["builtin", "external", "internal"], "parent", "sibling", "index"]
			}
		]
	},
	overrides: [
		{
			files: ["**/*.md"],
			plugins: ["markdown"],
			rules: {
				"no-unused-vars": "off",
				"react/react-in-jsx-scope": "off"
			}
		},
		{
			files: ["**/*.ts", "**/*.tsx"],
			parser: "@typescript-eslint/parser",
			plugins: ["@typescript-eslint"],
			rules: {
				"no-undef": "off",
				"no-unused-vars": "off",
				"no-restricted-globals": "off",
				"no-useless-constructor": "off"
			}
		}
	]
};
