export default function applyDelay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}