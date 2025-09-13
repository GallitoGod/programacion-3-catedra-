export function mountHeader() {
    try {
        const btnNav = document.getElementById('nav-switch')
        const nav = document.getElementById('nav-section')

        function toggleMenu() {
            nav.hidden = !(nav.hidden)
        }
        
        btnNav.addEventListener('click', toggleMenu)

        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !btnNav.contains(e.target) && nav.hidden == false) {
                toggleMenu()
            }
        })
    } catch {
        console.error('No existe header')
    }
}