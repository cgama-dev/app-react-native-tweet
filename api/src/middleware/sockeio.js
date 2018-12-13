const socketMiddleware = (io) => {
    
    const socket = {
        middleareSocketIo: (req, res, next) => {
            req.io = io

            return next()
        }
    }

    return socket
}

module.exports = socketMiddleware