let drawer, drawerBackground

if(typeof window !== "undefined"){
    drawer = document.querySelector('.drawer')
    drawerBackground = document.querySelector('.drawer-background')
}

const toggleDrawer = () => {
    drawer.classList.toggle('drawer-open')
    drawerBackground.classList.toggle('drawer-background-open')
}

export default toggleDrawer