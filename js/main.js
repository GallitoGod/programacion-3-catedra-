
import { mountHeader } from './header.js'

document.addEventListener('DOMContentLoaded', () => {
    mountHeader()

    const page = document.body.dataset.page
    initPage(page)
}) 

async function initPage(page) {
    try {
        const mod = await import(`./pages/${page}.js`)
        mod?.init?.()
    } catch {

    }
}