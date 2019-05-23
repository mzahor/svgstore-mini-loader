module.exports = function svgstoreMiniLoader(source, map, meta) {
    return `/* __svgstore_mini_loader__path=${this.resource} */`;
};
