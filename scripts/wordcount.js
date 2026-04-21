/**
 * 字数统计和阅读时长计算辅助函数
 */

'use strict';

// 统计字数
hexo.extend.helper.register('wordcount', function(content) {
  if (!content) return 0;
  
  // 移除 HTML 标签
  const text = content.replace(/<[^>]*>/g, '');
  
  // 移除空白字符
  const cleanText = text.replace(/\s/g, '');
  
  // 统计中文字符和英文单词
  const chineseChars = cleanText.match(/[\u4e00-\u9fa5]/g) || [];
  const englishWords = text.match(/[a-zA-Z]+/g) || [];
  
  // 中文按字符数统计，英文按单词数统计
  const count = chineseChars.length + englishWords.length;
  
  return count;
});

// 计算阅读时长（分钟）
hexo.extend.helper.register('min2read', function(content, wordsPerMinute) {
  if (!content) return 0;
  
  // 默认每分钟阅读 300 字
  const wpm = wordsPerMinute || 300;
  
  // 移除 HTML 标签
  const text = content.replace(/<[^>]*>/g, '');
  
  // 移除空白字符
  const cleanText = text.replace(/\s/g, '');
  
  // 统计中文字符和英文单词
  const chineseChars = cleanText.match(/[\u4e00-\u9fa5]/g) || [];
  const englishWords = text.match(/[a-zA-Z]+/g) || [];
  
  // 中文按字符数统计，英文按单词数统计
  const count = chineseChars.length + englishWords.length;
  
  // 计算阅读时长（分钟）
  const minutes = Math.ceil(count / wpm);
  
  return minutes < 1 ? 1 : minutes;
});
