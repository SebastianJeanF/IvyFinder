import {onUnmounted, onMounted, ref} from 'vue'

export function useGeolocation(){
    const coords = ref({ latitude: 0, longitude: 0}) /* Reactive ref */
    const isSupported = "navigator" in window && 'geolocation' in navigator

    let watcher = null
    onMounted (() => {}) /* Updates whenever user's position changes */
        if (isSupported)
            watcher = navigator.geolocation.watchPosition(
                position => (coords.value = position.coords)
            )

    onUnmounted( () => {
        if (watcher) navigator.geolocation.clearWatch(watcher)

    })
    return { coords, isSupported}
}
/* Composable function */
/* We can use this throughout our components as a reusable function */