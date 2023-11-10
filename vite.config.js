// import Inspect from 'vite-plugin-inspect'
import { resolve } from 'path'
export default {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                countDownTimer: resolve(__dirname, "apps/countdown-timer/index.html")

            }
        }
    }
}