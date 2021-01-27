module.exports = () => {
if(!typeof window==undefined) return navigator.platform
return process.platform
}