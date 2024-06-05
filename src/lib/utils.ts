import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function levenshteinDistance(s1: string, s2: string): number {
  const m = s1.length;
  const n = s2.length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
      dp[i][0] = i;
  }

  for (let j = 0; j <= n; j++) {
      dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          if (s1[i - 1] === s2[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1];
          } else {
              dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
          }
      }
  }

  return dp[m][n];
}

type PunctuationPause = {
  [key: string]: number;
};

export const punctuationPause: PunctuationPause = {
  ',': 200,
  '.': 400,
  '?': 400,
  '!': 400,
  ':': 300,
  ';': 300
};

export const getWordDuration = (word: string) => {
  const baseDuration = 100; // Base duration for a word
  const extraDuration = word.length * 50; // Additional duration per character
  const lastChar = word[word.length - 1];
  const punctuationDuration = punctuationPause[lastChar] || 0; // Extra duration for punctuation
  return baseDuration + extraDuration + punctuationDuration;
};