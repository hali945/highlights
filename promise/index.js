class myPromise {
    constructor(fn) {
        this.status = 'pending'
        this.value = undefined
        this.reason = undefined
        this.onResolvedCallbacks = []
        this.onRejectedCallbacks = []
        let resolve = (value) => {
            if (this.status === 'pending') {
                this.status = 'fulfilled'
                this.value = value  // 保存成功的值
                this.onResolvedCallbacks.forEach(fn => fn()) // 发布
            }
        }
    }
}