"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const css_1 = require("@emotion/css");
exports.default = (styleOverride, useDarkTheme = false) => {
    const { variables: overrideVariables = {} } = styleOverride, styles = __rest(styleOverride, ["variables"]);
    const themeVariables = {
        light: Object.assign({
            diffViewerBackground: '#fff',
            diffViewerColor: '#212529',
            addedBackground: '#e6ffed',
            addedColor: '#24292e',
            removedBackground: '#ffeef0',
            removedColor: '#24292e',
            wordAddedBackground: '#acf2bd',
            wordRemovedBackground: '#fdb8c0',
            addedGutterBackground: '#cdffd8',
            removedGutterBackground: '#ffdce0',
            gutterBackground: '#f7f7f7',
            gutterBackgroundDark: '#f3f1f1',
            highlightBackground: '#fffbdd',
            highlightGutterBackground: '#fff5b1',
            codeFoldGutterBackground: '#dbedff',
            codeFoldBackground: '#f1f8ff',
            emptyLineBackground: '#fafbfc',
            gutterColor: '#212529',
            addedGutterColor: '#212529',
            removedGutterColor: '#212529',
            codeFoldContentColor: '#212529',
            diffViewerTitleBackground: '#fafbfc',
            diffViewerTitleColor: '#212529',
            diffViewerTitleBorderColor: '#eee',
        }, (overrideVariables.light || {})),
        dark: Object.assign({
            diffViewerBackground: '#2e303c',
            diffViewerColor: '#FFF',
            addedBackground: '#044B53',
            addedColor: 'white',
            removedBackground: '#632F34',
            removedColor: 'white',
            wordAddedBackground: '#055d67',
            wordRemovedBackground: '#7d383f',
            addedGutterBackground: '#034148',
            removedGutterBackground: '#632b30',
            gutterBackground: '#2c2f3a',
            gutterBackgroundDark: '#262933',
            highlightBackground: '#2a3967',
            highlightGutterBackground: '#2d4077',
            codeFoldGutterBackground: '#21232b',
            codeFoldBackground: '#262831',
            emptyLineBackground: '#363946',
            gutterColor: '#464c67',
            addedGutterColor: '#8c8c8c',
            removedGutterColor: '#8c8c8c',
            codeFoldContentColor: '#555a7b',
            diffViewerTitleBackground: '#2f323e',
            diffViewerTitleColor: '#555a7b',
            diffViewerTitleBorderColor: '#353846',
        }, (overrideVariables.dark || {})),
    };
    const variables = useDarkTheme ? themeVariables.dark : themeVariables.light;
    const content = (0, css_1.css)({
        width: '100%',
        label: 'content',
    });
    const splitView = (0, css_1.css)({
        [`.${content}`]: {
            width: '50%',
        },
        label: 'split-view',
    });
    const diffContainer = (0, css_1.css)({
        width: '100%',
        background: variables.diffViewerBackground,
        pre: {
            margin: 0,
            whiteSpace: 'pre-wrap',
            lineHeight: '25px',
        },
        label: 'diff-container',
        borderCollapse: 'collapse',
    });
    const codeFoldContent = (0, css_1.css)({
        color: variables.codeFoldContentColor,
        label: 'code-fold-content',
    });
    const contentText = (0, css_1.css)({
        color: variables.diffViewerColor,
        label: 'content-text',
    });
    const titleBlock = (0, css_1.css)({
        background: variables.diffViewerTitleBackground,
        padding: 10,
        borderBottom: `1px solid ${variables.diffViewerTitleBorderColor}`,
        label: 'title-block',
        ':last-child': {
            borderLeft: `1px solid ${variables.diffViewerTitleBorderColor}`,
        },
        [`.${contentText}`]: {
            color: variables.diffViewerTitleColor,
        },
    });
    const lineNumber = (0, css_1.css)({
        color: variables.gutterColor,
        label: 'line-number',
    });
    const diffRemoved = (0, css_1.css)({
        background: variables.removedBackground,
        color: variables.removedColor,
        pre: {
            color: variables.removedColor,
        },
        [`.${lineNumber}`]: {
            color: variables.removedGutterColor,
        },
        label: 'diff-removed',
    });
    const diffAdded = (0, css_1.css)({
        background: variables.addedBackground,
        color: variables.addedColor,
        pre: {
            color: variables.addedColor,
        },
        [`.${lineNumber}`]: {
            color: variables.addedGutterColor,
        },
        label: 'diff-added',
    });
    const wordDiff = (0, css_1.css)({
        padding: 2,
        display: 'inline-flex',
        borderRadius: 1,
        label: 'word-diff',
    });
    const wordAdded = (0, css_1.css)({
        background: variables.wordAddedBackground,
        label: 'word-added',
    });
    const wordRemoved = (0, css_1.css)({
        background: variables.wordRemovedBackground,
        label: 'word-removed',
    });
    const codeFoldGutter = (0, css_1.css)({
        backgroundColor: variables.codeFoldGutterBackground,
        label: 'code-fold-gutter',
    });
    const codeFold = (0, css_1.css)({
        backgroundColor: variables.codeFoldBackground,
        height: 40,
        fontSize: 14,
        fontWeight: 700,
        label: 'code-fold',
        a: {
            textDecoration: 'underline !important',
            cursor: 'pointer',
            pre: {
                display: 'inline',
            },
        },
    });
    const emptyLine = (0, css_1.css)({
        backgroundColor: variables.emptyLineBackground,
        label: 'empty-line',
    });
    const marker = (0, css_1.css)({
        width: 25,
        paddingLeft: 10,
        paddingRight: 10,
        userSelect: 'none',
        label: 'marker',
        [`&.${diffAdded}`]: {
            pre: {
                color: variables.addedColor,
            },
        },
        [`&.${diffRemoved}`]: {
            pre: {
                color: variables.removedColor,
            },
        },
    });
    const highlightedLine = (0, css_1.css)({
        background: variables.highlightBackground,
        label: 'highlighted-line',
        [`.${wordAdded}, .${wordRemoved}`]: {
            backgroundColor: 'initial',
        },
    });
    const highlightedGutter = (0, css_1.css)({
        label: 'highlighted-gutter',
    });
    const gutter = (0, css_1.css)({
        userSelect: 'none',
        minWidth: 50,
        padding: '0 10px',
        label: 'gutter',
        textAlign: 'right',
        background: variables.gutterBackground,
        '&:hover': {
            cursor: 'pointer',
            background: variables.gutterBackgroundDark,
            pre: {
                opacity: 1,
            },
        },
        pre: {
            opacity: 0.5,
        },
        [`&.${diffAdded}`]: {
            background: variables.addedGutterBackground,
        },
        [`&.${diffRemoved}`]: {
            background: variables.removedGutterBackground,
        },
        [`&.${highlightedGutter}`]: {
            background: variables.highlightGutterBackground,
            '&:hover': {
                background: variables.highlightGutterBackground,
            },
        },
    });
    const emptyGutter = (0, css_1.css)({
        '&:hover': {
            background: variables.gutterBackground,
            cursor: 'initial',
        },
        label: 'empty-gutter',
    });
    const line = (0, css_1.css)({
        verticalAlign: 'baseline',
        label: 'line',
    });
    const defaultStyles = {
        diffContainer,
        diffRemoved,
        diffAdded,
        splitView,
        marker,
        highlightedGutter,
        highlightedLine,
        gutter,
        line,
        wordDiff,
        wordAdded,
        wordRemoved,
        codeFoldGutter,
        codeFold,
        emptyGutter,
        emptyLine,
        lineNumber,
        contentText,
        content,
        codeFoldContent,
        titleBlock,
    };
    const computerOverrideStyles = Object.keys(styles).reduce((acc, key) => (Object.assign(Object.assign({}, acc), {
        [key]: (0, css_1.css)(styles[key]),
    })), {});
    return Object.keys(defaultStyles).reduce((acc, key) => (Object.assign(Object.assign({}, acc), {
        [key]: computerOverrideStyles[key]
            ? (0, css_1.cx)(defaultStyles[key], computerOverrideStyles[key])
            : defaultStyles[key],
    })), {});
};
