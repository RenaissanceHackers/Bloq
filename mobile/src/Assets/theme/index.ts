import theme from './tokens.json';

export const fontWeightMap = {
    'Thin': '100',
    'ExtraLight': '200',
    'Light': '300',
    'Regular': '400',
    'Medium': '500',
    'SemiBold': '600',
    'Bold': '700',
    'ExtraBold': '800',
    'Black': '900',
};
const resolveThemeValue = (refString) => {
    // 解构引用字符串，例如将 "{fontFamilies.poppins}" 解构为 ["fontFamilies", "poppins"]
    const path = refString.replace(/[{}]/g, '').split('.');
    // 通过 reduce 遍历这个路径来解析最终的值
    let resolvedValue = path.reduce((acc, cur) => acc[cur], theme.global);
    return resolvedValue.value; // 返回解析后的值
}

const getFontWeight = (fontWeightToken) => fontWeightMap[fontWeightToken] || '400';
export { getFontWeight, resolveThemeValue }
// 导出 themeTokens 作为默认导出
export default theme;
