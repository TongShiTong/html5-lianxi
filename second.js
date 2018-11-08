this.onmessage = function (res) {
    console.log(res)
    this.postMessage(res.data.one + res.data.tow)
}