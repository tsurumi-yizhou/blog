export function count(data: string | undefined) {
    if (!data) return 0;
    const cjkRegex = /[\u4e00-\u9fff\u3040-\u30ff\u31f0-\u31ff\uff66-\uff9f]/g;
    const cjkMatches = data.match(cjkRegex);
    const cjkCount = cjkMatches ? cjkMatches.length : 0;

    const alphabetRegex = /\b[\p{L}]+\b/gu;
    const alphabetMatches = data.match(alphabetRegex);
    const alphabetCount = alphabetMatches ? alphabetMatches.length : 0;

    return cjkCount + alphabetCount;
}
