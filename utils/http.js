const promisic = function (func) {
    return function (params = {}) {
        return new Promise((resolve, reject) => {
            const args = Object.assign(params, {
                success: (res) => {
                    resolve(res);
                },
                fail: (error) => {
                    reject(error);
                }
            });
            func(args);
        });
    };
};

class Http {
    // 同步Http请求
    static async asyncRequest(url, method, data, backMethod) {
        console.log("8888888888888888888888");
        const res = await promisic(wx.request)({
            url: url,
            method: method,
            data: data,
        })
        backMethod(res)
    }
}

export { Http }
