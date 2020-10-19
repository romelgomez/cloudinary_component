import { truncate, TruncateOptions }  from 'lodash';

/**
 * Capitalize the first char of the string
 * @returns {string}
 */
const capitalizeFirstChar = (text: string): string => {
  return text.length > 0 ? text.trim().replace(/(^\w?)/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1);}) : '';
}
    
/**
 * @function truncateText
 * @description truncate text
 * @returns {string}
 */
const truncateText = (string?: string | undefined, options?: TruncateOptions | undefined): string => {
  return truncate(string, {
    separator: /,? +/,
    ...options
  });
}

/**
 * @function slug 
 * @description URL slug string; from 'hello word' to 'hello-word'
 * @param text 
 * @returns {string}
 */
const slug = (text: string): string => {
  return text.length > 0 ? String(text).toLowerCase().replace(/[^a-zá-źA-ZÁ-Ź0-9]/g, ' ').trim().replace(/\s{2,}/g, ' ').replace(/\s+/g, '-') : '';
}

/**
 * @function capitalize text
 * @param text 
 * @returns {string}
 */
const capitalize = (text: string): string => {
  return text.length > 0 ? text.replace(/([^\W_]+[^\s-]*) */g, function(t: string){return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();}) : '';
}

module.exports = {
  capitalizeFirstChar,
  capitalize,
  truncateText,
  slug,
};

